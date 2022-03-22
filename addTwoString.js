var arr1 = [2,0,8];
var arr2 = [3,0,8];
var tempArray = [];
var maxlength = arr1.length > arr2.length ? arr1.length : arr2.length;
console.log(maxlength);
var carry = 0;
for (let i = 0; i < maxlength; i++) {
    //console.log("-- ", { length: arr1.length, num: 1, i }, arr1.length - 1 - i);
    sum = (arr1[maxlength - 1 - i] || 0 ) + (arr2[maxlength - 1 - i] || 0) + carry;

    console.log({
        SUM: (sum+"").length,
        MAX: maxlength-1,
        LOGIC1: (sum+"").length > 1,
        LOGIC2:i!=maxlength-1,
        i
    });
    
    if((sum + "").length > 1 && (i != maxlength - 1)){
        value = sum % 10;
        carry = parseInt(sum / 10);
        tempArray.unshift(value);
    }
    else{
        tempArray.unshift(sum);

    }
  }
  console.log(tempArray.join(""));