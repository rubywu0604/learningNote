function reverseString(str) {
  for(let i = str.length - 1; i >= 0; i--){
    str += str[i];
  }
  console.log(str);
  return str;
}

reverseString("hello");