"use userstrict";
let number = Math.floor(Math.random() * (4 + 1 - 0) - 0);



if (number === 0) {

    window.alert("あなたの数値は0でした。大吉です！");
} else if (number === 1) {
    window.alert("あなたの数値は1でした。中吉です！")
} else if (number === 2) {
    window.alert("あなたの数値は2でした。吉です！")
} else if (number === 3) {
    window.alert("あなたの数値は3でした。凶です！")
} else if (number === 4) {
    window.alert("あなたの数値は4でした。大凶です！")
}
