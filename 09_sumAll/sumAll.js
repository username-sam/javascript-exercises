const sumAll = function(first,second) {
    let start = first
    let end  = second
    let sum = 0;

    if(first <= 0 || second <= 0){
        return sum = 'ERROR'
    }else if(isNaN(first) || isNaN(second)){
        return sum = 'ERROR'
    }
    if (second < first){
       start = second
       end = first
    }
    
    for(let i = start; i <= end ; i ++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
