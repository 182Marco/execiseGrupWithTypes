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
const a = ['bau', 9];
const myObj = {
    key1: 1,
    key2: 2,
};
const myConst = 'key1';
const freeNpropObj2 = {
    ciao: 'buz',
    miao: 'qwerty',
    bau: 'fizz',
};
const freeNpropObj3 = {
    ciao: 'buz',
    miao: 'qwerty',
    bau: 'fizz',
};
const holdOn = () => setTimeout(() => null, 2000);
const p = new Promise((res, rej) => {
    holdOn();
    res('done');
});
const doAfterProm = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield p;
    console.log(res);
    console.log('promise awaited');
});
doAfterProm();
p.then(r => console.log('this is what i log after the promise'));
console.log('here what to log sync');
