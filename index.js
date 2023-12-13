// let myName = "Patrick michael Strider";
// const nameArray = myName.split(" ");
// console.log(nameArray);

// const conToday = "Today is";
// const conToday2 = "Today is";
// const theDay = " Tuesday";
// const thisDay = "Tuesday";
// const dayUpdate = new Date();
// const day = dayUpdate.getDay();
// const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const weekDay = dayOfWeek[day];


// const whatIsToday = conToday + theDay;
// console.log(whatIsToday);

// const todayIs = `${conToday2} ${weekDay}`;
// console.log(todayIs)
// console.log(firstNum);
// console.log(secondNum);


// function divisible(){
  //   if (firstNum !== 0) {
    //     const numValue = secondNum / firstNum;
    //     console.log(Math.round(numValue));
    //   } else {
      //     console.log("there has been an error.");
      //   }
      // }
      // divisible();

// const simplerProject = document.querySelector('.simple-projects')
      
// const firstNum = Math.floor(Math.random() * 10);
// const secondNum = Math.ceil(Math.random() * 10);

// function numberDivider (firstNum, secondNum){
//   if (firstNum !== 0) {
//     return firstNum / secondNum;
//   }
//   console.log("there has been an error.");
// }


function numberDivider(firstNum, secondNum) {
  const roundedFirstNum = Math.floor(firstNum);
  if (!roundedFirstNum) {
    throw new Error("cannot divide by zero");
  }
  const roundedSecondNum = Math.ceil(secondNum);
  return roundedSecondNum / roundedFirstNum;
}