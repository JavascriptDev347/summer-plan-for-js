// variable

// var
// U global yoki funksional skop bilan ishlaydi.
// Global e'lon qilinsa window obyektiga yoziladi (let va const unday emas).
// bir xil nom bilan qayta e'lon qilish mumkin.
// hoisting ishlaydi va undefined qiymat beradi.
var a = 10;
var a = "Salom";
// console.log(window.a); // Salom

// let
// Block scope bilan ishlaydi.
// Bir xil nom bilan qayta e'lon qilish mumkin emas xatolik beradi.
// hoistingda ishlamaydi va xatolik beradi.
let b = 20;
// let b = "salom" // error
//
// const
// Block scope bilan ishlaydi.
// Bir xil nom bilan qayta e'lon qilish mumkin emas xatolik beradi.
// lekin obyekt va massivlarning ichki qiymatlarini o’zgartirish mumkin
// hoistingda ishlamaydi va xatolik beradi.
const c = 30;
// const c = "salom" // error
