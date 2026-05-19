// 問題表示
const question = document.getElementById("question");

// 入力欄
const answer = document.getElementById("answer");

// 結果表示
const result = document.getElementById("result");

// スコア表示
const scoreText = document.getElementById("score");

// 時間表示
const timeText = document.getElementById("time");

// コンボ表示
const comboText = document.getElementById("combo");

// ボタン
const startBtn = document.getElementById("startBtn");

// ランク表示
const rankText = document.getElementById("rank");


// 問題一覧
const words = [

    "あ","い","う","え","お",
    "か","き","く","け","こ",
    "さ","し","す","せ","そ",
    "た","ち","つ","て","と",
    "な","に","ぬ","ね","の",
    "は","ひ","ふ","へ","ほ"

];


// 現在の問題
let current = 0;

// スコア
let score = 0;

// 時間
let time = 60;

// コンボ
let combo = 0;

// タイマー
let timer;

// ゲーム中か
let playing = false;


// ランダム問題表示
function nextQuestion(){

    // ランダム番号
    current = Math.floor(Math.random() * words.length);

    // 問題表示
    question.innerText = words[current];
}


// ゲーム開始
startBtn.addEventListener("click", () => {

    // ゲーム中なら開始しない
    if(playing) return;

    // 状態ON
    playing = true;

    // 初期化
    score = 0;
    combo = 0;
    time = 60;

    // 表示更新
    scoreText.innerText = score;
    comboText.innerText = combo;
    timeText.innerText = time;

    // ランク消去
    rankText.innerText = "";

    // 入力可能
    answer.disabled = false;

    // 最初の問題
    nextQuestion();

    // 入力欄空
    answer.value = "";

    // 自動フォーカス
    answer.focus();

    // タイマー開始
    timer = setInterval(() => {

        // 時間減少
        time--;

        // 表示更新
        timeText.innerText = time;

        // 0秒で終了
        if(time <= 0){

            // タイマー停止
            clearInterval(timer);

            // 終了処理
            gameOver();
        }

    },1000);

});


// 入力された時
answer.addEventListener("input", () => {

    // ゲーム中じゃないなら無効
    if(!playing) return;

    // 正解判定
    if(answer.value === words[current]){

        // スコア加算
        score += 10;

        // コンボ加算
        combo++;

        // コンボボーナス
        if(combo % 5 === 0){

            // ボーナス点
            score += 20;

            // ボーナスメッセージ
            result.innerText = "🔥 コンボボーナス！";
        }
        else{

            // 通常メッセージ
            result.innerText = "⭕ 正解！";
        }

        // 表示更新
        scoreText.innerText = score;
        comboText.innerText = combo;

        // アニメーション
        question.style.transform = "scale(1.2)";

        setTimeout(() => {
            question.style.transform = "scale(1)";
        },100);

        // 次の問題
        nextQuestion();

        // 入力欄空
        answer.value = "";
    }

});


// ゲーム終了
function gameOver(){

    // 状態OFF
    playing = false;

    // 入力不可
    answer.disabled = true;

    // 終了表示
    question.innerText = "終了";

    // ランク判定
    let rank = "";

    if(score >= 500){
        rank = "🏆 Sランク";
    }
    else if(score >= 350){
        rank = "🥇 Aランク";
    }
    else if(score >= 200){
        rank = "🥈 Bランク";
    }
    else{
        rank = "🥉 Cランク";
    }

    // ランク表示
    rankText.innerText = "あなたのランク : " + rank;

    // 結果表示
    result.innerText = "最終スコア : " + score;
}

// git add .
// git commit -m "
// fix pages"git push