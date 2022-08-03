var player = document.getElementById("player");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");
var player5 = document.getElementById("player5");
var player6 = document.getElementById("player6");
var player7 = document.getElementById("player7");
var player8 = document.getElementById("player8");
var player9 = document.getElementById("player9");
var player10 = document.getElementById("player10");
var player11 = document.getElementById("player11");
var player12 = document.getElementById("player12");
var player13 = document.getElementById("player13");
var player14 = document.getElementById("player14");
var player15 = document.getElementById("player15");
var player16 = document.getElementById("player16");
var player17 = document.getElementById("player17");
var player18 = document.getElementById("player18");
var player19 = document.getElementById("player19");
var player20 = document.getElementById("player20");
var player21 = document.getElementById("player21");
var player22 = document.getElementById("player22");
var player23 = document.getElementById("player23");
var player24 = document.getElementById("player24");


let playbtn = document.getElementById("playbtn");
let playbtn1 = document.getElementById("playbtn1");
let playbtn2 = document.getElementById("playbtn2");
let playbtn3 = document.getElementById("playbtn3");
let playbtn4 = document.getElementById("playbtn4");
let playbtn5 = document.getElementById("playbtn5");
let playbtn6 = document.getElementById("playbtn6");
let playbtn7 = document.getElementById("playbtn7");
let playbtn8 = document.getElementById("playbtn8");
let playbtn9 = document.getElementById("playbtn9");
let playbtn10 = document.getElementById("playbtn10");
let playbtn11 = document.getElementById("playbtn11");
let playbtn12 = document.getElementById("playbtn12");
let playbtn13 = document.getElementById("playbtn13");
let playbtn14 = document.getElementById("playbtn14");
let playbtn15 = document.getElementById("playbtn15");
let playbtn16 = document.getElementById("playbtn16");
let playbtn17 = document.getElementById("playbtn17");
let playbtn18 = document.getElementById("playbtn18");
let playbtn19 = document.getElementById("playbtn19");
let playbtn20 = document.getElementById("playbtn20");
let playbtn21 = document.getElementById("playbtn21");
let playbtn22 = document.getElementById("playbtn22");
let playbtn23 = document.getElementById("playbtn23");
let playbtn24 = document.getElementById("playbtn24");


let recent_volume = document.getElementById("volume");
let recent_volume1 = document.getElementById("volume1");
let recent_volume2 = document.getElementById("volume2");
let recent_volume3 = document.getElementById("volume3");
let recent_volume4 = document.getElementById("volume4");
let recent_volume5 = document.getElementById("volume5");
let recent_volume6 = document.getElementById("volume6");
let recent_volume7 = document.getElementById("volume7");
let recent_volume9 = document.getElementById("volume9");
let recent_volume10 = document.getElementById("volume10");
let recent_volume11 = document.getElementById("volume11");
let recent_volume12 = document.getElementById("volume12");
let recent_volume13 = document.getElementById("volume13");
let recent_volume14 = document.getElementById("volume14");
let recent_volume15 = document.getElementById("volume15");
let recent_volume16 = document.getElementById("volume16");
let recent_volume17 = document.getElementById("volume17");
let recent_volume18 = document.getElementById("volume18");
let recent_volume19 = document.getElementById("volume19");
let recent_volume20 = document.getElementById("volume20");
let recent_volume21 = document.getElementById("volume21");
let recent_volume22 = document.getElementById("volume22");
let recent_volume23 = document.getElementById("volume23");
let recent_volume24 = document.getElementById("volume24");


