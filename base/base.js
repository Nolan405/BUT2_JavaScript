let button1 = document.getElementById('btn1');
button1.addEventListener('click', function(e){
    let paragraphe = document.querySelector('p');
    paragraphe.classList.toggle('design');
});

let button2 = document.getElementById('btn2');
button2.addEventListener('click', function(e){
    let paragraphe = document.querySelector('p');
    paragraphe.classList.toggle('size');
});

// output single object
const someObject = { str: "Some text", id: 5 };
console.log(someObject);

// Output multiple object
const car = "Dodge Charger";
const anotherObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", anotherObject);

// iterator / substition
for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}

// Stack trace
function foo() {
  function bar() {
      console.trace();
  }
  bar();
}
foo();

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(phrase)

let admin;
let name = "Geoffroy";
admin = name;
// alert(admin);

let name2 = "Ilya";
// alert( `hello ${1}` );
// alert( `hello ${"name"}` );
// alert( `hello ${name2}` );

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);

let officialName = prompt("Quel est le nom “officiel” de JavaScript?", '');
const rep = officialName == "ECMAScript" ? "Right" : "Tu ne connais pas ECMAScript ?";
alert(rep);

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2, 3');
        break;
    default:
        alert('hmmmmmm');
}

let age2 = prompt("What is your age?", '');

let welcome = (age2 < 18) ?
  () => alert("Hello!") :
  () => alert("Greetings!");

welcome(); // ok now
