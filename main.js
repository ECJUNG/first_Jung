//랜덤 번호 지정
//유저가 번호를 입력한다. 그리고 Go라는 버튼을 누름.
//만약에 유저가 랜덤 번호를 맞추면 맞췄습니다!
//랜덤 번호가 유저 번호보다 작은 경우, Down!!
//랜덤 번호가 유저 번호보다 큰 경우, Up!!
//reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다 쓰면 게임이 종료된다(더이상 추측 불가, 버튼이 disable)
//유저가 1과 100 범위 밖의 숫자를 입력하면 알려준다. (기회는 깎지 않는다.)
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let count = 0;

playButton.addEventListener("click",play)

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log('정답', computerNum);
}

function play(){
    let userValue = userInput.value;
    
    if(userValue < computerNum) {
       resultArea.textContent = "Up!!!"
       count++;
    } else if(userValue > computerNum) {
        resultArea.textContent ="Down!!"
        count++;
    } else {
        count++
        resultArea.textContent ="정답 입니다." + count + "번만에 맞추셨습니다."

    }
}

pickRandomNum()