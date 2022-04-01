/**
 *
 * @param str1
 * @param str2
 * @returns
 *
 * step1: Take 2 string.
 * step2: first check length of both string and typeof both the strings
 * step3: convert string into array using split method
 * step4: iterate both the arrays and check both the arrays
 * step5: matched values splice
 * step6: if length is 0 print anagram.
 *
 */

function stringAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 !== n2 || typeof str1 !== "string" || typeof str2 !== "string") return;

  newStr1 = str1.split("");
  newStr2 = str2.split("");

  for (let i = 0; i < newStr1.length; i++) {
    for (let j = 0; j < newStr2.length; j++) {
      if (newStr1[i] === newStr2[j]) {
        newStr2.splice(j, 1);
        break;
      }
    }
  }
  if (newStr2.length === 0) {
    console.log("anagram");
  } else {
    console.log("not anagram");
  }
}
stringAnagram("listen", "silent");
