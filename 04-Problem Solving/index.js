/**
 * STEPS TO PROBLEM SOLVINF
 *
 * understand the Problem (restate it in your own words, what are the INPUTS? AND OUTPU?T, DO YOU HAVE ENOUGH INFORMATION?)
 * explore concrete examples (along with the inputs and outputs, eplore edge cases and empty inputs!)
//  * **********
 * break it down  write out the pseudocode it demonstratees your path even if you ran out of time!
//  * **********

//  * **********
solve /  simplify write even if it is part of the code instead of waiting for 100% solved solution. it is much better that you went through it even half way there!
//  * **********

 * look back and refactor (do refactoring if you have enough time to do so, atleast acknowleedge the fact thet your code is not neat and you would improve on it if you have time and ask intervier what other better ways i can do it! !!)
 */

function charCount(str) {
  str = str
    .toLowerCase()
    // since we are using the replace operation we no longer need the split and join operations!
    // .split(" ")
    // .join("")
    .replace(/[^a-zA-Z0-9]/g, "");
  console.log(str);
  const result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // result[char] a means of accessing objects property!
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

// console.log(charCount("Hello there!"));

// let string = "Hello there";
// string = string.toLocaleLowerCase().split(" ").join("");
//
// console.log(string);

// refactored Version!

function charCount1(str) {
  str = str
    .toLowerCase()
    .replace(/[^a-z-A-Z0-9]/g, "")
    // so changes to array and we finally can you the forof along with the
    .split("");
  //   console.log(str);
  let result = {};

  //   Looks better that the traditional for Loop!
  for (const [index, char] of str.entries()) {
    // console.log(index, char);
    // if (char in result) {
    //   result[char]++;
    // } else {
    //   result[char] = 1;
    // }

    result[char] > 0 ? result[char]++ : (result[char] = 1);
  }
  return result;
}
// only for array!
console.log(charCount1("Hello there!"));

//
// for (const [index, value] of [1, 2, 3].entries()) {
//   console.log(index, value);
// }
