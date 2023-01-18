let hacker1 = 'Tiffany';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Brenda';
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    ` ${hacker1} has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} and ${hacker2.length} characters!`
  );
}

let hacker1Capitalized = '';

for (let i = 0; i < hacker1.length; i++) {
  hacker1Capitalized += hacker1[i].toUpperCase();
}
console.log(hacker1Capitalized);

let hacker2Reversed = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

let namesCompared = hacker1.toLowerCase().localeCompare(hacker2.toLowerCase());
console.log(namesCompared);

if (namesCompared === -1) {
  console.log(`The ${hacker1}'s name goes first.`);
} else if (namesCompared === 1) {
  console.log(` Yo ${hacker1}'s name goes first definitely.`);
} else {
  console.log('What?! You both have the same name?');
}
