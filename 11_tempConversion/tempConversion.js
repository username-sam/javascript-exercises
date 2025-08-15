const convertToCelsius = function(fahrenheit) {
  if(fahrenheit == 32 ){
    return 0
  }else return +(5/9 * (fahrenheit - 32)).toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  if(celsius == 0){
    return 32
  }else return +((9/5 * celsius) + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
