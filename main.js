//!1.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת שם, הפונקציה בודקת האם השם שווה לשם שלכם.

function checkIfNameEqual(string) {
  return new Promise((resolve, reject) => {
    string == "Genet" ? resolve("Same name") : reject("Not same name");
  });
}

async function returnPromiseFun() {
  try {
    return await checkIfNameEqual("Genet");
  } catch (err) {
    return err;
  }
}

checkIfNameEqual()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {});

//!2.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת 2 מספרים, הפונקציה בודקת האם המספרים זהים.
//!צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
//!קראו לפונקציה האסיכרונית והדפיסו את התוצאה.

function getTwoNumbers(numberOne, numberTwo) {
  return new Promise((resolve, reject) => {
    numberOne === numberTwo
      ? resolve("Equal Number")
      : reject("Not Equal Number");
  });
}

async function checkIfEqualNumbers() {
  try {
    return await getTwoNumbers(50, 50);
  } catch (error) {
    return error;
  }
}

checkIfEqualNumbers()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {});

// 3.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת סטרינג, הפונקציה בודקת האם אורך הסטרינג גדול מ 6.
// הוסיפו טיימר שפועל 4 שניות ורק לאחר מכן מחזיר תשובות.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה למסך.
// הציגו אנימציה של טעינה בזמן שמחכים לתשובה.

function promiseFunction(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      string > 6 ? resolve("BIGGER THAN 6") : reject("LOWER THAN 6");
    }, 4000);
  });
}

function getLoadingImg() {
  innerDiv.innerHTML = `<img src="./loading.gif" id="imgCrs">`;
}

function stopLoadingImg() {
  imgCrs.style.display = "none";
}

async function callsPromiseFunction() {
  try {
    getLoadingImg();
    return await promiseFunction("edhedhehde");
  } catch (error) {
    return error;
  }
}

// callsPromiseFunction()
//   .then((res) => {
//     innerDiv.innerHTML += res;
//   })
//   .catch((rej) => {
//     innerDiv.innerHTML += rej;
//   })
//   .finally(() => {
//     stopLoadingImg();
//   });

//   צרו מערך של 3 כלבים, לכל כלב יש שם, גיל וסוג.
// צרו פונקציה שמחזירה promise, הפונקציה מקבלת מערך של כלבים, הפונקציה מחזירה את הכלב הזקן ביותר.
// הוסיפו טיימר שפועל 5 שניות ורק לאחר מכן מחזיר תשובות.
// 5.צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה למסך.
// הציגו אנימציה של כלב בזמן שמחכים לתשובה.

class Dogs {
  name;
  age;
  type;
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
}

let dogOne = new Dogs("dogOne", 1, "hotdog");
let dogTwo = new Dogs("dogTwo", 2, "pitball");
let dogThree = new Dogs("dogThree", 7, "rotwailer");

let arrayOfDoges = [dogOne, dogTwo, dogThree];

// console.log(arrayOfDoges[0].age);

function getOlderDogAge(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const element of array) {
        let maxAge = array[0].age;
        if (element.age > maxAge) {
          maxAge = element.age;
          resolve(maxAge);
        }
      }
      reject("non");
    }, 5000);
  });
}

function dogImgLoading() {
  innerDivTwo.innerHTML = `<img src="./dog loading.gif" id="dogImg">`;
}

function stopImgLoading() {
  dogImg.style.display = "none";
}

async function printToDivFun() {
  try {
    dogImgLoading();
    return await getOlderDogAge(arrayOfDoges);
  } catch (err) {
    return err;
  }
}

printToDivFun()
  .then((res) => {
    innerDivTwo.innerHTML += res;
  })
  .catch((rej) => {
    innerDivTwo.innerHTML += rej;
  })
  .finally(() => {
    stopImgLoading();
  });

//   1.	צרו MAP של 7 ילדים, כאשר המפתח הוא השם והערך הוא הגיל.
// הוסיפו ילד.
// הציגו בלוג את הגיל שבחרתן/ם לו.
// הציגו בלוג רק את הגילים.
// הציגו בלוג רק את השמות.
// הציגו בלוג את הילדים שהשם שלהם ארוך מ4 תווים.

let childrenMap = new Map();
childrenMap.set("childrenOne",7);
childrenMap.set("childrenTwo",6);
childrenMap.set("childrenThree",5);
childrenMap.set("childrenFour",4);
childrenMap.set("childrenFiv",3);
childrenMap.set("childrensix",2);
childrenMap.set("childrenSeven",1);


for (const iterator of object) {
    
}

