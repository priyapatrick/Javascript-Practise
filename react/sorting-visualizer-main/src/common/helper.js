export function convertInputToArrayString(string) {
 
  string = string.replaceAll(/[^0-9]/, "");
  return string;
}

export function convertArrayStringToArray(string) {
  return string
    .split(",")        //to introduce delimeter
    .filter((v) => v !== "")  //filter out whitespaces
          
}

export function getRandomArray(length = generateRandomNumberInRange(5, 25)) {
  return Array.from(new Array(length), () => generateRandomNumberInRange());
}

export function getScreenWidth(){
  return window.innerWidth;
}

export function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function generateRandomNumberInRange(lowerLimit = 0, upperLimit = 99) {
  return lowerLimit + Math.floor(Math.random() * upperLimit);
}