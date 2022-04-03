//aacaseagjc
//o/p: s

function nonRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    let j = str[i]; // j=a c a s
    if (str.indexOf(j) == str.lastIndexOf(j)) {
      // 0 == 6, 0 == 6, 2 == 9, 0 ==6 4 == 4
      return j;
    }
  }
  return null;
}

console.log(nonRepeated("aacaseagjc"));