let volume_show = document.getElementById("volume_show");
let volume_show1 = document.getElementById("volume_show1");
let volume_show2 = document.getElementById("volume_show2");
let volume_show3 = document.getElementById("volume_show3");
let volume_show4 = document.getElementById("volume_show4");
let volume_show5 = document.getElementById("volume_show5");
let volume_show6 = document.getElementById("volume_show6");
let volume_show7 = document.getElementById("volume_show7");
let volume_show8 = document.getElementById("volume_show8");
let volume_show9 = document.getElementById("volume_show9");
let volume_show10 = document.getElementById("volume_show10");
let volume_show11 = document.getElementById("volume_show11");
let volume_show12 = document.getElementById("volume_show12");
let volume_show13 = document.getElementById("volume_show13");
let volume_show14 = document.getElementById("volume_show14");
let volume_show15 = document.getElementById("volume_show15");
let volume_show16 = document.getElementById("volume_show16");
let volume_show17 = document.getElementById("volume_show17");
let volume_show18 = document.getElementById("volume_show18");
let volume_show19 = document.getElementById("volume_show19");
let volume_show20 = document.getElementById("volume_show20");
let volume_show21 = document.getElementById("volume_show21");
let volume_show22 = document.getElementById("volume_show22");
let volume_show23 = document.getElementById("volume_show23");
let volume_show24 = document.getElementById("volume_show24");



function toggleclass(el) {
  if (el.className == "box") {
    el.className = "boxed";
  } else {
    el.className = "box";
  }
}


          // 1st audio rain

          // to play sound 

var playpause = function () {
  if (player.paused) {
    player.play();
  player.volume = 10 / 100;

  } else {
    player.pause();
  }
};


playbtn.addEventListener("click", playpause);


document.getElementById("playbtn").addEventListener("click", function () {
  var notvisible = document.getElementById("visible");
  if (notvisible.style.display == "block") {
    notvisible.style.display = "none";
  } else {
    notvisible.style.display = "block";
  }
});


function volume_change(){
  volume_show.innerHTML = recent_volume.value;
  player.volume = recent_volume.value / 100;
}





  // 2nd audio train

var playpause1 = function(){
    if(player1.paused){
        player1.play();
    player1.volume = 80 / 100;

    } else{
        player1.pause();
    }
};


playbtn1.addEventListener("click",playpause1);

// volume

document.getElementById("playbtn1").addEventListener("click", function () {
  var notvisible1 = document.getElementById("visible1");
  if (notvisible1.style.display == "block") {
    notvisible1.style.display = "none";
  } else {
    notvisible1.style.display = "block";
  }
});

function volume_change1(){
  volume_show1.innerHTML = recent_volume1.value;
  player1.volume = recent_volume1.value/100;
}



    // 3rd audio campfire


var playpause2 = function () {
  if (player2.paused) {
    player2.play();
  } else {
    player2.pause();
  }
};

playbtn2.addEventListener("click", playpause2);

// volume

document.getElementById("playbtn2").addEventListener("click", function () {
  var notvisible2 = document.getElementById("visible2");
  if (notvisible2.style.display == "block") {
    notvisible2.style.display = "none";
  } else {
    notvisible2.style.display = "block";
  }
});

function volume_change2() {
  volume_show2.innerHTML = recent_volume2.value;
  player2.volume = recent_volume2.value / 100;
}


    //4th audio forest 


    var playpause3 = function () {
      if (player3.paused) {
        player3.play();
        player3.volume = 60/100;
      } else {
        player3.pause();
      }
    };

    playbtn3.addEventListener("click", playpause3);

    // volume

    document.getElementById("playbtn3").addEventListener("click", function () {
      var notvisible3 = document.getElementById("visible3");
      if (notvisible3.style.display == "block") {
        notvisible3.style.display = "none";
      } else {
        notvisible3.style.display = "block";
      }
    });

    function volume_change3() {
      volume_show3.innerHTML = recent_volume3.value;
      player3.volume = recent_volume3.value / 100;
    }


    //5th audio beach

    var playpause4 = function () {
      if (player4.paused) {
        player4.play();
        player4.volume = 70/100;
      } else {
        player4.pause();
      }
    };

    playbtn4.addEventListener("click", playpause4);

    // volume

    document.getElementById("playbtn4").addEventListener("click", function () {
      var notvisible1 = document.getElementById("visible4");
      if (notvisible1.style.display == "block") {
        notvisible1.style.display = "none";
      } else {
        notvisible1.style.display = "block";
      }
    });

    function volume_change4() {
      volume_show4.innerHTML = recent_volume4.value;
      player4.volume = recent_volume4.value / 100;
    }


            // 6th audio birds 


