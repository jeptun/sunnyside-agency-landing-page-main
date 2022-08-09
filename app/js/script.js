/**
 * NavBar
 */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header-nav-wrapper") {
    x.className += " responsive";
  } else {
    x.className = "header-nav-wrapper";
  }
}
const testString = 'Javascript test!';

console.log(testString);

const fruits = [
  '😀',
  '✨',
  '💀',
];

fruits.map((fruit) => {
  console.log(fruit);
});