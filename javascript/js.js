// Play function
var audio= [];
//A function to prepare all our audio elements
document.getElementById("Audio1").OnEnded=function(){playAudios()};
document.getElementById("playAllBtn").onclick=function(){playAudios()};
document.getElementById("stopAllBtn").onclick=function(){stopAudios()};


function addToList1(){
  audio[0]= document.getElementById("Audio1");
  document.getElementById("Button1").style.background='green';
  document.getElementById("Button1").style.color='white';
}
function stop1(){
  document.getElementById("Button1").style.background='white';
  document.getElementById("Button1").style.color='green';
  audio[0].pause();
  audio[0].currentTime =0;
  audio[0]= null;
}

function addToList2(){
  audio[1]= document.getElementById("Audio2");
  document.getElementById("Button2").style.background='green';
  document.getElementById("Button2").style.color='white';
}
function stop2(){
  document.getElementById("Button2").style.background='white';
  document.getElementById("Button2").style.color='green';
  audio[1].pause();
  audio[1].currentTime =0;
  audio[1]= null;
}
function addToList3(){
  audio[2]= document.getElementById("Audio3");
  document.getElementById("Button3").style.background='green';
  document.getElementById("Button3").style.color='white';
}
function stop3(){
  document.getElementById("Button3").style.background='white';
  document.getElementById("Button3").style.color='green';
  audio[2].pause();
  audio[2].currentTime =0;
  audio[2]= null;
}
function addToList4(){
  audio[3]= document.getElementById("Audio4");
  document.getElementById("Button4").style.background='green';
  document.getElementById("Button4").style.color='white';
}
function stop4(){
  document.getElementById("Button4").style.background='white';
  document.getElementById("Button4").style.color='green';
  audio[3].pause();
  audio[3].currentTime =0;
  audio[3]= null;
}
function addToList5(){
  audio[4]= document.getElementById("Audio5");
  document.getElementById("Button5").style.background='green';
  document.getElementById("Button5").style.color='white';
}
function stop5(){
  document.getElementById("Button5").style.background='white';
  document.getElementById("Button5").style.color='green';
  audio[4].pause();
  audio[4].currentTime =0;
  audio[4]= null;
}
function addToList6(){
  audio[5]= document.getElementById("Audio6");
  document.getElementById("Button6").style.background='green';
  document.getElementById("Button6").style.color='white';
}
function stop6(){
  document.getElementById("Button6").style.background='white';
  document.getElementById("Button6").style.color='green';
  audio[5].pause();
  audio[5].currentTime =0;
  audio[5]= null;
}
function addToList7(){
  audio[6]= document.getElementById("Audio7");
  document.getElementById("Button7").style.background='green';
  document.getElementById("Button7").style.color='white';
}
function stop7(){
  document.getElementById("Button7").style.background='white';
  document.getElementById("Button7").style.color='green';
  audio[6].pause();
  audio[6].currentTime =0;
  audio[6]= null;
}
function addToList8(){
  audio[7]= document.getElementById("Audio8");
  document.getElementById("Button8").style.background='green';
  document.getElementById("Button8").style.color='white';
}
function stop8(){
  document.getElementById("Button8").style.background='white';
  document.getElementById("Button8").style.color='green';
  audio[7].pause();
  audio[7].currentTime =0;
  audio[7]= null;
}
function addToList9(){
  audio[8]= document.getElementById("Audio9");
  document.getElementById("Button9").style.background='green';
  document.getElementById("Button9").style.color='white';
}
function stop9(){
  document.getElementById("Button9").style.background='white';
  document.getElementById("Button9").style.color='green';
  audio[8].pause();
  audio[8].currentTime =0;
  audio[8]= null;
}
function playAudios(){
  for(let i=0;i<9;i++){
    if(audio[i]!=null){
      audio[i].play();
    }
  }
    isPlaying=true;
}
function stopAudios(){
  for(let i=0;i<9;i++){
    if(audio[i]!=null){
      audio[i].pause();
    }
  }
    isPlaying=false;
}
function ended1(){
  audio[0].play();
}
// OnEnded Event SO we can start the next loop
document.getElementById("Audio1").addEventListener('ended',playAudios);
document.getElementById("Audio2").addEventListener('ended',playAudios);
document.getElementById("Audio3").addEventListener('ended',playAudios);
document.getElementById("Audio4").addEventListener('ended',playAudios);
document.getElementById("Audio5").addEventListener('ended',playAudios);
document.getElementById("Audio6").addEventListener('ended',playAudios);
document.getElementById("Audio7").addEventListener('ended',playAudios);
document.getElementById("Audio8").addEventListener('ended',playAudios);
document.getElementById("Audio9").addEventListener('ended',playAudios);

// Recording the Audio
// set up basic variables for app
