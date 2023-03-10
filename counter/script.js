let label = 0;

document.getElementById("incBtn").onclick = function(){
    label+=1
    document.getElementById("label").innerHTML = label;
}
document.getElementById("decBtn").onclick = function(){
    label-=1
    document.getElementById("label").innerHTML = label;
}
document.getElementById("resBtn").onclick = function(){
    label=0
    document.getElementById("label").innerHTML = label;
}


document.getElementById("Btn").onclick = function(){
    let a = Number(document.getElementById("sideA").value);
    let b = Number(document.getElementById("sideB").value);

    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

let answer = Math.floor(Math.random()* 10 + 1);
let guesses = 0;

document.getElementById("subBtn").onclick = function (){

    let guess = document.getElementById("txt").value;
    guesses +=1;

    if(guess == answer){
        document.getElementById("result").innerHTML = `${answer} is the number amount of guesses: ${guesses}`;
    }
    else if(guess < answer){
        document.getElementById("result").innerHTML = "Too small";
    }
    else if(guess > answer){
        document.getElementById("result").innerHTML = "Too big";
    }
}
