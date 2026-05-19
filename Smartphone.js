// 問題表示エリアを取得
const question = document.getElementById("question");

// 入力欄を取得
const answer = document.getElementById("answer");

// 結果表示を取得
const result = document.getElementById("result");

// スコア表示を取得
const scoreText = document.getElementById("score");

// 時間表示を取得
const timeText = document.getElementById("time");

// スタートボタン取得
const startBtn = document.getElementById("startBtn");


// 問題一覧
const words = [
    "あ","い","う","え","お",
    "か","き","く","け","こ",
    "さ","し","す","せ","そ",
    "た","ち","つ","て","と"
];


// 現在の問題番号
let current = 0;

// スコア
let score = 0;

// 残り時間
let time = 30;

// タイマー保存用
let timer;


// ゲーム開始
startBtn.addEventListener("click", () => {

    // スコア初期化
    score = 0;

    // 時間初期化
    time = 30;

    // 問題番号初期化
    current = 0;

    // 表示更新
    scoreText.innerText = score;
    timeText.innerText = time;

    // 最初の問題表示
    question.innerText = words[current];

    // 入力欄を空にする
    answer.value = "";

    // 入力欄に自動でカーソル
    answer.focus();

    // 前のタイマー停止
    clearInterval(timer);

    // 1秒ごとに時間減少
    timer = setInterval(() => {

        // 時間を減らす
        time--;

        // 表示更新
        timeText.innerText = time;

        // 0秒になったら終了
        if(time <= 0){

            // タイマー停止
            clearInterval(timer);

            // ゲーム終了表示
            question.innerText = "終了！";

            // 結果表示
            result.innerText = "最終スコア : " + score;

            // 入力不可
            answer.disabled = true;
        }

    },1000);

    // 入力可能に戻す
    answer.disabled = false;
});


// 入力された時
answer.addEventListener("input", () => {

    // 入力と問題が一致したら
    if(answer.value === words[current]){

        // 正解表示
        result.innerText = "正解！";

        // スコア追加
        score++;

        // スコア表示更新
        scoreText.innerText = score;

        // 次の問題番号
        current++;

        // 最後まで行ったら最初へ戻る
        if(current >= words.length){
            current = 0;
        }

        // 次の問題表示
        question.innerText = words[current];

        // 入力欄を空にする
        answer.value = "";
    }

});

// git add .
// git commit -m "
// fix pages"git push