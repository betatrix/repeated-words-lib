export function convertArrayObjectToArray(obj) {
    return Object.keys(obj).map((key) => [key]);
}