var playpause5 = function () {
  if (player5.paused) {
    player5.play();
  } else {
    player5.pause();
  }
};

playbtn5.addEventListener("click", playpause5);

// volume

document.getElementById("playbtn5").addEventListener("click", function () {
  var notvisible5 = document.getElementById("visible5");
  if (notvisible5.style.display == "block") {
    notvisible5.style.display = "none";
  } else {
    notvisible5.style.display = "block";
  }
});

function volume_change5() {
  volume_show5.innerHTML = recent_volume5.value;
  player5.volume = recent_volume5.value / 100;
}


            // 7th audio CAFE 



var playpause6 = function () {
  if (player6.paused) {
    player6.play();
    player6.volume = 50/100;
  } else {
    player6.pause();
  }
};

playbtn6.addEventListener("click", playpause6);

// volume

document.getElementById("playbtn6").addEventListener("click", function () {
  var notvisible6 = document.getElementById("visible6");
  if (notvisible6.style.display == "block") {
    notvisible6.style.display = "none";
  } else {
    notvisible6.style.display = "block";
  }
});

function volume_change6() {
  volume_show6.innerHTML = recent_volume6.value;
  player6.volume = recent_volume6.value / 100;
}


            //8th audio FARM



var playpause7 = function () {
  if (player7.paused) {
    player7.play();
  } else {
    player7.pause();
  }
};

playbtn7.addEventListener("click", playpause7);

// volume

document.getElementById("playbtn7").addEventListener("click", function () {
  var notvisible7 = document.getElementById("visible7");
  if (notvisible7.style.display == "block") {
    notvisible7.style.display = "none";
  } else {
    notvisible7.style.display = "block";
  }
});

function volume_change7() {
  volume_show7.innerHTML = recent_volume7.value;
  player7.volume = recent_volume7.value / 100;
}


           //9th audio footsteps in water



var playpause8 = function () {
  if (player8.paused) {
    player8.play();
  } else {
    player8.pause();
  }
};

playbtn8.addEventListener("click", playpause8);

// volume

document.getElementById("playbtn8").addEventListener("click", function () {
  var notvisible8 = document.getElementById("visible8");
  if (notvisible8.style.display == "block") {
    notvisible8.style.display = "none";
  } else {
    notvisible8.style.display = "block";
  }
});

function volume_change8() {
  volume_show8.innerHTML = recent_volume8.value;
  player8.volume = recent_volume8.value / 100;
}

         //10th Clock



var playpause9 = function () {
  if (player9.paused) {
    player9.play();
  } else {
    player9.pause();
  }
};

playbtn9.addEventListener("click", playpause9);

// volume

document.getElementById("playbtn9").addEventListener("click", function () {
  var notvisible9 = document.getElementById("visible9");
  if (notvisible9.style.display == "block") {
    notvisible9.style.display = "none";
  } else {
    notvisible9.style.display = "block";
  }
});

function volume_change9() {
  volume_show9.innerHTML = recent_volume9.value;
  player9.volume = recent_volume9.value / 100;
}


         //11th Keyboard


var playpause10 = function () {
  if (player10.paused) {
    player10.play();
  } else {
    player10.pause();
  }
};

playbtn10.addEventListener("click", playpause10);

// volume

document.getElementById("playbtn10").addEventListener("click", function () {
  var notvisible10 = document.getElementById("visible10");
  if (notvisible10.style.display == "block") {
    notvisible10.style.display = "none";
  } else {
    notvisible10.style.display = "block";
  }
});

function volume_change10() {
  volume_show10.innerHTML = recent_volume10.value;
  player10.volume = recent_volume10.value / 100;
}

         //12th Leaves


var playpause11 = function () {
  if (player11.paused) {
    player11.play();
  } else {
    player11.pause();
  }
};

playbtn11.addEventListener("click", playpause11);

// volume

document.getElementById("playbtn11").addEventListener("click", function () {
  var notvisible11 = document.getElementById("visible11");
  if (notvisible11.style.display == "block") {
    notvisible11.style.display = "none";
  } else {
    notvisible11.style.display = "block";
  }
});

