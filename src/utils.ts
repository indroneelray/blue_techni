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
    key:"upcoming_campaigns"
  },
  {
    value:1,
    key:"live_campaigns"
  },
  {
    value:2,
    key:"past_campaigns"
  }
]

/**
 *
 * @param date
 * @return - Difference between today and date in days
 */
export const getDiffInDays = (date: number) => {
  let today = new Date().getTime();
  let diff = ((today - date) / (1000 * 3600 * 24)).toFixed(0);
  console.log(diff)
  return Number(diff);
};



