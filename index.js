var sec = 0;
var min = 0;
var hr = 0;
var startGame = true;

// Detects click of Start btn,
// Initiating stopwatch
$(".btn").click(function(){
    if (this.id == "Start"){
        startClock();
    }
    if (this.id == "Stop"){
        stopClock();
    }
    if (this.id == "Reset"){
        resetClock();
    }
});

// Function that starts the count
function startClock () {
    startGame = true;
    counter ();
}

// Function that stops clock count
function stopClock () {
    startGame = false;
}

// Function that resets all values to 0
function resetClock () {
    var bombExplosion = new Audio ("sounds/bomb-explosion.wav");
    bombExplosion.play();

    $("body").css("backgroundColor", "red");

    // Remove class after a delay
    setTimeout(function() {
        $("body").css("backgroundColor", "#938c8c");
    }, 200);


    startGame = false;
    sec = 0;
    min = 0;
    hr = 0;
    $("p").text(0 + ":" + 0 + ":" + 0);

}
// Function that counts the secs, mins, and hrs
function counter(){
    if(startGame === true){
      setTimeout(function(){
        // Time for sec, min, and hr
        if (sec >= 59){
            min++;
            sec = 0;
        }
        if (min >= 59){
            hr++;
            min = 0;
        }
        if (hr >= 23){  // Reached max time for stop watch
            reset();
        }

        $("p").text(hr + ":" + min + ":" + sec);

        sec++;
        counter(sec, min, hr);
      }, 1000);
    }
  }