function volume_change11() {
  volume_show11.innerHTML = recent_volume11.value;
  player11.volume = recent_volume11.value / 100;
}

      //13th Library


var playpause12 = function () {
  if (player12.paused) {
    player12.play();
  } else {
    player12.pause();
  }
};

playbtn12.addEventListener("click", playpause12);

// volume

document.getElementById("playbtn12").addEventListener("click", function () {
  var notvisible12 = document.getElementById("visible12");
  if (notvisible12.style.display == "block") {
    notvisible12.style.display = "none";
  } else {
    notvisible12.style.display = "block";
  }
});

function volume_change12() {
  volume_show12.innerHTML = recent_volume12.value;
  player12.volume = recent_volume12.value / 100;
}


    //14th Lightning


var playpause13 = function () {
  if (player13.paused) {
    player13.play();
  } else {
    player13.pause();
  }
};

playbtn13.addEventListener("click", playpause13);

// volume

document.getElementById("playbtn13").addEventListener("click", function () {
  var notvisible13 = document.getElementById("visible13");
  if (notvisible13.style.display == "block") {
    notvisible13.style.display = "none";
  } else {
    notvisible13.style.display = "block";
  }
});

function volume_change13() {
  volume_show13.innerHTML = recent_volume13.value;
  player13.volume = recent_volume13.value / 100;
}


    //15th Morning in nature


var playpause14 = function () {
  if (player14.paused) {
    player14.play();
  } else {
    player14.pause();
  }
};

playbtn14.addEventListener("click", playpause14);

// volume

document.getElementById("playbtn14").addEventListener("click", function () {
  var notvisible14 = document.getElementById("visible14");
  if (notvisible14.style.display == "block") {
    notvisible14.style.display = "none";
  } else {
    notvisible14.style.display = "block";
  }
});

function volume_change14() {
  volume_show14.innerHTML = recent_volume14.value;
  player14.volume = recent_volume14.value / 100;
}



    //16th Night


var playpause15 = function () {
  if (player15.paused) {
    player15.play();
  } else {
    player15.pause();
  }
};

playbtn15.addEventListener("click", playpause15);

// volume

document.getElementById("playbtn15").addEventListener("click", function () {
  var notvisible15 = document.getElementById("visible15");
  if (notvisible15.style.display == "block") {
    notvisible15.style.display = "none";
  } else {
    notvisible15.style.display = "block";
  }
});

function volume_change15() {
  volume_show15.innerHTML = recent_volume15.value;
  player15.volume = recent_volume15.value / 100;
}

      // 17th Ocean


var playpause16 = function () {
  if (player16.paused) {
    player16.play();
    player16.volume = 25/100;
  } else {
    player16.pause();
  }
};

playbtn16.addEventListener("click", playpause16);

// volume

document.getElementById("playbtn16").addEventListener("click", function () {
  var notvisible16 = document.getElementById("visible16");
  if (notvisible16.style.display == "block") {
    notvisible16.style.display = "none";
  } else {
    notvisible16.style.display = "block";
  }
});

function volume_change16() {
  volume_show16.innerHTML = recent_volume16.value;
  player16.volume = recent_volume16.value / 100;
}

 // 18th Office


var playpause17 = function () {
  if (player17.paused) {
    player17.play();
    player17.volume = 25/100;
  } else {
    player17.pause();
  }
};

playbtn17.addEventListener("click", playpause17);

// volume

document.getElementById("playbtn17").addEventListener("click", function () {
  var notvisible17 = document.getElementById("visible17");
  if (notvisible17.style.display == "block") {
    notvisible17.style.display = "none";
  } else {
    notvisible17.style.display = "block";
  }
});

function volume_change17() {
  volume_show17.innerHTML = recent_volume17.value;
  player17.volume = recent_volume17.value / 100;
}


 // 19th Road


var playpause18 = function () {
  if (player18.paused) {
    player18.play();
    player18.volume = 25/100;
  } else {
    player18.pause();
  }
};

playbtn18.addEventListener("click", playpause18);

// volume

