import { format } from "date-fns";

export const formatDateToMonthYear = (date: Date) => {
    let dateFormat = format(new Date(date), "MMMM yyyy");
    return dateFormat;
}