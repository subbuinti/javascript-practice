let str = "a,b,c,d,e,f";
let res = "";

for (let i = 0; i < str.length; i++) {
  //console.log(i,str[i])
  if (str[i] !== ",") {
    console.log(str[i]);
    res = str[i] + res;
  }
}

console.log(res);