document.getElementById("playbtn18").addEventListener("click", function () {
  var notvisible18 = document.getElementById("visible18");
  if (notvisible18.style.display == "block") {
    notvisible18.style.display = "none";
  } else {
    notvisible18.style.display = "block";
  }
});

function volume_change18() {
  volume_show18.innerHTML = recent_volume18.value;
  player18.volume = recent_volume18.value / 100;
}


 // 20th Snowfall


var playpause19 = function () {
  if (player19.paused) {
    player19.play();
    player19.volume = 25/100;
  } else {
    player19.pause();
  }
};

playbtn19.addEventListener("click", playpause19);

// volume

document.getElementById("playbtn19").addEventListener("click", function () {
  var notvisible19 = document.getElementById("visible19");
  if (notvisible19.style.display == "block") {
    notvisible19.style.display = "none";
  } else {
    notvisible19.style.display = "block";
  }
});

function volume_change19() {
  volume_show19.innerHTML = recent_volume19.value;
  player19.volume = recent_volume19.value / 100;
}



 // 21th Soft rain on window


var playpause20 = function () {
  if (player20.paused) {
    player20.play();
    player20.volume = 80/100;
  } else {
    player20.pause();
  }
};

playbtn20.addEventListener("click", playpause20);

// volume

document.getElementById("playbtn20").addEventListener("click", function () {
  var notvisible20 = document.getElementById("visible20");
  if (notvisible20.style.display == "block") {
    notvisible20.style.display = "none";
  } else {
    notvisible20.style.display = "block";
  }
});

function volume_change20() {
  volume_show20.innerHTML = recent_volume20.value;
  player20.volume = recent_volume20.value / 100;
}

// 22th Rowing


var playpause21 = function () {
  if (player21.paused) {
    player21.play();
    player21.volume = 20/100;
  } else {
    player21.pause();
  }
};

playbtn21.addEventListener("click", playpause21);

// volume

document.getElementById("playbtn21").addEventListener("click", function () {
  var notvisible21 = document.getElementById("visible21");
  if (notvisible21.style.display == "block") {
    notvisible21.style.display = "none";
  } else {
    notvisible21.style.display = "block";
  }
});

function volume_change21() {
  volume_show21.innerHTML = recent_volume21.value;
  player21.volume = recent_volume21.value / 100;
}


// 23th Windchime


var playpause22 = function () {
  if (player22.paused) {
    player22.play();
    player22.volume = 60/100;
  } else {
    player22.pause();
  }
};

playbtn22.addEventListener("click", playpause22);

// volume

document.getElementById("playbtn22").addEventListener("click", function () {
  var notvisible22 = document.getElementById("visible22");
  if (notvisible22.style.display == "block") {
    notvisible22.style.display = "none";
  } else {
    notvisible22.style.display = "block";
  }
});

function volume_change22() {
  volume_show22.innerHTML = recent_volume22.value;
  player22.volume = recent_volume22.value / 100;
}

// 24th Stadium


var playpause23 = function () {
  if (player23.paused) {
    player23.play();
    player23.volume = 60/100;
  } else {
    player23.pause();
  }
};

playbtn23.addEventListener("click", playpause23);

// volume

document.getElementById("playbtn23").addEventListener("click", function () {
  var notvisible23 = document.getElementById("visible23");
  if (notvisible23.style.display == "block") {
    notvisible23.style.display = "none";
  } else {
    notvisible23.style.display = "block";
  }
});

function volume_change23() {
  volume_show23.innerHTML = recent_volume23.value;
  player23.volume = recent_volume23.value / 100;
}

// 25th Street


var playpause24 = function () {
  if (player24.paused) {
    player24.play();
    player24.volume = 60/100;
  } else {
    player24.pause();
  }
};

playbtn24.addEventListener("click", playpause24);

// volume

document.getElementById("playbtn24").addEventListener("click", function () {
  var notvisible24 = document.getElementById("visible24");
  if (notvisible24.style.display == "block") {
    notvisible24.style.display = "none";
  } else {
    notvisible24.style.display = "block";
  }
});

function volume_change24() {
  volume_show24.innerHTML = recent_volume24.value;
  player24.volume = recent_volume24.value / 100;
}


