const calculator = (distance, frequency) => {
  return 8.656 * Math.sqrt(distance / frequency);
}

const distance = document.getElementById("distanceInput");
const frequency = document.getElementById("frequencyInput");
const result = document.getElementById("result");

const handleSubmit = (event) => {
  event.preventDefault();
  let fresnel = calculator(distance.value, frequency.value);
  if (isNaN(fresnel)) {
      fresnel = 0;
  }
  result.textContent = "El radio de la zona de Fresnel es de " + trunc(fresnel, 2) + " metros.";
}
