import { format, isToday, isYesterday, parseISO } from 'date-fns';

export function formatPostedDate(dateString: string) {
  const date = parseISO(dateString); 

  if (isToday(date)) return "Today";
  if (isYesterday(date)) return "Yesterday";

  return format(date, "d MMMM"); 
}
