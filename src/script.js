function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment.tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "[<h2>]h:mm:ss [<small>]A[</small>][</h2>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTime = moment.tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "[<h2>]h:mm:ss [<small>]A[</small>][</h2>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let timeZone = event.target.value;
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(timeZone);
  let clockElement = document.querySelector("#cities");
  clockElement.innerHTML += `<div class="wrapper">
          <div class="city">
            <h3>${cityName}</h3>
            <span class="date">${cityTime.format("MMMM Do YYYY")}</span>
          </div>
          <div class="time">
            <h2>${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></h2>
          </div>
        </div>`;
}

let selectElement = document.querySelector("#city-selector");
selectElement.addEventListener("change", updateCity);
