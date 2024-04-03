document.getElementById("bmiForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var bmi = calculateBMI(weight, height);
  displayResult(bmi);
});

function calculateBMI(weight, height) {
  var bmi = weight / ((height / 100) * (height / 100));
  return bmi.toFixed(1);
}

function displayResult(bmi) {
  var resultDiv = document.getElementById("result");
  var resultText;
  if (bmi < 18.5) {
      resultText = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
      resultText = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
      resultText = "Overweight";
  } else {
      resultText = "Obese";
  }
  resultDiv.innerHTML = "<p>Your BMI is: " + bmi + "</p><p>You are " + resultText + "</p>";
}
