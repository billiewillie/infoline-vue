import {MONTHS} from "@/constants";
import {areDatesEqual} from "@/functions/areDatesEqual";
import {getMonthName} from "@/functions/getMonthName";

export function getPrettyDatesRange(date1, date2) {
    if (areDatesEqual(date1, date2)) {
        return `${new Date(date1).getDate()} ${getMonthName(new Date(date1).getMonth())}`;
    } else {
        if (new Date(date1).getMonth() === new Date(date2).getMonth()) {
            return `${new Date(date1).getDate()} - ${new Date(date2).getDate()} ${getMonthName(new Date(date1).getMonth())}`;
        } else {
            return `${new Date(date1).getDate()} ${getMonthName(new Date(date1).getMonth())} - ${new Date(date2).getDate()} ${getMonthName(new Date(date2).getMonth())}`;
        }
    }
}