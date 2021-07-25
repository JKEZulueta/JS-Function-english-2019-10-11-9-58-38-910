function alphabetSort(message){
  return message = message.split("").sort().join("");
}
console.log(alphabetSort('hello')); // should return 'ehllo'