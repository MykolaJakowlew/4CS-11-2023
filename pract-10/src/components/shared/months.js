export const MONTHS = [
 "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
];


export function getDaysInMonth (year, month) {
 return new Date(year, month + 1, 0).getDate();
}