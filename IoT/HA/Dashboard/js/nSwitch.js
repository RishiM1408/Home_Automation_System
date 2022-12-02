
// ============ ON/OFF States =============

function toggleState(element) {

  if (element.classList.contains("oned")) {
    element.classList.remove("oned");
    let led = element.firstElementChild.firstElementChild;
    led.style.backgroundColor = "#c90000";
  } else {
    element.classList.add("oned");
    let led = element.firstElementChild.firstElementChild;
    led.style.backgroundColor = "#21c900";
  }

}

//-------------------------------------------------



const switchArea = document.getElementById("switch_Area");

switchArea.addEventListener("click", (click) => {
  let pCheck = false;
  let cTarget = click.target;
  while (!pCheck) {
    if (cTarget.classList.contains("button")) {
      pCheck = true;
    } else {
      cTarget = cTarget.parentNode;
    }
  }
  cTarget = cTarget.id;
  switchState(cTarget);
});

const switchState = (cTarget) => {

  const appliStatus = document.querySelector("#" + cTarget + " > span > status");
  if (appliStatus.innerHTML === "ON") {
    appliStatus.innerHTML = "OFF";
    toggleState(document.querySelector("#" + cTarget));
    try {
      document.getElementById(cTarget + "-ico").style.animation = "";
    } catch {

    }
    // pywebview.api.mb("1:0");

  } else {
    appliStatus.innerHTML = "ON";
    toggleState(document.querySelector("#" + cTarget));
    try {
      document.getElementById(cTarget + "-ico").style.animation = "fan-animation 1s linear infinite";
    } catch {

    }
    // pywebview.api.mb("1:1");
  }

}


//======== Sensors

function showSenMB(response) {
	console.log(response.message);
	let temp = document.querySelector("#mb-sensor > span > sensor > temp");
	let humi = document.querySelector("#mb-sensor > span > sensor > humi");
	let aqi = document.querySelector("#mb-sensor > span > sensor > aqi");

	let data = response.message;
	console.log(data);
	let sensorArray = data.split(/:/);
	temp.innerHTML = toFixed(sensorArray[0]);
	humi.innerHTML = toFixed(sensorArray[1]);
	aqi.innerHTML = toFixed(sensorArray[2]);
}

function showSenDR(response) {
	console.log(response.message);
	let temp = document.querySelector("#dr-sensor > span > sensor > temp");
	let humi = document.querySelector("#dr-sensor > span > sensor > humi");
	let aqi = document.querySelector("#dr-sensor > span > sensor > aqi");

	let data = response.message;
	console.log(data);
	let sensorArray = data.split(/:/);
	temp.innerHTML = toFixed(sensorArray[0]);
	humi.innerHTML = toFixed(sensorArray[1]);
	aqi.innerHTML = toFixed(sensorArray[2]);
}

function showSenJR(response) {
	console.log(response.message);
	let temp = document.querySelector("#jr-sensor > span > sensor > temp");
	let humi = document.querySelector("#jr-sensor > span > sensor > humi");
	let aqi = document.querySelector("#jr-sensor > span > sensor > aqi");

	let data = response.message;
	console.log(data);
	let sensorArray = data.split(/:/);
	temp.innerHTML = toFixed(sensorArray[0]);
	humi.innerHTML = toFixed(sensorArray[1]);
	aqi.innerHTML = toFixed(sensorArray[2]);
}

function showSenMR(response) {
	console.log(response.message);
	let temp = document.querySelector("#mr-sensor > span > sensor > temp");
	let humi = document.querySelector("#mr-sensor > span > sensor > humi");
	let aqi = document.querySelector("#mr-sensor > span > sensor > aqi");

	let data = response.message;
	console.log(data);
	let sensorArray = data.split(/:/);
	temp.innerHTML = toFixed(sensorArray[0]);
	humi.innerHTML = toFixed(sensorArray[1]);
	aqi.innerHTML = toFixed(sensorArray[2]);
}

function mbsensor() {
	pywebview.api.mbsensor().then(showSenMB)
}

setInterval(() => {
	pywebview.api.mbsensor().then(showSenMB);
	pywebview.api.drsensor().then(showSenDR);
	pywebview.api.jrsensor().then(showSenJR);
	pywebview.api.mrsensor().then(showSenMR);

}, 600); //6000000 for 10 min