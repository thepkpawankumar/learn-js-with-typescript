const nArr = [1, 2 , 3];
const strArr = ["One", "Two", "Three"];

const getFirstArrayElement = <T>(arr: T[]): T => arr[0];


console.log(getFirstArrayElement(nArr));

console.log(getFirstArrayElement(strArr));
