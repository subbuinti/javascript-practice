let personDetails = [
  { name: "a1", dob: "10-1-1998", sal: 20000 },
  { name: "a2", dob: "10-2-1985", sal: 10000 },
  { name: "a3", dob: "10-3-1956", sal: 30000 },
  { name: "a4", dob: "10-10-1995", sal: 50000 },
  { name: "a5", dob: "10-10-1996", sal: 60000 },
  { name: "a6", dob: "10-10-1998", sal: 20000 },
  { name: "a7", dob: "10-10-1994", sal: 10000 },
  { name: "a8", dob: "10-10-1993", sal: 160000 },
  { name: "a9", dob: "10-10-1991", sal: 102000 },
  { name: "a10", dob: "10-10-1997", sal: 110000 },
  { name: "a11", dob: "10-10-1996", sal: 210000 },
  { name: "a12", dob: "10-10-1995", sal: 130000 },
  { name: "a13", dob: "10-10-1993", sal: 105000 },
  { name: "a14", dob: "10-10-1992", sal: 100000 },
  { name: "a15", dob: "10-10-1995", sal: 100000 },
  { name: "a16", dob: "10-10-1999", sal: 100000 },
  { name: "a17", dob: "10-10-1995", sal: 107000 },
  { name: "a18", dob: "10-10-1996", sal: 100000 },
  { name: "a19", dob: "10-10-1991", sal: 100000 },
];

function getAge(dob) {
  let today = new Date();
  let birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();

  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }
  return age;
}

let newArr = personDetails.map((item) => {
  let newObj = {
    name: item.name,
    age: getAge(item.dob),
    perMonthSal: Math.round(item.sal / 12),
  };
  return newObj;
});

console.log(newArr);
