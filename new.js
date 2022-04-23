//Global variable declaration 
var score=[0,0],currentscore=0,activeplayer=0,playing;

//DOM shortcut access
var dice=document.querySelector(".dice")

//Game Initialization and Functions
function init(){
    score=[0,0],currentscore=0,activeplayer=0,playing=true;
    dice.style.display="none"; 
    document.getElementById("score-0").textContent="0"
    document.getElementById("score-1").textContent="0"
    document.querySelector(".player-0-panel").classList.remove("winner")
    document.querySelector(".player-1-panel").classList.remove("winner")
    document.querySelector(".player-0-panel").classList.add("active")
    document.querySelector(".player-1-panel").classList.remove("active")
    document.getElementById("current-0").textContent="0"
    document.getElementById("current-1").textContent="0"
    for(var i=0;i<document.querySelectorAll(".m1").length;i++){
        document.querySelectorAll(".m1")[i].classList.remove("bg")
    }
}

function nextplayer(){
    activeplayer===0 ? activeplayer=1 : activeplayer=0;
    currentscore=0;
    document.querySelector(".player-0-panel").classList.toggle("active")
    document.querySelector(".player-1-panel").classList.toggle("active")
}
//Game Controls
init()

//Roll Button 
document.querySelector(".btn-roll").addEventListener('click' ,function(){
    if(playing==true){
    dice.style.display="block";
    var roll=Math.floor((Math.random()*6)+1);
    dice.src="dice-"+roll+".png";
    var player=document.getElementById("current-"+activeplayer)
    console.log(roll)

    if(roll!=1){
    currentscore+=roll;
    player.textContent=currentscore
}
   else{
        player.textContent="0"
        nextplayer()
   }}
})

//Hold button

    document.querySelector(".btn-hold").addEventListener('click', function(){   
    if(playing){
     score[activeplayer]+=currentscore;
     var panel=document.querySelector(".player-"+activeplayer+"-panel").classList

     if(score[activeplayer]>=50){
        panel.remove("active")
        panel.add("winner")
        document.getElementById("score-"+activeplayer).textContent=score[activeplayer];
        document.getElementById("name-"+activeplayer).textContent="Winner!"
        dice.style.display="none";
        for(var i=0;i<document.querySelectorAll(".m1").length;i++){
            document.querySelectorAll(".m1")[i].classList.add("bg")
        }
        playing=false;}
        
      else{
        document.getElementById("current-"+activeplayer).textContent="0"
        document.getElementById("score-"+activeplayer).textContent=score[activeplayer];
        nextplayer()
       }
    }
})

document.querySelector(".btn-new").addEventListener("click",function(){
    document.getElementById("name-"+activeplayer).textContent="Player "+(activeplayer+1);
    init();
})
