const MONTHS = new Array(12).fill(0).map((_, i) => {
 return new Date(`${i + 1}/1`).toLocaleDateString(undefined, { month: 'long' });
});

module.exports = { MONTHS };