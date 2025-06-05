export function objectToFormattedArray(obj) {
    return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
}