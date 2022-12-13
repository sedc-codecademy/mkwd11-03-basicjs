function convertTemperature(temperature, conversionType) {
  // Calling the function does this
  //   let temperature = temperatureInput;
  //   let conversionType = convertType;

  if (Number.isNaN(temperature)) {
    return "Invalid input";
  }

  if (conversionType !== "f2c" && conversionType !== "c2f") {
    return "Invalid Input";
  }

  if (conversionType === "f2c") {
    const result = (5 / 9) * (temperature - 32);
    return result;
  }

  const result = temperature * 1.8 + 32;
  return result;
}

const temperatureInput = Number(prompt("Please enter temperature"));
const convertType = prompt("Enter F2C or C2F").toLowerCase();

const convertedTemp = convertTemperature(temperatureInput, convertType);
console.log(convertedTemp);
