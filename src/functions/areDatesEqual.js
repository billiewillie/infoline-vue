export function areDatesEqual(a, b, date = 'date') {
    const date1 = new Date(a);
    const date2 = new Date(b);
    if (date === 'date') {
        return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
    }
    if (date === 'month') {
        return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
    }
}