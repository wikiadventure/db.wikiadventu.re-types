import * as dntShim from "../../../../../../_dnt.shims.js";
import { getFilePath } from '../../utils/filepath.js';
import { getMimeType } from '../../utils/mime.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { open } = dntShim.Deno;
const DEFAULT_DOCUMENT = 'index.html';
export const serveStatic = (options = { root: '' }) => {
    return async (c, next) => {
        // Do nothing if Response is already set
        if (c.finalized) {
            await next();
            return;
        }
        const url = new URL(c.req.url);
        const filename = options.path ?? decodeURI(url.pathname);
        let path = getFilePath({
            filename: options.rewriteRequestPath ? options.rewriteRequestPath(filename) : filename,
            root: options.root,
            defaultDocument: DEFAULT_DOCUMENT,
        });
        path = `./${path}`;
        let file;
        try {
            file = await open(path);
        }
        catch (e) {
            console.warn(`${e}`);
        }
        if (file) {
            const mimeType = getMimeType(path);
            if (mimeType) {
                c.header('Content-Type', mimeType);
            }
            // Return Response object with stream
            return c.body(file.readable);
        }
        else {
            console.warn(`Static file: ${path} is not found`);
            await next();
        }
        return;
    };
};
