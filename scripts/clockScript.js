//This just does the fun lil hex code clock on the start page
function intToHex(i) {
   var hex = ("0" + (Number(i).toString(16))).slice(-2).toUpperCase();
   return hex;
}

function timeToHex(){
   var date = new Date();
   var seconds = parseInt(date.getSeconds()*255/59);
   var minutes = parseInt(date.getMinutes()*255/59);
   var hours = parseInt(date.getHours()*255/23);
   return "#" + intToHex(hours) + intToHex(minutes) + intToHex(seconds);
}

function checkBrightness(colour){
   var hex = colour.toString().replace('#', '');
   var r = parseInt(hex.substr(0,2),16);
   var g = parseInt(hex.substr(2,2),16);
   var b = parseInt(hex.substr(4,2),16);

   var brightness = ((r*299) + (g*587) + (b*114)) /1000;
   return brightness>115;
}

function getTime(){
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();

   if(hours.toString().length == 1){
      hours = "0" + hours;
   }

   if(minutes.toString().length == 1){
      minutes = "0" + minutes;
   }

   if(seconds.toString().length == 1){
      seconds = "0" + seconds;
   }
   return hours + ":" + minutes + ":" + seconds;
}

function updateClock(){
   var ttH = timeToHex();
   var time = getTime();

   
   var clock = document.getElementById("clock")
   clock.style.background = ttH;
   clock.innerText = time;
            
   if(checkBrightness(ttH)){
      clock.style.color= "black";

   }else{
      clock.style.color= "white";
   }
   
   clock.style.color = checkBrightness(ttH) ? "#FFFFF" : "#00000";

   setTimeout(updateClock, 100);
}

window.addEventListener("DOMContentLoaded", (event) => {
   updateClock();
});
     
         