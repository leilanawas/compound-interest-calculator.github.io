function updateRateLabel(value) {
  document.getElementById("rateLabel").innerText = `${value}%`;
}

function calculateInterest() {
  const principal = document.getElementById("principal").value;
  const rate = document.getElementById("rate").value;
  const time = document.getElementById("time").value;
  const frequency = document.getElementById("frequency").value;
  const progressBar = document.getElementById("progressBar");
  const resultDiv = document.getElementById("result");

  progressBar.value = 0;

  if (principal === "" || time === "" || rate === "") {
    resultDiv.innerText = "Please fill in all fields to calculate.";
    return;
  }

  const principalAmount = parseFloat(principal);
  const annualRate = parseFloat(rate) / 100;
  const years = parseFloat(time);
  const compoundingFrequency = parseInt(frequency);

  const compoundInterest =
    principalAmount *
    Math.pow(
      1 + annualRate / compoundingFrequency,
      compoundingFrequency * years
    );
  const result = compoundInterest.toFixed(2);

  const interval = setInterval(() => {
    progressBar.value += 5;
    if (progressBar.value >= 100) {
      clearInterval(interval);
      resultDiv.innerText = `Compound Interest: $${result}`;
    }
  }, 10);
}
