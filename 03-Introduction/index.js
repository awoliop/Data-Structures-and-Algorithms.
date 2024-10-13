/*

Big O of objectsa
insertion, removal, access-O(1)
searching-O(n)
 */

const instructor = {
  firstName: "Awelker",
  lastName: "Ibrahim",
  favoriteNumbers: [1, 2, 3, 4],
};

console.log("/...............");
// console.log(Object.entries(instructor)[0][0]);

// O(N)
console.log(Object.keys(instructor));
console.log(Object.entries(instructor));
console.log(Object.values(instructor));

// O(1)
console.log(instructor.hasOwnProperty("firstName")); //true
console.log(instructor.hasOwnProperty("Numbers")); //false

/**
 * with arrays:
 * accessing, O(1)
 * searching-O(n)
 * insertion and remocal-depends on where we are doing this operations!
 *  at the begning-o(n) as reindexing is required for every element in array!
 * at the end-o(1) no need for reindexing!
 */

// 03/6 next time!
