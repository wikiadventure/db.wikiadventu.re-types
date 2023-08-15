// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.js";
import { loadSync } from "./mod.js";
if (!(dntShim.Deno.readTextFileSync instanceof Function)) {
    // Avoid errors that occur in deno deploy: https://github.com/denoland/deno_std/issues/1957
    console.warn(`Deno.readTextFileSync is not a function: No .env data was read.`);
}
else {
    loadSync({ export: true });
}
