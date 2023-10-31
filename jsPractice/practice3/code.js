let label = document.getElementById("text-result");

let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

let i = 0;

button1.addEventListener("click", () => {
    i = 0;
    label.innerHTML = "値：" + i;
});

button2.addEventListener("click", () => {
    i++;
    label.innerHTML = "値：" + i;
});

button3.addEventListener("click", () => {
    i--;
    label.innerHTML = "値：" + i;
});