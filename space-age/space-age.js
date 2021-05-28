export const age = (planet, seconds) => {
  switch (planet) {
    case "earth":
      seconds = seconds / 1;
      break;
    case "mercury":
      seconds = seconds / 0.2408467;
      break;
    case "venus":
      seconds = seconds / 0.61519726;
      break;
    case "mars":
      seconds = seconds / 1.8808158;
      break;
    case "jupiter":
      seconds = seconds / 11.862615;
      break;
    case "saturn":
      seconds = seconds / 29.447498;
      break;
    case "uranus":
      seconds = seconds / 84.016846;
      break;
    case "neptune":
      seconds = seconds / 164.79132;
      break;
  }

  const years = seconds / 31557600;

  return parseFloat(years.toFixed(2));
};