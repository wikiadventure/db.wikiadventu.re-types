// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
/**
 * Load environment variables from `.env` files.
 * Inspired by the node module [`dotenv`](https://github.com/motdotla/dotenv) and
 * [`dotenv-expand`](https://github.com/motdotla/dotenv-expand).
 *
 * ```sh
 * # .env
 * GREETING=hello world
 * ```
 *
 * Then import the configuration using the `load` function.
 *
 * ```ts
 * // app.ts
 * import { load } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";
 *
 * console.log(await load());
 * ```
 *
 * Then run your app.
 *
 * ```sh
 * > deno run --allow-env --allow-read app.ts
 * { GREETING: "hello world" }
 * ```
 *
 * ## Auto loading
 *
 * `load.ts` automatically loads the local `.env` file on import and exports it to
 * the process environment:
 *
 * ```sh
 * # .env
 * GREETING=hello world
 * ```
 *
 * ```ts
 * // app.ts
 * import "https://deno.land/std@$STD_VERSION/dotenv/load.ts";
 *
 * console.log(Deno.env.get("GREETING"));
 * ```
 *
 * ```sh
 * > deno run --allow-env --allow-read app.ts
 * hello world
 * ```
 *
 * ## Parsing Rules
 *
 * The parsing engine currently supports the following rules:
 *
 * - Variables that already exist in the environment are not overridden with
 *   `export: true`
 * - `BASIC=basic` becomes `{ BASIC: "basic" }`
 * - empty lines are skipped
 * - lines beginning with `#` are treated as comments
 * - empty values become empty strings (`EMPTY=` becomes `{ EMPTY: "" }`)
 * - single and double quoted values are escaped (`SINGLE_QUOTE='quoted'` becomes
 *   `{ SINGLE_QUOTE: "quoted" }`)
 * - new lines are expanded in double quoted values (`MULTILINE="new\nline"`
 *   becomes
 *
 * ```
 * { MULTILINE: "new\nline" }
 * ```
 *
 * - inner quotes are maintained (think JSON) (`JSON={"foo": "bar"}` becomes
 *   `{ JSON: "{\"foo\": \"bar\"}" }`)
 * - whitespace is removed from both ends of unquoted values (see more on
 *   [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim))
 *   (`FOO= some value` becomes `{ FOO: "some value" }`)
 * - whitespace is preserved on both ends of quoted values (`FOO=" some value "`
 *   becomes `{ FOO: " some value " }`)
 * - dollar sign with an environment key in or without curly braces in unquoted
 *   values will expand the environment key (`KEY=$KEY` or `KEY=${KEY}` becomes
 *   `{ KEY: "<KEY_VALUE_FROM_ENV>" }`)
 * - escaped dollar sign with an environment key in unquoted values will escape the
 *   environment key rather than expand (`KEY=\$KEY` becomes `{ KEY: "\\$KEY" }`)
 * - colon and a minus sign with a default value(which can also be another expand
 *   value) in expanding construction in unquoted values will first attempt to
 *   expand the environment key. If it’s not found, then it will return the default
 *   value (`KEY=${KEY:-default}` If KEY exists it becomes
 *   `{ KEY: "<KEY_VALUE_FROM_ENV>" }` If not, then it becomes
 *   `{ KEY: "default" }`. Also there is possible to do this case
 *   `KEY=${NO_SUCH_KEY:-${EXISTING_KEY:-default}}` which becomes
 *   `{ KEY: "<EXISTING_KEY_VALUE_FROM_ENV>" }`)
 *
 * @module
 */
