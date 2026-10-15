const items = [true,'hello',42 ,67,'false','peak',56n,null,undefined]
const counts= {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  bigint: 0,
};
for(const item of items){
    const type =typeof item;
    counts[type]+=1;
}
console.dir(counts);