//JavaScript brauzerda ishlayotganida, uni to’g’ridan-to’g’ri tushuna olmasligi sababli uni mashina tushunadigan tilga aylantirish
//  kerak ya’ni //  o’zi tushunadigan tilga.
// Brauzerning JavaScript engine(mexanizm)i JavaScript kodiga duch kelganida, u biz yozgan JavaScript kodini “translation(tarjima)”
//  qiladi va // bajarilishini boshqaradigan maxsus muhit yaratadi.
// Bu muhit Execution context deb ataladi.
//
//
// Execution context global scope va function scope ga ega bo’lishi mumkin.
// JavaScript birinchi marta ishlay boshlaganida, u global scope yaratadi.
//
// Keyin, JavaScript parse(tahlil) qilinadi va o’zgaruvchi va
// funksiya deklaratsiyasini xotiraga saqlaydi.
//
//
// Execution context - har bir block kod uchun
// JavaScript tomonidan ochiladigan ma’lumotlar bloki bo’lib, ayni damda ishlayotgan
// kod uchun kerak bo’ladigan barcha ma’lumotlarni o’zida jamlaydi.
//  Masalan, o’zgaruvchilar/funksiyalar/this kalit so’zi.
//
//
//
// Example
//
var x = 10;
var y = 20;

// Memory creation phase:
// x => variable is allocated memory and stores undefined
// y => variable is allocated memory and stores undefined

// Execurion phase:
// x => variable is assigned the value 10
// y => variable is assigned the value 20
