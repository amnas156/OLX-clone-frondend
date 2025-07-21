import { format, isToday, isYesterday, parseISO } from 'date-fns';

export function formatPostedDateTime(dateString: string) {
    const date = parseISO(dateString);

    if (isToday(date)) {
        return `Today at ${format(date, 'h:mm a')}`;
    }

    if (isYesterday(date)) {
        return `Yesterday at ${format(date, 'h:mm a')}`;
    }

    return `${format(date, 'd MMMM')} at ${format(date, 'h:mm a')}`;
}
