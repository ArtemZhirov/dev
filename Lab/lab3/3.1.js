const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    key += characters[random(characters.length - 1)];
  }
  return key;
};

  
console.log(generateKey(8, 'abcdefghijklmnopqrstuvwxyz0123456789'));
