export const supportedLang = [
    "en",
    "fr"
];
export function getLangFromHeaders(req) {
    const langHeaders = req.headers.get("Accept-Language");
    return supportedLang.includes(langHeaders) ? langHeaders : "en";
}
