(function () {
  "use strict";
  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const ansDiv = document.getElementById("answer");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", function (evt) {
    const key = evt.code;
    if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "KILOMETERS TO MILES CONVERTER";
      intro.innerHTML =
        "Type in a number of kilometers and click the button to convert the distance to miles.";
    } else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "MILES TO KILOMETERS CONVERTER";
      intro.innerHTML =
        "Type in a number of miles and click the button to convert the distance to kilometers.";
    }
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const distance = parseFloat(document.getElementById("distance").value);
    if (distance) {
      if (convertType === "miles") {
        const conversion = (distance * 1.609344).toFixed(3);
        ansDiv.innerHTML = `<h2>${distance} miles convert to ${conversion} kilometers</h2>`;
      } else if (convertType === "kilometers") {
        const conversion = (distance * 0.621371192).toFixed(3);
        ansDiv.innerHTML = `<h2>${distance} kilometers convert to ${conversion} miles</h2>`;
      }
    } else {
      ansDiv.innerHTML = "<h2>Please provide a number!</h2>";
    }
  });
})();
