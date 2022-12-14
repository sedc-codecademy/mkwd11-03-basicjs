function calculateAge(age, conversionType) {
  if (Number.isNaN(age) || typeof age !== "number") {
    return "Invalid input";
  }
  if (conversionType !== "h2d" && conversionType !== "d2h") {
    return "Invalid input";
  }
  if (conversionType === "h2d") {
    return (result = age * 7);
  } else {
    return (result = age / 7);
  }
}

const convertedAge = calculateAge("sadsadas", "h2d");

console.log(convertedAge);
