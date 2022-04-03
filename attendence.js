let personName = "Test6";
let filteredArray = arr.filter((item, key) => {
  if (item.employeName == personName) {
    return item;
  }
  // console.log("aaa", key, item);
});

let newArray = filteredArray.map((item, key) => {
  let timeStart = new Date(`${item.date} ${item.checkinTime}`).getHours();
  let timeEnd = new Date(`${item.date} ${item.checkouttime}`).getHours();
  console.log(timeEnd);
  console.log(timeStart);
  let hourDiff = timeEnd - timeStart;

  item.workingHours = hourDiff;
  return item;
});

console.log(newArray);
