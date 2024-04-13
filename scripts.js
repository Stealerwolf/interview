document.addEventListener("DOMContentLoaded", function () {
  var inputNumber = document.getElementById("Number");
  var dynamicSpace = document.getElementById("dynamicSpace");

  inputNumber.addEventListener("input", function () {
    if (inputNumber.value.trim() !== "") {
      // Check if input value is not empty
      renderObjects();
    } else {
      dynamicSpace.innerHTML = ""; // Clear dynamic space if input is empty
    }
  });

  function renderObjects() {
    var number = parseInt(inputNumber.value);
    dynamicSpace.innerHTML = ""; // Clear previous content

    // Basic check to see if number is zero
    if (inputNumber.value.trim() !== "" && (isNaN(number) || number <= 0)) {
      dynamicSpace.innerHTML = "<p>Please, input a number bigger than zero.</p>";
      return;
    }

    // Render object (the box) according to the number typed by the user
    for (var i = 1; i <= number; i++) {
      var object = document.createElement("div");
      object.classList.add("objects");

      // Create a circle element
      var circle = document.createElement("div");
      circle.classList.add("circles");
      circle.textContent = i;

      // Append the box to the dynamic space
      dynamicSpace.appendChild(object);

      // Append the circle to dynamic space
      dynamicSpace.appendChild(circle);
    }
  }

  // Initial rendering of objects only if input is not empty
  if (inputNumber.value.trim() !== "") {
    renderObjects();
  }
});
