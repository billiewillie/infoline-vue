export function moveItem(array, to, from) {
    const item = array[from];
    array.splice(from, 1);
    array.splice(to, 0, item);
    return array;
}