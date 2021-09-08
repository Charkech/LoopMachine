// Play function
var audio = [];
var isNullArr=true;
var isPlaying = false;
var mediaStream = new MediaStream();
var recordedChunks = [];
// const audioContext = new AudioContext();
// const sourceNode = audioContext.createMediaStreamSource(mediaStream);
// sourceNode.connect(audioContext.destination);
//A function to prepare all our audio elements
document.getElementById("Audio1").OnEnded = function() {
  playAudios()
};
document.getElementById("playAllBtn").onclick = function() {
  playAudios()
};
document.getElementById("stopAllBtn").onclick = function() {
  stopAudios()
};
document.getElementById("recordStart").onclick = function() {
  btnrecordAudio()
};


function addToList1() {
  audio[0] = document.getElementById("Audio1");
  document.getElementById("Button1").style.background = 'green';
  document.getElementById("Button1").style.color = 'white';
  mediaStream.addTrack(audio[0]);
}

function stop1() {
  document.getElementById("Button1").style.background = 'white';
  document.getElementById("Button1").style.color = 'green';
  audio[0].pause();
  audio[0].currentTime = 0;
  audio[0] = null;
  mediaStream.removeTrack(audio[0]);
}

function addToList2() {
  audio[1] = document.getElementById("Audio2");
  document.getElementById("Button2").style.background = 'green';
  document.getElementById("Button2").style.color = 'white';
  mediaStream.addTrack(audio[1]);
}

function stop2() {
  document.getElementById("Button2").style.background = 'white';
  document.getElementById("Button2").style.color = 'green';
  audio[1].pause();
  audio[1].currentTime = 0;
  audio[1] = null;
  mediaStream.removeTrack(audio[1]);
}

function addToList3() {
  audio[2] = document.getElementById("Audio3");
  document.getElementById("Button3").style.background = 'green';
  document.getElementById("Button3").style.color = 'white';
  mediaStream.addTrack(audio[2]);
}

function stop3() {
  document.getElementById("Button3").style.background = 'white';
  document.getElementById("Button3").style.color = 'green';
  audio[2].pause();
  audio[2].currentTime = 0;
  audio[2] = null;
  mediaStream.removeTrack(audio[0]);
}

function addToList4() {
  audio[3] = document.getElementById("Audio4");
  document.getElementById("Button4").style.background = 'green';
  document.getElementById("Button4").style.color = 'white';
  mediaStream.addTrack(audio[3]);
}

function stop4() {
  document.getElementById("Button4").style.background = 'white';
  document.getElementById("Button4").style.color = 'green';
  audio[3].pause();
  audio[3].currentTime = 0;
  audio[3] = null;
  mediaStream.removeTrack(audio[3]);
}

function addToList5() {
  audio[4] = document.getElementById("Audio5");
  document.getElementById("Button5").style.background = 'green';
  document.getElementById("Button5").style.color = 'white';
  mediaStream.addTrack(audio[4]);
}

function stop5() {
  document.getElementById("Button5").style.background = 'white';
  document.getElementById("Button5").style.color = 'green';
  audio[4].pause();
  audio[4].currentTime = 0;
  audio[4] = null;
  mediaStream.removeTrack(audio[4]);
}

function addToList6() {
  audio[5] = document.getElementById("Audio6");
  document.getElementById("Button6").style.background = 'green';
  document.getElementById("Button6").style.color = 'white';
  mediaStream.addTrack(audio[5]);
}

function stop6() {
  document.getElementById("Button6").style.background = 'white';
  document.getElementById("Button6").style.color = 'green';
  audio[5].pause();
  audio[5].currentTime = 0;
  audio[5] = null;
  mediaStream.removeTrack(audio[5]);
}

function addToList7() {
  audio[6] = document.getElementById("Audio7");
  document.getElementById("Button7").style.background = 'green';
  document.getElementById("Button7").style.color = 'white';
  mediaStream.addTrack(audio[6]);
}

function stop7() {
  document.getElementById("Button7").style.background = 'white';
  document.getElementById("Button7").style.color = 'green';
  audio[6].pause();
  audio[6].currentTime = 0;
  audio[6] = null;
  mediaStream.removeTrack(audio[6]);
}

function addToList8() {
  audio[7] = document.getElementById("Audio8");
  document.getElementById("Button8").style.background = 'green';
  document.getElementById("Button8").style.color = 'white';
  mediaStream.addTrack(audio[7]);
}

function stop8() {
  document.getElementById("Button8").style.background = 'white';
  document.getElementById("Button8").style.color = 'green';
  audio[7].pause();
  audio[7].currentTime = 0;
  audio[7] = null;
  mediaStream.removeTrack(audio[7]);
}

function addToList9() {
  audio[8] = document.getElementById("Audio9");
  document.getElementById("Button9").style.background = 'green';
  document.getElementById("Button9").style.color = 'white';
  mediaStream.addTrack(audio[8]);
}

function stop9() {
  document.getElementById("Button9").style.background = 'white';
  document.getElementById("Button9").style.color = 'green';
  audio[8].pause();
  audio[8].currentTime = 0;
  audio[8] = null;
  mediaStream.removeTrack(audio[8]);
}

