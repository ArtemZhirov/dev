const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Julius Caesar', phone: '+380445551122' },
  { name: 'Nero', phone: '+380445559988' },
  { name: 'Augustus', phone: '+380445557766' },
];

function findPhoneByName(name) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone;
    }
  }
  return undefined; 
}
const nametofind = 'Nero';
const phoneNumber = findPhoneByName(nametofind);
if (phoneNumber) {
    console.log('Phone number for ' + nametofind + ':' + phoneNumber);
}