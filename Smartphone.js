// 問題表示
const question = document.getElementById("question");

// 入力欄
const answer = document.getElementById("answer");

// 結果表示
const result = document.getElementById("result");

// スコア
const scoreText = document.getElementById("score");

// 時間
const timeText = document.getElementById("time");

// コンボ
const comboText = document.getElementById("combo");

// ボタン
const startBtn = document.getElementById("startBtn");

// ランク
const rankText = document.getElementById("rank");


// 問題一覧
const words = [
    "あ","い","う","え","お",
    "か","き","く","け","こ",
    "さ","し","す","せ","そ",
    "た","ち","つ","て","と"
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
let timer = null;

// ゲーム中か
let playing = false;


// 最初は入力不可
answer.disabled = true;


// ランダム問題表示
function nextQuestion(){

    // ランダム番号
    current = Math.floor(Math.random() * words.length);

    // 問題表示
    question.innerText = words[current];
}


// スタートボタン
startBtn.addEventListener("click", startGame);


// ゲーム開始
function startGame(){

    // タイマー重複防止
    clearInterval(timer);

    // ゲーム状態ON
    playing = true;

    // 初期化
    score = 0;
    combo = 0;
    time = 60;

    // 表示更新
    scoreText.innerText = score;
    comboText.innerText = combo;
    timeText.innerText = time;

    // メッセージ初期化
    result.innerText = "";

    // ランク初期化
    rankText.innerText = "";

    // 入力可能
    answer.disabled = false;

    // 入力欄を空
    answer.value = "";

    // カーソル自動
    answer.focus();

    // 最初の問題
    nextQuestion();

    // タイマー開始
    timer = setInterval(() => {

        // 時間減少
        time--;

        // 更新
        timeText.innerText = time;

        // 0秒で終了
        if(time <= 0){

            clearInterval(timer);

            gameOver();
        }

    },1000);
}


// キーボードのボタンを押した時
answer.addEventListener("keydown", (event) => {

    // Enterキー以外なら何もしない
    if(event.key !== "Enter") return;

    // ゲーム中以外は無効
    if(!playing) return;

    // 正解判定
    if(answer.value === words[current]){

        // スコア加算
        score += 10;

        // コンボ増加
        combo++;

        // コンボボーナス
        if(combo % 5 === 0){

            score += 20;

            result.innerText = "🔥 コンボボーナス！";
        }
        else{

            result.innerText = "⭕ 正解！";
        }

        // 表示更新
        scoreText.innerText = score;
        comboText.innerText = combo;

        // 次の問題
        nextQuestion();
    }
    else{

        // ミス時
        result.innerText = "❌ ミス！";

        // コンボリセット
        combo = 0;

        // 表示更新
        comboText.innerText = combo;
    }

    // 入力欄を空にする
    answer.value = "";

});



// ゲーム終了
function gameOver(){

    // ゲーム終了
    playing = false;

    // 入力不可
    answer.disabled = true;

    // 問題表示変更
    question.innerText = "終了！";

    // ランク
    let rank = "";

    if(score >= 500){

        rank = "🏆 Sランク";
    }
    else if(score >= 300){

        rank = "🥇 Aランク";
    }
    else if(score >= 150){

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