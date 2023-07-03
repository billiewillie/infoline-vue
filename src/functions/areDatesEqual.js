export function areDatesEqual(dateStart, dateToCompare, date = 'date') {
    const date1 = new Date(dateStart);
    const date2 = new Date(dateToCompare);

    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}