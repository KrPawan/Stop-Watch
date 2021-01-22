var count = 0,
  count2 = 1,
  count3 = 1,
  count4 = 1;
// mss -- millisecond
// ss -- second
// mm -- minute
// hh -- hour
function myTimer() {
  document.getElementById("mss").innerHTML = count;
  count++;
  if (count > 99) {
    count = 0;
    if (count2 < 10) {
      document.getElementById("ss").innerHTML = "0" + count2;
    } else {
      document.getElementById("ss").innerHTML = count2;
    }

    count2++;
    if (count2 > 60) {
      count2 = 0;
      document.getElementById("ss").innerHTML = "0" + count2;
    }

    if (count2 == 0) {
      if (count3 < 10) {
        document.getElementById("mm").innerHTML = "0" + count3;
      } else {
        document.getElementById("mm").innerHTML = count3;
      }

      count3++;
      if (count3 > 60) {
        count3 = 0;
        document.getElementById("mm").innerHTML = "0" + count3;
      }

      if (count3 == 0) {
        count3 = 0;
        if (count4 < 10) {
          document.getElementById("hh").innerHTML = "0" + count4;
        } else {
          document.getElementById("hh").innerHTML = count4;
        }

        count4++;
      }
    }
  }
}

function starter() {
  call = setInterval(myTimer, 10);
  fall = call;
  document.getElementById("stopbtn").disabled = false;
  document.getElementById("startbtn").disabled = true;
  document.getElementById("resetbtn").disabled = false;
}
//  flag = true;
// function both(){
// 	if(flag){
// 		starter();
// 		flag = false;
// 	}
// 	else{
// 		stopper();
// 		flag = true;
// 	}

// }

function stopper() {
  clearInterval(call);
  document.getElementById("startbtn").disabled = false;
  document.getElementById("stopbtn").disabled = true;
}

function resetter() {
  location.reload();
}
function start() {
  document.getElementById("stopbtn").disabled = true;
  document.getElementById("startbtn").disabled = false;
  document.getElementById("resetbtn").disabled = true;
}
window.onload = start;
