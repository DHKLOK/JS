let userName = "   bro code   ";


console.log(userName.length);
let firstLetter = userName.charAt(0);

console.log(firstLetter);
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
userName = userName.trim();
//userName = userName.toUpperCase();
userName = userName.toLowerCase();

console.log(userName);

phoneNumber = "814-133-1904";

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);
