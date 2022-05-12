const unitInput = document.getElementById('unit-input');
const conversionLength = document.getElementById('conversion__length');
const conversionVolume = document.getElementById('conversion__volume');
const conversionMass = document.getElementById('conversion__mass');
const error = document.getElementById('error');

function handleConvert() {
   // grab value of input
   const unitValue = unitInput.value;

   // Check for number as input
   if (!Number(unitValue)) {
      error.textContent = `Please enter a number`;
      return;
   } else {
      error.textContent = '';
   }

   // convert length
   let feet = Math.round((unitValue * 3.28084) * 1000) / 1000;
   let meters = Math.round((unitValue / 3.28084) * 1000) / 1000;
   conversionLength.textContent = `${unitValue} meters = ${feet} feet | ${unitValue} feet = ${meters} meters`;

   // convert volume
   let gallons = Math.round((unitValue / 3.785) * 1000) / 1000;
   let liters = Math.round((unitValue * 3.785) * 1000) / 1000;
   conversionVolume.textContent = `${unitValue} liters = ${gallons} gallons | ${unitValue} gallons = ${liters} liters`;

   // convert mass
   let pounds = Math.round((unitValue * 2.205) * 1000) / 1000;
   let kilos = Math.round((unitValue / 2.205) * 1000) / 1000;
   conversionMass.textContent = `${unitValue} kilos = ${pounds} pounds | ${unitValue} pounds = ${kilos} kilos`;
}

// convert units on focus out of input field
unitInput.addEventListener('focusout', handleConvert);