import { format } from "date-fns";

export const formatDateToMonthYear = (date: Date) => {
    return format(new Date(date), "MMMM yyyy");
}

export const formatDateComplete = (date: Date) => {
    return format(new Date(date), "EEE dd.M.yyyy");
}