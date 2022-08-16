let userName = prompt('Kullanıcı Adınızı Giriniz:',)
let printName = document.getElementById('myName')
printName.innerHTML = userName
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function clockFunction(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    hrs = checkTime(hrs)
    min = checkTime(min)
    sec = checkTime(sec)
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
} 
    setInterval(clockFunction, 1000);
function checkTime(i) {
      if (i < 10) {i = "0" + i};
      return i;
    }



