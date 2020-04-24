// jshint esversion: 6

//req 3a
let revWords1 = (s) => {
  let result = "";
  let reverse = "";
  for (var i = 0; i < s.length; i++) {
    reverse = s[i] + reverse
  }
  let arr = reverse.split(" ");
  for (var i = 0; i < arr.length; i++) {
    result = arr[i] + " " + result;
  }
  return result;
};

//req. 3b
let revWords2 = (str) => {
  let result = "";
  let arr = str.split("");
  let reverse = "";
  arr.forEach((char)=>{
    reverse = char + reverse;
  })
  let flip = reverse.split(" ");
  flip.forEach((char)=>{
    result = char + " " + result;
  })
  return result;
};

//req. 3c
let revWords3 = (str) => {
  let result = "";
  let reverse = "";
for (char of str){
  reverse = char + reverse;
}
let arr = reverse.split(" ");
for (char of arr){
  result = char + " " + result;
}
return result;
};

//extra credit
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
