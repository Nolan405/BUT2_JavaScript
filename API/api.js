console.log(document.body.children);

// le parent de <body> est <html>
console.log( document.body.parentNode === document.documentElement ); // true

// après <head> vient <body>
console.log( document.head.nextSibling ); // HTMLBodyElement

// avant <body> vient <head>
console.log( document.body.previousSibling ); // HTMLHeadElement

// Obtenir le dernier li
console.log(document.body.querySelector('ul').lastChild.previousSibling)

//Obtenir le paragraphe avec la classe description
console.log(document.querySelector("p.description"))

document.body.sayTagName = function() {
  alert(this.tagName);
};
document.body.sayTagName()