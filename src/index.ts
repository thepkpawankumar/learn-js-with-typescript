let sport: string = "footbal";

let id: number = 5;

// Array and promises are inbuilt generics

const tabs: Array<string> = ["Home", "About", "Contact"];

const a1 = [10, 20, 30, "Value"];

const x = tabs.pop();
const y = a1.pop();

const p1 = Promise.resolve("hello");
const p2 = Promise.resolve(12);

(async () => {
    console.log(await p1)
})();
console.log(x, y);
