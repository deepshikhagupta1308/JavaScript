// Write a function that accepts an array of numbers as an argument, where each number is given as a string and returns the second maximum value from the input array. If there is no second maximum return -1.

// Here are some examples:
// 1. For array ["3", "-2"] should return "-2"
// 2. For array ["5", "5", "4", "2"] should return "4"
// 3. For array ["4", "4", "4"] should return "-1" (duplicates are not considered as the second max)
// 4. For [] (empty array) should return "-1".
// For ["-214748364801","-214748364802"] should return "-214748364802".


function secondMaximum(array){
    
    if(array.length==0){
        return -1;
    }

    let highest=0 ;
    let secondHighest = 0;

    for (let i = 0; i < array.length; i++) { 
        if (parseInt(array[i]) > highest) { 
           secondHighest = highest; 
           highest = parseInt(array[i]); 
        } 
        else if (highest > parseInt(array[i]) > secondHighest) { 
           secondHighest = parseInt(array[i]); 
          }
        
        }
       
      return secondHighest;
}
console.log(secondMaximum(["5", "5", "4", "2"]));


