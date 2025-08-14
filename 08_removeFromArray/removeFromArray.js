const removeFromArray = function(arr,...arg) {
    let newArray = []
    
    arr.forEach(element => {


        if(!arg.includes(element)){
            newArray.push(element)
        }
    });

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
