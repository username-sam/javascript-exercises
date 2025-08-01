const repeatString = function(s,n) {

    let result = "";

   for (let i = 1 ; i <= n ; i++){
    result += s;
   }
   if(n < 0){
    return "ERROR"
  } else return result
};

// Do not edit below this line
module.exports = repeatString;
