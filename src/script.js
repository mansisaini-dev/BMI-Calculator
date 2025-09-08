document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bmi-form");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);

    if (weight > 0 && heightCm > 0) {
      const heightM = heightCm / 100;
      const bmi = (weight / (heightM * heightM)).toFixed(2);

      let category = "";
      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
      } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }

      resultDiv.innerHTML = `Your BMI is <b>${bmi}</b> (${category})`;
    } else {
      resultDiv.innerHTML = "⚠️ Please enter valid values.";
    }
  });
});
