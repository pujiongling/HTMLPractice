//System.out.println
console.log("Hello");
let age = 28;
console.log(age);
const PI =3.14;
console.log(PI);
//同じ変数で異なるタイプの値を保持することも可能です
age ="こんにちは"
console.log(age);

console.log(2**3);

let num = 30;
let str = "30";
//値を比較
console.log(num == str);//true
//値とデータ型を比較
console.log(num === str);//false

//error
/*console.log("こんにちは"Hello"");
console.log('こんにちは''Hello'');*/
//JavaScript里同时存在  “” ‘’  所以可以这样，Java就不行
console.log("こんにちは'Hello'");
console.log('こんにちは"Hello"');

