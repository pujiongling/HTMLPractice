//ol idを使って要素の情報を取得
let list = document.getElementById("list");

//新しい要素の作成
let newLink = document.createElement("a");
/*let newLink2 = document.createElement("a");
let newLink3 = document.createElement("a");
let newLink4 = document.createElement("a");*/
//内容を挿入する
newLink.innerHTML = "developer.mozilla.org";
/*newLink2.innerHTML = "22222222222222222222";
newLink3.innerHTML = "33333333333333333333";
newLink4.innerHTML = "444444444444444444444";*/
//最後挿入
list.append(newLink);
/*list.prepend(newLink2);
list.after(newLink3);
list.before(newLink4);*/

//新しい<li>
let item = document.createElement("li");
//先将li插入到ol里面去，出现4.
list.append(item);
item.append(newLink); 

//要素の取得
let removeLink = document.getElementById("link-2");
//要素の削除
//（只消除了要素的内容没有消除li这个tag）
//removeLink.remove();
//要有子要素的存在才能够叫出親要素
removeLink.parentNode.remove();

//ボタンをクリックしたら
//ボタン1をクリックしました
let btnEvent = document.getElementById("button1");
/**document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
}; */
//onlick这种写法，如果对于这个button写了两种操作，它只会执行最后的那项操作，如果需要点击一次就复数操作的情况下这样很不便。
/*btnEvent.onclick = function(){
    console.log("ボタン1をクリックしました");
}
btnEvent.onclick = function(){
    console.log("ボタン2をクリックしました");
}*/

/**対象の要素.addEventListener(種類, () => {
  // 処理を記述
}); */
// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);
//↑種類：イベントの種類
btnEvent.addEventListener("click",()=>{
    console.log("ボタン1をクリックしました");
});
btnEvent.addEventListener("click",()=>{
    console.log("ボタン2をクリックしました");
});

//helloメソッドの作成
function hello(){
    console.log("hello");
}