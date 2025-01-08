let computerNumber=0;
let userInput=document.getElementById("user_num");
let playbutton=document.getElementById("play");
let resultvalue=document.getElementById("result");
let resetbutton=document.getElementById("reset");
let chance=5;
let chancevalue=document.getElementById("chance");
let history=[];

playbutton.addEventListener("click",play);
resetbutton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value="";
});//이 함수의 내용이 다른 곳이 쓰이지 않을 경우, 
//익명 함수로 선언하여 일회성으로 사용가능!!

function pickrandomNum(){
    computerNumber=Math.floor(Math.random()*100)+1;
    
    console.log("결과 : ",computerNumber);
}

function play(){
    let userNumber=userInput.value;

    if(userNumber<1 || userNumber>100){
        resultvalue.textContent="1부터 100까지의 수를 입력해주세요^^";
        return;
    }

    if (history.includes(userNumber)){
        resultvalue.textContent="이미 입력한 숫자 입니다. 다시 입력해주세요^^";
        return;
    }

    chance--;
    chancevalue.textContent=`남은 횟수 : ${chance}회`
    
    if (userNumber>computerNumber){
        resultvalue.textContent="DOWN!!!";
        //console.log("DOWN!!!");
    }
    else if(userNumber<computerNumber){
        resultvalue.textContent="UP!!!";
        //console.log("UP!!!");
    }
    else{
        resultvalue.textContent="정답입니다!!!";
        playbutton.disabled = true;
        //console.log("정답입니다!!!");
    }

    if(chance<1){
        resultvalue.textContent="Game Over!!!";
        alert("정답은 "+computerNumber+" 입니다!!!"); 
        playbutton.disabled = true;
    }

    history.push(userNumber);
}

function reset(){
    //숫자 입력 부분의 값을 비운다.
    userInput.value="";
    //history도 리셋하기
    history=[];
    //새로운 랜덤 숫자를 뽑는다.
    pickrandomNum();
    
    playbutton.disabled=false;
    chance=5;
    
    resultvalue.textContent="새로운 게임을 시작합니다."
    chancevalue.textContent=`남은 찬스 : ${chance}회`
}

pickrandomNum();