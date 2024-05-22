function calculateYears() {
  const hoursInput = document.getElementById("hoursInput").value;
  const hours = parseFloat(hoursInput);

  if (isNaN(hours) || hours < 0) {
    document.getElementById("result").innerText =
      "Please enter a valid number of hours.";
    return;
  }

  const hoursPerDay = 24;
  const daysPerYear = 365.25; 

  const years = hours / (hoursPerDay * daysPerYear);

  document.getElementById(
    "result"
  ).innerText = `${hours} hours is approximately ${years.toFixed(6)} years.`;
}
