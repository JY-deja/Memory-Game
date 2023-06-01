var words = [
  "Stadt",
  "Land",
  "Sprache",
  "Essen" ,
  "Trinken" ,
  "Hallo" ,
  "Danke" ,
  "Bitte" ,
  "Gut" ,
  "Schule" ,
  "Buch" ,
  "Haus" ,
  "Straße" ,
  "Park" ,
  "See" ,
  "Fluss" ,
  "Schloss" ,
  "Freund",
  "Auto",
  "Bahnhof",
  "Hauptstadt",
  "Markt", 
  "Museum",
  "Natur",
  "Flughafen", 
  "Sprache",
  "Land",
  "Entschuldigung",
  "Familie",
  ];
  setInterval(function() {
    var word = words[Math.floor(Math.random() * words.length)];
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var elem = document.createElement("div");
    elem.textContent = word;
    elem.classList.add("word");
    elem.style.top = y + "px";
    elem.style.left = x + "px";
    document.body.appendChild(elem);
    setTimeout(function() {
      elem.remove();
    }, 2000);
}, 100);

let btnRaining = document.querySelector('.btn-raining');

btnRaining.addEventListener('click',function(){
  
  window.location.href = 'http://127.0.0.1:8000/login';

})