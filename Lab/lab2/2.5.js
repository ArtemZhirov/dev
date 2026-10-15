const average = (a, b) => (a + b) / 2;
const a = 6;
const b = 4;
const x = average(a,b);
const square = (n) => n * n;

const cube = (n) => n * n * n;

const calculate = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    const sq = square(i);
    const cb = cube(i);
    result.push(average(sq, cb));
  }
  return result;
};

console.log(calculate());