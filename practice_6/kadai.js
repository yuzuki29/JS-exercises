"use userstrict";


//answer 0ならグー　1ならパー　2ならチョキ

function btnClick() {  //グー
    let answer = Math.floor(Math.random() * 3);
    console.log("answer");
    
    let first = document.getElementById("first");
    first.textContent = "ポン!"

    if (answer === 0) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent = "グー";
        result2.textContent = "グー";
        result3.textContent = "あいこ！";

    } else if (answer === 1) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent = "グー";
        result2.textContent = "パー";
        result3.textContent = "あなたの負け・・・";

    } else if (answer === 2) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent = "グー";
        result2.textContent = "チョキ";
        result3.textContent = "あなたの勝ち！";

    }
}


function btnClick2() {  //パー
    answer = Math.floor(Math.random() * 3);

    let first = document.getElementById("first");
    first.textContent = "ポン!"

    if (answer === 0) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent = "パー";
        result2.textContent = "グー";
        result3.textContent = "あなたの勝ち！";

    } else if (answer === 1) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent = "パー";
        result2.textContent = "パー";
        result3.textContent = "あいこ！";

    } else if (answer === 2) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent = "パー";
        result2.textContent = "チョキ";
        result3.textContent = "あなたの負け・・・";

    }
}


function btnClick3() {   //チョキ
    answer = Math.floor(Math.random() * 3);

    let first = document.getElementById("first");
    first.textContent = "ポン!"

    if (answer === 0) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent="チョキ";
        result2.textContent="グー";
        result3.textContent="あなたの負け・・・";

    } else if (answer === 1) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent="チョキ";
        result2.textContent="パー";
        result3.textContent="あなたの勝ち！";

    } else if (answer === 2) {

        let result = document.getElementById("result");
        let result2 = document.getElementById("result2");
        let result3 = document.getElementById("result3");
        result.textContent="チョキ";
        result2.textContent="チョキ";
        result3.textContent="あいこ！";

    }
}