export function setDaysEvents(date1, date2, date3) {
    const dateStart = new Date(date1);
    const dateEnd = new Date(date2);
    const dateToCompare = new Date(date3);
    return (dateStart.getDate() <= dateToCompare.getDate() && dateStart.getMonth() <= dateToCompare.getMonth() && dateStart.getFullYear() <= dateToCompare.getFullYear())
        && (dateEnd.getDate() >= dateToCompare.getDate() && dateEnd.getMonth() >= dateToCompare.getMonth() && dateEnd.getFullYear() >= dateToCompare.getFullYear());
}