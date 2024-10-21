// Frequency Counter Pattern!

function Frequency(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  counter = {};
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i] ** 2)) {
      counter[arr1[i]] ? counter[arr1[i]]++ : (counter[arr1[i]] = 1);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    // counter[arr2[i] ** 0.5] ? counter[arr2[i] ** 0.5]-- :;
    if (counter[arr2[i] ** 0.5]) {
      counter[arr2[i] ** 0.5]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(Frequency([1, 2, 3, 2], [9, 1, 4, 4]));

// the right way of Doing FrequencyCounter Pattern!

function frequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let key of arr1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }
  for (let key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  //checking!

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(".................");
console.log(frequencyCounter([1, 2, 3], [1, 4, 9]));

// Solved with  logic of frequencyCounter Pattern!!

function anagramTester(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (const key of str1) {
    counter1[key] = (counter1[key] || 0) + 1;
  }

  for (const key of str2) {
    counter2[key] = (counter2[key] || 0) + 1;
  }

  console.log(counter1);
  console.log(counter2);

  for (const key in counter1) {
    if (Object.hasOwnProperty.call(counter1, key)) {
      const element = counter1[key];
      if (counter1[key] !== counter2[key]) {
        return false;
      }
    }
  }
  return true;
}

console.log(anagramTester("cinema", "iceman"));
console.log(anagramTester("qwerty", "qweytr"));

// another option! (nested Loop though!) not preffered!
function Frequency1(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(Frequency1([1, 2, 3], [4, 1, 9]));
