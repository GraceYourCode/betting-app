interface isoDate {
  date: string;
  time: string;
}

const month = (date: Date): string =>
  (date.getMonth() + 1).toString().padStart(2, "0");

const day = (date: Date): string => date.getDate().toString().padStart(2, "0");

const hours = (date: Date): string =>
  date.getHours().toString().padStart(2, "0");

const minutes = (date: Date): string =>
  date.getMinutes().toString().padStart(2, "0");

function formatTime(date: Date): string {
  return `${hours(date)}: ${minutes(date)}`;
}

function formatDate(date: Date): string {
  return `${day(date)}/${month(date)}`;
}

export function formatISODate(isoDate: string): isoDate {
  const date = new Date(isoDate);

  return {
    date: formatDate(date),
    time: formatTime(date),
  };
}
