//Q. Write a function that compresses a string by replacing repeated characters with the character and the count of its occurrences.

const compressString = (str) => {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {  //checks if the current string or the next string are same or not "OR" if iteration reaches the end it eventually become false
      count++;  //if true and increment the count..
    } else {
      compressed = compressed + str[i] + (count > 1 ? count : ""); //if not, add current string to the compressed string variable and also if count is greater than one add count also
      count = 1;
    }
  }
  return compressString.length < str.length ? compressed : str;
};

let str = "abbbeerdd";
let result = compressString(str);
console.log(result);