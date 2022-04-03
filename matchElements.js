/**
 * step1: Take 2 array as an input and take one empty array for storing result.
 * step2: Iterate both the array and check both the array elemnts.
 * step3: push match elements in empty array.
 * step4: return that temp array;
 * step5: stop.
 */ 


const arr1 = [1,2,3,4,5,6,7];
const arr2 = [1,2,3,4,5];
const temp = [];

function matchArrayElements(arr1,arr2){
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]===arr2[j])
            {
                temp.push(arr1[i]);
            }
        }
    }
    return temp;
}
console.log(matchArrayElements(arr1,arr2));
