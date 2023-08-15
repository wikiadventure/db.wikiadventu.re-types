import * as dntShim from "../../../../../_dnt.shims.js";
import { ResponseContext } from './http.js';
import { from } from '../rxjsStub.js';
export class IsomorphicFetchHttpLibrary {
    send(request) {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        const resultPromise = dntShim.fetch(request.getUrl(), {
            method: method,
            body: body,
            headers: request.getHeaders(),
        }).then((resp) => {
            const headers = {};
            resp.headers.forEach((value, name) => {
                headers[name] = value;
            });
            const body = {
                text: () => resp.text(),
                binary: () => resp.blob()
            };
            return new ResponseContext(resp.status, headers, body);
        });
        return from(resultPromise);
    }
}
