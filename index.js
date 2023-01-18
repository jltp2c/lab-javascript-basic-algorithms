// Iteration 1: Names and Input ********************************

let hacker1 = 'Tiffany';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Brenda';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
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

// Iteration 3: Loops ********************************

// 3.1
let hacker1Capitalized = '';

for (let i = 0; i < hacker1.length; i++) {
  hacker1Capitalized += hacker1[i].toUpperCase();
}
console.log(hacker1Capitalized);


// 3.2
let hacker2Reversed = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

// 3.3
let namesCompared = hacker1.toLowerCase().localeCompare(hacker2.toLowerCase());
console.log(namesCompared);

if (namesCompared === -1) {
  console.log(`The ${hacker1}'s name goes first.`);
} else if (namesCompared === 1) {
  console.log(` Yo ${hacker1}'s name goes first definitely.`);
} else {
  console.log('What?! You both have the same name?');
}


//Bonus 1 ********************************

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in interdum quam. Duis efficitur odio et massa sagittis, quis feugiat lorem faucibus. Cras volutpat, libero non congue scelerisque, diam ex lobortis magna, non sodales lectus quam vel tellus. Nulla mattis cursus nibh, in porttitor justo efficitur ac. Aenean ultricies convallis neque nec aliquam. Fusce pellentesque ex a dolor gravida malesuada. Fusce congue id arcu sed dignissim. Aliquam nisl enim, condimentum ac viverra vitae, tempor at magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut feugiat sapien. Suspendisse vel dictum tellus. Nulla pulvinar laoreet mauris et accumsan. Suspendisse viverra nisi id massa pulvinar, nec ornare justo pharetra. In sed nisl leo. Suspendisse ornare interdum nulla, et hendrerit lacus volutpat nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sem urna, accumsan vel nibh eget, volutpat vestibulum justo. Suspendisse euismod quis mi ac aliquet. Mauris tempor mollis arcu, posuere malesuada libero imperdiet sed. Suspendisse feugiat, lacus vel efficitur malesuada, dolor diam dignissim nunc, ac tempor augue lectus vitae arcu. Pellentesque luctus, dolor a placerat porta, enim enim interdum est, sit amet convallis libero felis eu metus. Phasellus iaculis pretium suscipit. Sed vehicula efficitur sapien, venenatis volutpat nunc vehicula non. Sed ac pulvinar elit. Sed lobortis facilisis mauris, eget mattis lorem vulputate id. Nunc faucibus ornare risus a vestibulum. Suspendisse vestibulum porttitor est, quis commodo orci pharetra et. Proin et posuere orci, non pellentesque purus. Nullam eleifend nisl neque, non convallis eros eleifend a. Nam ante ligula, blandit id cursus fringilla, dignissim a metus. Integer tincidunt, lectus vel ultricies mollis, justo magna dictum erat, ut pharetra odio mi et mi. Quisque scelerisque bibendum efficitur. Vestibulum maximus bibendum neque a efficitur. Aliquam hendrerit eros sed erat consequat, ut tincidunt arcu sollicitudin. Ut molestie pretium nulla, vel tempor sem mattis eget. Sed sagittis tellus a semper aliquam. Quisque purus mauris, semper in velit eu, aliquam posuere magna. Cras imperdiet lacus sit amet erat dictum, eu ultricies turpis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet purus arcu, at tincidunt turpis lobortis ac."


let counter = 0

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    i++;
    counter++
  }

}
//console.log(counter + 1)

//******************/

let etCounter = "";

for (let i = 0; i < longText.length; i++) {
  const countProv=longText[i]+longText[i+1]+longText[i+2]+longText[i+3];
  if(countProv===" et "){
    etCounter ++
  }
  
}
console.log(etCounter)


//Bonus 2*****************/

function palin(phraseToCheck) {

    console.log("Is it an palindrome ?", phraseToCheck)
    let phraseToCheckWithoutSpace = ""
  
    for (let i = 0; i < phraseToCheck.length; i++) {
      if (phraseToCheck[i] !== "," && phraseToCheck[i] !== " " && phraseToCheck[i] !== "!" && phraseToCheck[i] !== "\'" && phraseToCheck[i] !== "?") {
        phraseToCheckWithoutSpace += phraseToCheck[i].toLowerCase()
      }
    }
    let phrasesHalfFirst = ""
    if (phraseToCheckWithoutSpace.length % 2 === 0) {
  
  
      for (let i = phraseToCheckWithoutSpace.length / 2; i > 0; i--) {
        phrasesHalfFirst += phraseToCheckWithoutSpace[Math.floor(i - 1)]
      }
      console.log("first half word : ", phrasesHalfFirst);
  
  
    } else {
  
      for (let i = phraseToCheckWithoutSpace.length / 2; i > 0; i--) {
        phrasesHalfFirst += phraseToCheckWithoutSpace[Math.floor(i)]
      }
      console.log("first half word : ", phrasesHalfFirst);
    }
  
    let secondPartWord = ""
    for (let i = phraseToCheckWithoutSpace.length / 2; i < phraseToCheckWithoutSpace.length; i++) {
      secondPartWord += phraseToCheckWithoutSpace[Math.floor(i)]
    }
    console.log("second half word : ", secondPartWord)
  
    if (phrasesHalfFirst === secondPartWord) {
      console.log('YES, It\'s a palindrome')
    } else {
      console.log('Not a Palindrome!!!!!')
    }
  
  }
  
  palin("A man, a plan, a canal, Panama!")
  console.log(' ')
  palin("Amor, Roma")
  console.log(' ')
  palin("race car")
  console.log(' ')
  palin("stack cats")
  console.log(' ')
  palin("step on no pets")
  console.log(' ')
  palin("taco cat")
  console.log(' ')
  palin("put it up")
  console.log(' ')
  palin("Was it a car or a cat I saw?")
  console.log(' ')
  palin("No 'x' in Nixon")