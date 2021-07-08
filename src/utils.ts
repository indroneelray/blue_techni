export const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];


export const TABS = [
  {
    value:0,
    label:"Upcoming Campaigns"
  },
  {
    value:1,
    label:"Live Campaigns"
  },
  {
    value:2,
    label:"Past Campaigns"
  }
]

/**
 *
 * @param date
 * @return - Difference between today and date in days
 */
export const getDiffInDays = (date: number) => {
  let today = new Date().getTime();
  let diff = Math.floor((today - date) / (1000 * 3600 * 24));

  return diff;
};
