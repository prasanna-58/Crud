<template>
  <div>{{ items }}</div>
</template>
<script>
  export default {
    data() {
      return {
        items: [],
      };
    },
    async mounted() {
      console.log("test");
      this.smallestLargestNumber();
      this.evenNumbers();
      this.reverseString();
      this.diagonalElements();
      this.fibonacciSeries();
      this.twoSum();
      this.missingItems();
      this.items = await this.getLocation();
    },
    methods: {
      // Find the largest and smallest  number in an unsorted array of integers
      smallestLargestNumber() {
        let arr = [34, 78, 454, 12, 98, 343, 14];
        let min = arr[0];
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          } else if (arr[i] < min) {
            min = arr[i];
          }
        }
        console.log("max", max); // 454
        console.log("min", min); // 12
        return max, min;
      },
      //  Find Even NUmbers in an array
      evenNumbers() {
        var arr = [3, 4, 2, 7, 8, 34, 56];
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] % 2 == 0) {
            console.log("even numbers are..", arr[i]); // even numbers are.. 4 2 8 34 56
          }
        }
      },
      // Sum of diagonal elements
      diagonalElements() {
        let a = [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [1, 2, 3, 4],
          [5, 6, 7, 8],
        ];
        let primary = 0;
        let secondary = 0;
        for (var i = 0; i < a.length; i++) {
          for (var j = 0; j < a.length; j++) {
            if (i == j) {
              primary += a[i][j];
            } else if (i + j == a.length - 1) {
              secondary += a[i][j];
            }
          }
        }
        console.log("Welcome to Programiz!", secondary, primary);
      },

      // Reverse of a String
      reverseString() {
        let a = "prasanna";
        let b = "";
        for (let i = a.length - 1; i >= 0; i--) {
          b += a[i];
        }
        console.log("b", b); // annasarp
      },

      // Fibnaocci Series
      fibonacciSeries() {
        let fb = 6;
        let n1 = 0;
        let n2 = 1;
        let nextterm;
        for (let i = 0; i < fb; i++) {
          console.log("n1...", n1);
          nextterm = n1 + n2;
          n1 = n2;
          n2 = nextterm;
        }
      },

      // Sort of an array
      sortingArray() {
        let arr = [4, 2, 5, 6, 9, 3, 1, 2];
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
              var x = arr[i];
              arr[i] = arr[j];
              arr[j] = x;
            }
          }
        }
      },
      // find all pairs in an array of integers whose sum is equal to a given number in javascript
      twoSum() {
        let arr = [5, 2, 8, 7, 3, 9, 1, 6, 4];
        let constant = 10;
        for (let i = 0; i < arr.length - 2; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === constant) {
              console.log(arr[i], arr[j]); //2 8
              //7 3
              //9 1
            }
          }
        }
      },
      // Find the missing number in a given integer array of 1 to 100 in javascript
      missingItems() {
        let arr = [3, 5, 2, 6, 5, 9];
        let n = 10;
        let missingItems = [];
        for (let i = 1; i <= n; i++) {
          if (!arr.includes(i)) missingItems.push(i);
        }
        console.log("missingItems", missingItems); // [1, 4, 7, 8, 10]
        return missingItems;
      },

      // Remove arrays in array and sum
      removeArraysSum() {
        var arr = [[3, 2], [1], [4, 12]];
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
          }
        }
        console.log("sum", sum); // 22
      },
      // Remove arrays in array and duplicates
      removeArraysDuplicates() {
        var arr = [[3, 2], [1], [4, 12], [4, 3]];
        var sum = [];
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr[i].length; j++) {
            console.log("arr", arr[i][j]);
            if (!sum.includes(arr[i][j])) sum.push(arr[i][j]);
          }
        }
        console.log("sum", sum); //[3, 2, 1, 4, 12]
      },
      // Remove duplicates strings in array
      duplicatesString() {
        var test = ["Prasanna", "Ramya"];
        var results = [];
        for (var i = 0; i < test.length; i++) {
          for (var j = 0; j < test[i].length; j++) {
            if (!results.includes(test[i][j])) results.push(test[i][j]);
          }
        }
        console.log("results", results); // ['P', 'r', 'a', 's', 'n', 'R', 'm', 'y']
      },

      // Verify prime number(Number  divided by 1 and itself)
      verifyPrimeNumber() {
        var num = 23;
        var prime = num != 1;
        for (var i = 2; i < num; i++) {
          if (num % i == 0) {
            prime = false;
            break;
          }
        }
        return prime; //if true means prime number else it is not a prime
      },

      // Find Prime Numbers from the given array
      findPrimeNumbers() {
        var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
        arr.forEach((num) => {
          var data = this.verifyEachPrimeNumber(num);
          if (data.prime == true) console.log("data", data.num); // 2 3 5 7
        });
      },
      verifyEachPrimeNumber(num) {
        // var num = 23;
        var prime = num != 1;
        for (var i = 2; i < num; i++) {
          if (num % i == 0) {
            prime = false;
            break;
          }
        }
        return { prime, num }; //if true means prime number else it is not a prime
      },
      // Promise Example
      getLocation() {
        console.log("items");
        return new Promise((resolve, reject) => {
          fetch("http://ip-api.com/json", {
            method: "GET",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              return resolve(res);
            })
            .catch((error) => {
              return reject(error);
            });
        });
      },

      // Calculate index length in string
      calculateStringIndexLength() {
        let anum = [{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 }];
        let sum = 0;
        let firstName = "prasanna";
        let splitName = firstName.split("");
        for (var i = 0; i < Object.keys(anum[0]).length; i++) {
          for (var j = 0; j < splitName.length; j++) {
            if (Object.keys(anum[0])[i].includes(splitName[j])) {
              sum += Object.values(anum[0])[i]; // sum
            }
          }
        }
      },
    },
  };
</script>
