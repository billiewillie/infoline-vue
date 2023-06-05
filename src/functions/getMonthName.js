import {MONTHS} from "@/constants";

export function getMonthName(monthNumber) {
    return MONTHS[monthNumber - 1];
}