const question = document.getElementById("question");
const answer = document.getElementById("answer");
const result = document.getElementById("result");

const words = ["あ","い","う","え","お"];

let current = 0;

question.innerText = words[current];

answer.addEventListener("input", () => {

    if(answer.value === words[current]){

        result.innerText = "正解！";

        current++;

        if(current >= words.length){
            question.innerText = "クリア！";
            return;
        }

        question.innerText = words[current];
        answer.value = "";
    }

});