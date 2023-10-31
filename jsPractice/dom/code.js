//要素の取得
let text = document.getElementById("text-1");
//中身を確認
console.log(text);
//要素の内容を取得する
console.log(text.innerHTML);
//要素の内容を変更する
text.innerHTML = "你好";

//要素の取得　lunch1
let lunch1 = document.getElementById("lunch")
//中身を確認
console.log(lunch1);
//要素の文章の部分を取得
console.log(lunch1.innerHTML);
//今日のランチはハンバーグ　という内容に変更
lunch1.innerHTML = "今日のランチはハンバーグ";

//クラスを指定して値を取得する
let ex = document.getElementsByClassName("ex1")
console.log(ex);
//配列の型で　index番号で取り出す
console.log(ex[0]);
console.log(ex[0].innerHTML);
//没有指定番号 所以是undefined
console.log(ex.innerHTML);

//タグの名前を指定して値を取得する
let ex2 = document.getElementsByTagName("div");
console.log(ex2);
console.log(ex[1].innerHTML);

//要素の取得
let link = document.getElementById("link-1");

//要素の内容を取得
console.log(link.innerHTML);
//URLの内容を取得する
console.log(link.href);
//URLの変更
link.href = "https://eng-entrance.com/what-is-dom";
//target_blank
link.target = "_blank";