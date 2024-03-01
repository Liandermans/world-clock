function alertDateTime(event) {
  if (event.target.value === "sydney") {
    alert(`It is ${sydneyDateTime} in Sydney, Australia`);
  }
  if (event.target.value === "paris") {
    alert(`It is ${parisDateTime} in Paris, France`);
  }
  if (event.target.value === "tokyo") {
    alert(`It is ${tokyoDateTime} in Tokyo, Japan`);
  }
}

let sydneyDateTime = moment
  .tz("Australia/Sydney")
  .format("dddd, D MMMM, YYYY, h:mm A");

let parisDateTime = moment
  .tz("Europe/Paris")
  .format("dddd, D MMMM, YYYY, h:mm A");

let tokyoDateTime = moment
  .tz("Asia/Tokyo")
  .format("dddd, D MMMM, YYYY, h:mm A");

let selectElement = document.querySelector("#city-dropdown");
selectElement.addEventListener("change", alertDateTime);
