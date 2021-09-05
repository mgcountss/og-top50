var c = 1;
var lol = []

for (var l = 1; l <= 5; l++) {
  var htmlrow = `<div class="row_${l} row"></div>`;
  $('.counters').append(htmlrow);
    for (var t = 1; t <= 10; t++) {
      let number;
      if(c.toString().length == 1) {
          number = `<div class="cnb">0${c}</div>`
      } else {
            number = `<div class="cnb">${c}</div>`
      }

      var htmlcard = `<div class="channel_${c} card" id="card_thing_${c}">
      ${number}
      <img src="https://mgcounts.com/assets/img/Old-YT.png" alt="" class="cimg">
      <div class="chnam">Loading</div>
      <div class="subscriberCount odometer" id="subs_${c}">0</div>
      </div>`;
      $('.row_'+l).append(htmlcard);
      c += 1;
    }
}

function random(min, max){
  return Math.floor(Math.random()* (max-min) + min);
}
var lolhmm = ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]
var first = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var names = []
var called = "false"
var callcount = 0
function updateData(q, data) {
  
  called = "true"
  setTimeout(function () { 
    var cnb = q+1;
    if (called == "false") {
      cardthing()
    }

if (names[q] != data.result[q].name) {
  if (called == "true") {
    setTimeout(function() {cardthing()},5000)
  cardthing()
}
}
    $(".channel_"+cnb+" .cimg").attr("src",data.result[q].image);
    $(".channel_"+cnb+" .chnam").html(data.result[q].name);
    $(".channel_"+cnb+" .subscriberCount").html(Math.floor(data.result[q].SubscriberCount));

names[q] = data.result[q].name
    if (lol[q] - data.result[q].SubscriberCount >= 1) {
      document.getElementById("card_thing_"+cnb+"").style.backgroundColor = "#dfe7f6";
      setTimeout(reset, 500)
    }
    if (lol[q] - data.result[q].SubscriberCount <= -1) {
      document.getElementById("card_thing_"+cnb+"").style.backgroundColor = "#dfe7f6";
      setTimeout(reset, 500)
    }

    setTimeout(idkpopdelay, 1000) 

    function idkpopdelay() {
      lol[q] = data.result[q].SubscriberCount
    }

function reset() {
  document.getElementById("card_thing_"+cnb+"").style.backgroundColor = "#f4f4f8";
  document.getElementById("card_thing_1").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_2").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_3").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_4").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_5").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_6").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_7").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_8").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_9").style.backgroundColor = "#ffffff";
  document.getElementById("card_thing_10").style.backgroundColor = "#ffffff";
}
function cardthing() {
  document.getElementById("card_thing_"+cnb+"").style.opacity = lolhmm[cnb]
  setTimeout(thing2,300)
  function thing2() {
  document.getElementById("card_thing_"+cnb+"").style.opacity = "0.5"
  setTimeout(thing3,500)
  }
  function thing3() {
    document.getElementById("card_thing_"+cnb+"").style.transition = "opacity 4s ease-out"
    document.getElementById("card_thing_"+cnb+"").style.opacity = "1"
    setTimeout(function lol() {lolhmm[cnb] = "0"},2000)
    setTimeout(function lol() {lolhmm[cnb] = "0"},2000)
  }
  }
    }, random(q , q)*500);
}

function update(){
    $.getJSON("https://mixerno.space/api/youtube/estimated/all",(data)=>{

        data.result.sort(function(a,b){return b.SubscriberCount - a.SubscriberCount});

        for (var q = 0; q < 50; q++) {
          updateData(q, data)
        }
    });
}


setTimeout(update, 2000)
setInterval(update,10000);
setTimeout(function(){$('.loader').fadeOut(); $('.counters').fadeIn(1000);},3000)