"use userstrict";
let answer = Math.floor(Math.random() * (100 + 1 - 0) - 0);

let number = parseInt(window.prompt("数当てゲーム！数字を入力してください"));
let count = 0;

while (count === 0) {

    if (answer === number) {
        count = 1;
        window.alert("あたり！");

    } else if (answer > number) {
        window.alert("残念！もっと大きいです。")
        number = parseInt(window.prompt("もう一度入力してください"));
    } else {
        window.alert("残念！もっと小さいです。")
        number = parseInt(window.prompt("もう一度入力してください"));
    }


}


