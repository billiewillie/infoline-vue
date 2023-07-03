export function setMonthsEvents(date1, date2, date3) {
    const dateStart = new Date(date1);
    const dateEnd = new Date(date2);
    const dateToCompare = new Date(date3);
    return (dateStart.getFullYear() === dateToCompare.getFullYear() && dateStart.getMonth() === dateToCompare.getMonth())
        || (dateEnd.getFullYear() === dateToCompare.getFullYear() && dateEnd.getMonth() === dateToCompare.getMonth());
}