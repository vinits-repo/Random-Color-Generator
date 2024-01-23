const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const hexButton = document.querySelector(".hex-button");
const hexValue = document.querySelector(".hex-color-value");
const bgHex = document.querySelector(".hex-color");
const hexCopyBtn = document.querySelector(".copy-hex-color");

hexButton.addEventListener("click", function () {
  let colorValue = randomColor();
  bgHex.style.backgroundColor = colorValue;
  hexValue.innerHTML = colorValue;

  console.log(colorValue);

  if (colorValue === "#ffffff") {
    hexButton.style.color = "rgb(0, 0, 0)";
    hexCopyBtn.style.color = "rgb(0, 0, 0)";
    hexValue.style.color = "rgb(0,0,0)" 
  } else {
    hexButton.style.color = colorValue;
    hexCopyBtn.style.color = colorValue;
  }
});

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(hexValue.innerHTML);
  alert("Hex Color is copied to clipboard");
}

hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);

const rgbContainer = document.querySelector(".rgb-color");
const rgbButton = document.querySelector(".rgb-btn");
const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const rgbText = document.querySelector(".rgb-color-value");
const rgbCopyBtn = document.querySelector(".copy-rgb-color");
const labelText = document.querySelectorAll(".labelText")

rgbButton.addEventListener("click", () => {
  let redValue = redInput.value;
  let greenValue = greenInput.value;
  let blueValue = blueInput.value;

  let rgb = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  rgbContainer.style.backgroundColor = rgb;
  rgbText.textContent = rgb;

  if (redValue > 250 && greenValue > 250 && blueValue > 250) {
    rgbButton.style.color = "rgb(0, 0, 0)";
    rgbCopyBtn.style.color = "rgb(0, 0, 0)";
    rgbText.style.color = "rgb(0, 0, 0)";
    
    labelText.forEach(e => {
      e.style.color = "rgb(0, 0, 0)";
    })
  } else {
    rgbButton.style.color = rgb;
    rgbCopyBtn.style.color = rgb;
    rgbText.style.color = "rgb(255,255,255)";
    labelText.forEach(e => {
      e.style.color = "rgb(255,255,255)";
    })
  }
});

function copyRgbColorToClipBoard() {
  navigator.clipboard.writeText(rgbText.innerHTML);
  alert("RGB Color is copied to clipboard");
}

rgbCopyBtn.addEventListener("click", copyRgbColorToClipBoard);
