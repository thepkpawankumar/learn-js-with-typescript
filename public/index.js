"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let sport = "footbal";
let id = 5;
console.log(id);
const tabs = ["Home", "About", "Contact"];
const a1 = [10, 20, 30, "Value"];
const x = tabs.pop();
const y = a1.pop();
const p1 = Promise.resolve("hello");
const p2 = Promise.resolve(12);
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield p1);
}))();
console.log(x, y);
//# sourceMappingURL=index.js.map