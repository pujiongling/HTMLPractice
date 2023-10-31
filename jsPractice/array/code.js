//配列の初期化
let arr = [1, 2, 3, "Alice", 12.5];
//中身を確認
console.log(arr);
//要素の確認
console.log(arr.length);
//配列に値の追加　push
arr.push("追加しました");
console.log(arr);
arr.pop();
//配列の一番最後のデータの削除
console.log(arr);

//配列の作成
let arr2 = new Array(5);
arr2[0] = 12;
arr2[1] = "hello";
console.log(arr2);

//オブジェクトの書き方
let obj = { name: "Alice", id: 122, isStudent: true };
console.log(obj);
//特定のデータの表示の仕方
console.log(obj.name);//①
console.log(obj["name"]);//②
//値の上書きの仕方
obj.id = 30;
console.log(obj.id);

obj["isStudent"] = false;
console.log(obj["isStudent"]);

//for-of
for (let a of arr) {
    console.log(a);
}

//for-in
for (let key in obj) {
    console.log(key + ":" + obj[key]);
}