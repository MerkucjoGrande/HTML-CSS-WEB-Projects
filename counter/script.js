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
