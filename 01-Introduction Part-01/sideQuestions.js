function AverageArray(arr) {
  let sum = arr.reduce((current, prev) => current + prev);
  let average = sum / arr.length;
  return average;
}

console.log(AverageArray([10, 4, 7, 6]));

// iterative solution

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
  }
  let average = sum / arr.length;
  return average;
}

console.log(average([1, 2, 3, 4]));

function recusiveSum(arr, i, n) {
  if (i == n - 1) {
    return arr[i];
  }
  return arr[i] + recusiveSum(arr, i + 1, n);
}
function averageRecursive(arr) {
  return recusiveSum(arr, 0, arr.length) / arr.length;
}
console.log(`Recursive average: ${averageRecursive([5, 5])}`);

function PrintDigits(number) {
  let stringfied = "";
  const stringNumber = number.toString();
  for (let i = 0; i < stringNumber; i++) {
    switch (stringNumber[i]) {
      case "0":
        stringfied += "Zero ";
        break;
      case "1":
        stringfied += "one ";
        break;
      case "2":
        stringfied += "Two ";
        break;
      case "3":
        stringfied += "Three ";
        break;
      case "4":
        stringfied += "Four ";
        break;
      case "5":
        stringfied += "Five ";
        break;
      case "6":
        stringfied += "Six ";
        break;
      case "7":
        stringfied += "Seven ";
        break;
      case "8":
        stringfied += "Eight ";
        break;
      case "9":
        stringfied += "Nine ";
        break;
    }
  }
  return stringfied;
}

console.log(PrintDigits(32847));

// function DivisibleBySix(num) {
//   return num % 6 == 0 ? "Yes it is!" : "No it is not!";
// }
// console.log(DivisibleBySix(18));

function PalindromeCheck(str) {
  str = str.toString();
  let i = 0;
  while (i <= str.length / 2) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "NO";
    }
    i++;
  }
  return "Yes";
}

console.log(PalindromeCheck("moom"));

function CountVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      counter++;
    }
  }
  return counter;
}
console.log(CountVowels("geeksforgeeks portal"));

function counter1(str, i, counter) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (i == str.length - 1) {
    return vowels.includes(str[i].toLowerCase()) ? 1 : 0;
  }
  if (vowels.includes(str[i].toLowerCase())) {
    return 1 + counter1(str, i + 1, counter);
  }
  return 0 + counter1(str, i + 1, counter);
}

function v1(str) {
  let i = 0;
  let counter = 0;
  return counter1(str, i, counter);
}

console.log(v1("Awolkare"));

function perfectSquareChecker(num) {
  return Math.sqrt(num) == Math.trunc(Math.sqrt(num)) ? "Yes" : "No";
}

console.log(perfectSquareChecker(16));

// 1+3+5=9, sum of all the odd before said perfect square number is equal to the perfect square number!

function MathProp(num) {
  let odd = 1;

  while (num > 0) {
    num -= odd;
    odd += 2;
  }
  return num == 0 ? "Yes it is!" : "No it is not!";
}

console.log(MathProp(16));

//

function MatrixValueFinder(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  return max;
}

console.log(
  MatrixValueFinder([
    [1, 2, 3, 4],
    [5, 6, 71, 8],
    [34, 5, 23, 67],
    [1, 2, 3, 4],
  ])
);
console.log("____________");
function sumDigits(num) {
  let arrayofNum = num.toString().split("");
  // console.log(arrayofNum);
  let sum = 0;
  for (let i = 0; i < arrayofNum.length; i++) {
    sum += Number(arrayofNum[i]);
  }

  return sum;
}