import * as dntShim from "../../../../_dnt.shims.js";
import { filterValues } from "../collections/filter_values.js";
import { withoutAll } from "../collections/without_all.js";
const RE_KeyValue = /^\s*(?:export\s+)?(?<key>[a-zA-Z_]+[a-zA-Z0-9_]*?)\s*=[\ \t]*('\n?(?<notInterpolated>(.|\n)*?)\n?'|"\n?(?<interpolated>(.|\n)*?)\n?"|(?<unquoted>[^\n#]*)) *#*.*$/gm;
const RE_ExpandValue = /(\${(?<inBrackets>.+?)(\:-(?<inBracketsDefault>.+))?}|(?<!\\)\$(?<notInBrackets>\w+)(\:-(?<notInBracketsDefault>.+))?)/g;
export function parse(rawDotenv, restrictEnvAccessTo) {
    const env = {};
    let match;
    const keysForExpandCheck = [];
    while ((match = RE_KeyValue.exec(rawDotenv)) != null) {
        const { key, interpolated, notInterpolated, unquoted } = match
            ?.groups;
        if (unquoted) {
            keysForExpandCheck.push(key);
        }
        env[key] = typeof notInterpolated === "string"
            ? notInterpolated
            : typeof interpolated === "string"
                ? expandCharacters(interpolated)
                : unquoted.trim();
    }
    //https://github.com/motdotla/dotenv-expand/blob/ed5fea5bf517a09fd743ce2c63150e88c8a5f6d1/lib/main.js#L23
    const variablesMap = { ...env, ...readEnv(restrictEnvAccessTo) };
    keysForExpandCheck.forEach((key) => {
        env[key] = expand(env[key], variablesMap);
    });
    return env;
}
export function loadSync({ envPath = ".env", examplePath = ".env.example", defaultsPath = ".env.defaults", export: _export = false, allowEmptyValues = false, restrictEnvAccessTo, } = {}) {
    const conf = envPath ? parseFileSync(envPath, restrictEnvAccessTo) : {};
    if (defaultsPath) {
        const confDefaults = parseFileSync(defaultsPath, restrictEnvAccessTo);
        for (const key in confDefaults) {
            if (!(key in conf)) {
                conf[key] = confDefaults[key];
            }
        }
    }
    if (examplePath) {
        const confExample = parseFileSync(examplePath, restrictEnvAccessTo);
        assertSafe(conf, confExample, allowEmptyValues, restrictEnvAccessTo);
    }
    if (_export) {
        for (const key in conf) {
            if (dntShim.Deno.env.get(key) !== undefined)
                continue;
            dntShim.Deno.env.set(key, conf[key]);
        }
    }
    return conf;
}
export async function load({ envPath = ".env", examplePath = ".env.example", defaultsPath = ".env.defaults", export: _export = false, allowEmptyValues = false, restrictEnvAccessTo, } = {}) {
    const conf = envPath ? await parseFile(envPath, restrictEnvAccessTo) : {};
    if (defaultsPath) {
        const confDefaults = await parseFile(defaultsPath, restrictEnvAccessTo);
        for (const key in confDefaults) {
            if (!(key in conf)) {
                conf[key] = confDefaults[key];
            }
        }
    }
    if (examplePath) {
        const confExample = await parseFile(examplePath, restrictEnvAccessTo);
        assertSafe(conf, confExample, allowEmptyValues, restrictEnvAccessTo);
    }
    if (_export) {
        for (const key in conf) {
            if (dntShim.Deno.env.get(key) !== undefined)
                continue;
            dntShim.Deno.env.set(key, conf[key]);
        }
    }
    return conf;
}
function parseFileSync(filepath, restrictEnvAccessTo) {
    try {
        return parse(dntShim.Deno.readTextFileSync(filepath), restrictEnvAccessTo);
    }
    catch (e) {
        if (e instanceof dntShim.Deno.errors.NotFound)
            return {};
        throw e;
    }
}
async function parseFile(filepath, restrictEnvAccessTo) {
    try {
        return parse(await dntShim.Deno.readTextFile(filepath), restrictEnvAccessTo);
    }
    catch (e) {
        if (e instanceof dntShim.Deno.errors.NotFound)
            return {};
        throw e;
    }
}
function expandCharacters(str) {
    const charactersMap = {
        "\\n": "\n",
        "\\r": "\r",
        "\\t": "\t",
    };
    return str.replace(/\\([nrt])/g, ($1) => charactersMap[$1]);
}
function assertSafe(conf, confExample, allowEmptyValues, restrictEnvAccessTo) {
    const currentEnv = readEnv(restrictEnvAccessTo);
    // Not all the variables have to be defined in .env, they can be supplied externally
    const confWithEnv = Object.assign({}, currentEnv, conf);
    const missing = withoutAll(Object.keys(confExample), 
    // If allowEmptyValues is false, filter out empty values from configuration
    Object.keys(allowEmptyValues ? confWithEnv : filterValues(confWithEnv, Boolean)));
    if (missing.length > 0) {
        const errorMessages = [
            `The following variables were defined in the example file but are not present in the environment:\n  ${missing.join(", ")}`,
            `Make sure to add them to your env file.`,
            !allowEmptyValues &&
                `If you expect any of these variables to be empty, you can set the allowEmptyValues option to true.`,
        ];
        throw new MissingEnvVarsError(errorMessages.filter(Boolean).join("\n\n"), missing);
    }
}
// a guarded env access, that reads only a subset from the Deno.env object,
// if `restrictEnvAccessTo` property is passed.
function readEnv(restrictEnvAccessTo) {
    if (restrictEnvAccessTo && Array.isArray(restrictEnvAccessTo)) {
        return restrictEnvAccessTo.reduce((accessedEnvVars, envVarName) => {
            if (dntShim.Deno.env.get(envVarName)) {
                accessedEnvVars[envVarName] = dntShim.Deno.env.get(envVarName);
            }
            return accessedEnvVars;
        }, {});
    }
    return dntShim.Deno.env.toObject();
}
export class MissingEnvVarsError extends Error {
    missing;
    constructor(message, missing) {
        super(message);
        this.name = "MissingEnvVarsError";
        this.missing = missing;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
function expand(str, variablesMap) {
    if (RE_ExpandValue.test(str)) {
        return expand(str.replace(RE_ExpandValue, function (...params) {
            const { inBrackets, inBracketsDefault, notInBrackets, notInBracketsDefault, } = params[params.length - 1];
            const expandValue = inBrackets || notInBrackets;
            const defaultValue = inBracketsDefault || notInBracketsDefault;
            return variablesMap[expandValue] ||
                expand(defaultValue, variablesMap);
        }), variablesMap);
    }
    else {
        return str;
    }
}
/**
 * @example
 * ```ts
 * import { stringify } from "https://deno.land/std@$STD_VERSION/dotenv/mod.ts";
 *
 * const object = { GREETING: "hello world" };
 * const string = stringify(object); // GREETING='hello world'
 * ```
 *
 * @param object object to be stringified
 * @returns string of object
 */
export function stringify(object) {
    const lines = [];
    for (const [key, value] of Object.entries(object)) {
        let quote;
        let escapedValue = value ?? "";
        if (key.startsWith("#")) {
            console.warn(`key starts with a '#' indicates a comment and is ignored: '${key}'`);
            continue;
        }
        else if (escapedValue.includes("\n")) {
            // escape inner new lines
            escapedValue = escapedValue.replaceAll("\n", "\\n");
            quote = `"`;
        }
        else if (escapedValue.match(/\W/)) {
            quote = "'";
        }
        if (quote) {
            // escape inner quotes
            escapedValue = escapedValue.replaceAll(quote, `\\${quote}`);
            escapedValue = `${quote}${escapedValue}${quote}`;
        }
        const line = `${key}=${escapedValue}`;
        lines.push(line);
    }
    return lines.join("\n");
}
