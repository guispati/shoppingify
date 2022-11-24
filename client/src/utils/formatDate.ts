import { format } from "date-fns";

export const formatDateToMonthYear = (date: Date) => {
    return format(new Date(date), "MMMM yyyy");
}

export const formatDateComplete = (date: Date) => {
    return format(new Date(date), "EEE dd.M.yyyy");
}

export const formatMonthFromNumberToText = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString("en-US", {
        month: "short",
    });
};