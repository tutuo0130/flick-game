// HTMLの id="question" を取得して変数 question に入れる
const question = document.getElementById("question");

// HTMLの id="answer" を取得して変数 answer に入れる
const answer = document.getElementById("answer");

// HTMLの id="result" を取得して変数 result に入れる
const result = document.getElementById("result");


// 問題として使う文字を配列に保存
const words = ["あ","い","う","え","お"];


// 今何問目かを管理する変数
// 最初は 0 番目なので「あ」
let current = 0;


// 最初の問題を画面に表示
question.innerText = words[current];


// 入力欄に文字が入力された時に処理を実行
answer.addEventListener("input", () => {

    // 入力された文字と現在の問題が同じか確認
    if(answer.value === words[current]){

        // 正解なら「正解！」と表示
        result.innerText = "正解！";

        // 次の問題へ進む
        current++;

        // もし問題数を超えたら
        if(current >= words.length){

            // 「クリア！」と表示
            question.innerText = "クリア！";

            // 処理を終了
            return;
        }

        // 次の問題を表示
        question.innerText = words[current];

        // 入力欄を空にする
        answer.value = "";
    }

});

