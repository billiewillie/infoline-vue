import {MONTHS} from "@/constants";

export function formateDateToHumanDate(date) {
    const splitedDate = date.split('-');
    const day = Number(splitedDate[2]);
    const month = splitedDate[1];
    const year = splitedDate[0];
    return `${day} ${MONTHS[month - 1]} ${year}`;
}