console.log(sumDigits(999));
console.log("_________________");
function sumDigits1(n) {
  let sum = 0;

  while (n != 0) {
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumDigits1(999));

function squareSums(num) {
  let sumSquare = 0;
  let numSquare = 0;
  for (let i = 1; i <= num; i++) {
    sumSquare += i;
    numSquare += i * i;
  }
  sumSquare **= 2;

  return sumSquare - numSquare;
}

console.log(squareSums(10));

function armStringNumber(num) {
  let numLenght = num.toString().length;
  console.log(numLenght);
  num = num.toString().split("");
  let army = 0;
  for (let i = 0; i < num.length; i++) {
    army += Math.pow(num[i], num.length);
  }

  num = Number(num.join(""));

  return num == army ? "Yesss" : "Noooo";
}
console.log(armStringNumber(1634));

function factorial(num) {
  let factorials = 1;
  for (let i = num; i > 0; i--) {
    factorials *= i;
  }
  return factorials;
}
console.log("..............");
console.log(factorial(5));

console.log("__________________");

function sortCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return "not sorted!";
    }
    continue;
  }
  return "Yes it is sorted!";
}

console.log(sortCheck([20, 23, 23, 45, 90, 88]));

function sortCheckRecursove(arr, i) {
  if (i == arr.length - 1) {
    return 1;
  }
  if (arr[i] <= arr[i + 1]) {
    return 1 == sortCheckRecursove(arr, i + 1);
  }
  return 0 == sortCheckRecursove(arr, i + 1);
}

console.log(sortCheckRecursove([1, 2, 3], 0));

function MultiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num}X${i}=${num * i}`);
  }
}

MultiplicationTable(6);

function wordFinder(str, word) {
  str = str.toLowerCase().split(" ");
  word = word.toLowerCase();

  if (str.includes(word)) {
    return "YESS";
  }
  return "NOO";
}

console.log(wordFinder("GEEks for geeks", "For"));

function wordFinder1(str, word) {
  str = str.toLowerCase();
  word = word.toLowerCase();
  str = str.split(" ");

  if (str.indexOf(word) == -1) {
    return "Noooo!!!!";
  }
  return "Yessss!!!!";
}

console.log(wordFinder1("GEEks for geeks", "for"));

function segregation(arr) {
  let zeroP = 0;
  let onesP = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr[zeroP] = arr[i];
      zeroP++;
    } else {
      arr[onesP] = arr[i];
      onesP--;
    }
  }
  return arr;
}
console.log(segregation([1, 1, 1, 1, 0, 0, 1, 1, 1, 0]));

function reverseNumber(num) {
  console.log(num);
  num = num.toString().split("");
  let leftPointer = 0;
  let rightPointer = num.length - 1;

  while (leftPointer <= rightPointer) {
    let temp = num[rightPointer];
    num[rightPointer] = num[leftPointer];
    num[leftPointer] = temp;

    rightPointer--;
    leftPointer++;
  }
  num = Number(num.join(""));
  return num;
}

console.log(reverseNumber(1234445));

function recursiveReverse(num, leftP, righP) {
  if (leftP >= righP) {
    return num;
  }
  let temp = num[righP];
  num[righP] = num[leftP];
  num[leftP] = temp;
  return recursiveReverse(num, leftP + 1, righP - 1);
}

function reverseing1(num) {
  num = num.toString().split("");
  let leftP = 0;
  let righP = num.length - 1;
  return recursiveReverse(num, leftP, righP);
}
console.log("_________________");

console.log(reverseing1(1234).join(""));

function secondLargest(arr) {
  let largest = (secondLargest = -Infinity);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > secondLargest && arr[j] < largest) {
      secondLargest = arr[j];
    }
  }

  if (secondLargest == -Infinity) {
    return "No second Largest!";
  }

  return secondLargest;
}

console.log(secondLargest([3, 4, 666, 666, 55, 34]));

function secondLargest1(arr) {
  let largest = (secondLargest = -Infinity);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest1([3, 4, 666, 666, 55, 34]));

function displayLongestName(arr) {
  // ["a", "asfsfdbgkdfjgbdf", "rgrighrihg"]
  let biggestIndex = -Infinity;
  let biggestLength = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let counter = arr[i].length;
    if (counter > biggestLength) {
      biggestLength = counter;
      biggestIndex = i;
    }
  }
  return arr[biggestIndex];
}

console.log(displayLongestName(["a", "asfsfdbgkdfjgbdf", "rgrighrihg"]));
