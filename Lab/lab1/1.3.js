function inc(num) {
    num.n += 7;
}
const obj = { n: 9};
inc(obj);
console.log(obj.n); 