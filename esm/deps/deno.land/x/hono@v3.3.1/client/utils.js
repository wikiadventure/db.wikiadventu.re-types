export const mergePath = (base, path) => {
    base = base.replace(/\/+$/, '');
    base = base + '/';
    path = path.replace(/^\/+/, '');
    return base + path;
};
export const replaceUrlParam = (urlString, params) => {
    for (const [k, v] of Object.entries(params)) {
        const reg = new RegExp('/:' + k + '({[^}]*})?');
        urlString = urlString.replace(reg, `/${v}`);
    }
    return urlString;
};
export const removeIndexString = (urlSting) => {
    return urlSting.replace(/\/index$/, '/');
};
function isObject(item) {
    return typeof item === 'object' && item !== null && !Array.isArray(item);
}
export function deepMerge(target, source) {
    if (!isObject(target) && !isObject(source)) {
        return source;
    }
    const merged = { ...target };
    for (const key in source) {
        const value = source[key];
        if (isObject(merged[key]) && isObject(value)) {
            merged[key] = deepMerge(merged[key], value);
        }
        else {
            merged[key] = value;
        }
    }
    return merged;
}
