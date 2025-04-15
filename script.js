const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const beep = document.getElementById("beep");
const toggleTheme = document.getElementById("toggleTheme");

// Load previous input
if (localStorage.getItem("lastInput")) {
  textBox.value = localStorage.getItem("lastInput");
}

// Load theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

function convert() {
  let temp = Number(textBox.value);
  localStorage.setItem("lastInput", temp);
  beep.play();

  if (toFahrenheit.checked) {
    let f = temp * 9 / 5 + 32;
    result.textContent = `${f.toFixed(1)} °F`;
  } else if (toCelsius.checked) {
    let c = (temp - 32) * (5 / 9);
    result.textContent = `${c.toFixed(1)} °C`;
  } else {
    result.textContent = "⚠️ Please select a unit.";
  }
}

toggleTheme.onclick = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};
