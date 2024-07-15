const Zainab: string = "Fahad";
console.log(Zainab.toLowerCase());
console.log(Zainab.toUpperCase());
let firstname: string = Zainab.charAt(0).toUpperCase();
let restletters: string = Zainab.slice(1).toLowerCase();
let titleCase = firstname + restletters;
console.log(titleCase);

