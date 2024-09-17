// O(n)
function Summer(n) {
  let i = 1;
  let sum = 0;
  while (i < n) {
    sum += i;
    i++;
  }
  return sum;
}

// O(!)
function Summer1(n) {
  return (n * (n + 1)) / 2;
}

console.log(Summer(10));

let t1 = performance.now();
Summer(1000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${t2 - t1}`);

// better solution than the above
let t3 = performance.now();
Summer(1000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${t4 - t3}`);

function CountUpAndDown(n) {
  console.log("COunting Up");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("At the Top, Counting Down");
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
  console.log("Back Down!");
}

CountUpAndDown(10);

// O(n**2)
function PrintAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = n; j >= 0; j--) {
      console.log([i, j]);
    }
  }
}

PrintAllPairs(10);

function logAtLeastTo5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeastTo5(2);

function logAtMost5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(2);

function double(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log(double([1, 2, 3, 4, 5]));

// 02/11 next time!
