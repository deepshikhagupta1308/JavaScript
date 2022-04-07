//Remove all odd integers from an array
//Input: [4, 1, 9, 10, 15, 22, 5, 14]
//Output: [4, 10, 22, 14]

const input = [4, 1, 9, 10, 15, 22, 5, 14];
const temp = [];

function removeOdds(numbers) {
  
    for(let i=0;i<input.length;i++){
        if(input[i]%2===0){
            temp.push(input[i]);
        }
    }
    return temp;
}
console.log(removeOdds(input));

const input1 = [4, 1, 9, 10, 15, 22, 5, 14];
function removeOdds(numbers) {
  
    for(let i=0;i<input1.length;i++){
        if(input1[i]%2!==0){
            input1.splice(i,1);
            i--;
        }
    }
    return input1;
}
console.log(removeOdds(input1));