function playAudios() {
  var iconPlayAll = document.getElementById("icon-playall");
  if (!isPlaying) {
    for (let i = 0; i < 9; i++) {
      //for every non null element we will start playing his loop.
      if (audio[i] != null) {
        isNullArr = false;
        audio[i].play();
      }
    }
    if (!isNullArr) { // we check whether we have something in general that can be played,otherwise no reason to change the ui.
      iconPlayAll.classList.remove("fa-play-circle");
      iconPlayAll.classList.remove("fas");
      iconPlayAll.classList.add("far");
      iconPlayAll.classList.add("fa-pause-circle");
      iconPlayAll.style.color = 'white';
      document.getElementById("playAllBtn").style.background = 'green';
      isPlaying = true;
    }
  } else {
    for (let i = 0; i < 9; i++) { //we pause all the current playing elements.
      if (audio[i] != null) {
        audio[i].pause();
      }
    } //we change the ui back to pre-play state.
    iconPlayAll.classList.add("fa-play-circle");
    iconPlayAll.classList.add("fas");
    iconPlayAll.classList.remove("far");
    iconPlayAll.classList.remove("fa-pause-circle");
    iconPlayAll.style.color = 'green';
    document.getElementById("playAllBtn").style.background = '';
    isPlaying = false;
  }
}

function stopAudios() {
  var iconPlayAll = document.getElementById("icon-playall");
  if (isPlaying || !isNullArr) { // If there's something playing - we stop everything immidiately and change it all to the starting state.
    if (!isNullArr && !isPlaying) {
      iconPlayAll.classList.add("fa-play-circle");
      iconPlayAll.classList.add("fas");
      iconPlayAll.classList.remove("far");
      iconPlayAll.classList.remove("fa-pause-circle");
      iconPlayAll.style.color = 'green';
      document.getElementById("playAllBtn").style.background = '';
      isNullArr = true;
    } else if (!isNullArr && isPlaying) {
      iconPlayAll.classList.add("fa-play-circle");
      iconPlayAll.classList.add("fas");
      iconPlayAll.classList.remove("far");
      iconPlayAll.classList.remove("fa-pause-circle");
      iconPlayAll.style.color = 'green';
      document.getElementById("playAllBtn").style.background = '';
      isNullArr = true;
    }
    isPlaying = false;
    for (let i = 0; i < 9; i++) {
      if (audio[i] != null) {
        audio[i].pause();
        audio[i].currentTime = 0;
        audio[i] = null;
        document.getElementById("Button" + (i + 1)).style.background = 'white';
        document.getElementById("Button" + (i + 1)).style.color = 'green';
      }
    }
  }
  isPlaying = false;
}

// OnEnded Event SO we can start the next loop
document.getElementById("Audio1").addEventListener('ended', playAudios);
document.getElementById("Audio2").addEventListener('ended', playAudios);
document.getElementById("Audio3").addEventListener('ended', playAudios);
document.getElementById("Audio4").addEventListener('ended', playAudios);
document.getElementById("Audio5").addEventListener('ended', playAudios);
document.getElementById("Audio6").addEventListener('ended', playAudios);
document.getElementById("Audio7").addEventListener('ended', playAudios);
document.getElementById("Audio8").addEventListener('ended', playAudios);
document.getElementById("Audio9").addEventListener('ended', playAudios);

// Recording the Audio

//My main idea with recording was collecting all the mediastreams (Audio01-Audio09) and adding them all to one MediaStream that will obtain the Audio1
//And then load it into the Recorded Audio element.
var recordAudio1 = document.getElementById('Audio1');
var isRecording = false;
var mediaRecorder = null;

function btnrecordAudio() {
  var icon = document.getElementById("rec-icon");
  if (!isRecording) {
    document.getElementById('recording').controls = false;
    isRecording = true;
    //Changing Icons and background colors for the button.
    document.getElementById("recordStart").style.background = 'yellow';
    icon.style.color = 'red';
    icon.classList.remove("fas");
    icon.classList.remove("fa-record-vinyl");
    icon.classList.add("fa-stop-circle");
    icon.classList.add("far");

    recordedChunks = [];
    var options = {
      mimeType: 'audio/ogg'
    };

    //Initializing the Recorder.
    mediaRecorder = new MediaRecorder(mediaStream, options);
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();
  } else if (isRecording) {
    isRecording = false;
    //Changing Icons and background colors for the button.
    document.getElementById("recordStart").style.background = 'white';
    icon.style.color = 'red';
    icon.classList.remove("fa-stop-circle");
    icon.classList.remove("far");
    icon.classList.add("fas");
    icon.classList.add("fa-record-vinyl");

    mediaRecorder.onstop = stopFunction();
    mediaRecorder.stop();

  }
}

function stopFunction() {
  var recordingaudio = document.getElementById('recording');
  recordingaudio.controls = true;
  var blob = new Blob(recordedChunks, {
    type: 'audio/ogg'
  });
  var audioURL = window.URL.createObjectURL(blob);
  //Src is set to a static src just to show that the source can be changed.
  recordingaudio.src = "loops/future_funk_beats.mp3";
}

function handleDataAvailable(event) {
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
  } else {}
}
