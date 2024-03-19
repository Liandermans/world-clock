function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesTime = moment.tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "[<h2>]h:mm:ss [<small>]A[</small>][</h2>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  parisTime = moment.tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
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

function updateCity() {
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(timeZone);
  let clockElement = document.querySelector("#cities");
  clockElement.innerHTML = `<div class="wrapper">
          <div class="city">
            <h3>${cityName}</h3>
            <span class="date">${cityTime.format("MMMM Do YYYY")}</span>
          </div>
          <div class="time">
            <h2>${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></h2>
          </div>
        </div><div class="back">
        <a href="/" class="back">Back to start</a>
      </div>`;
}

let selectElement = document.querySelector("#city-selector");
selectElement.addEventListener("change", function (event) {
  timeZone = event.target.value;
  updateCity();
});

let timeZone = null;
setInterval(updateCity, 1000);
