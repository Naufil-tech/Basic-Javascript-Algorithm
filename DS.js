// 1) Convert Celsius to Fahrenheit:
function convertToF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}
convertToF(30);

// 2) Reverse a String:
function reverseString(str) {
    str = str.split("").reverse().join("");
    console.log(str.split(""));
    console.log(str.split("").reverse());
    console.log(str);
    return str;
}
reverseString("hello");

// 3) Factorialize a Number:
-
    function factorialize(num) {
        for (var product = 1; num > 0; num--) {
            product *= num;
            console.log("product", product);
            console.log("num", num);
        }
        return product;
    }
    factorialize(5);

-
    function factorialize(num) {
        if (num === 0) {
            return 1;
        }
        return num * factorialize(num - 1);
    }
    factorialize(5);

-
    function factorialize(num, factorial = 1) {
        if (num == 0) {
            return factorial;
        } else {
            return factorialize(num - 1, factorial * num);
        }
    }
    factorialize(5);

-
    function factorialize(num, factorial = 1) {
        return num < 0 ? 1 : (
            new Array(num)
                .fill(undefined)
                .reduce((product, val, index) => product * (index + 1), 1)
        );
    }
    factorialize(5);

// 4) Find the Longest Word in a String:
-
    function findLongestWordLength(str) {
        var words = str.split(' ');
        var maxLength = 0;

        for (var i = 0; i < words.length; i++) {
            if (words[i].length > maxLength) {
                maxLength = words[i].length;
            }
        }
        return maxLength;
    }

-
    function findLongestWordLength(s) {
        return s.split(' ')
            .reduce(function (x, y) {
                return Math.max(x, y.length)
            }, 0);
    }

-
    function findLongestWordLength(str) {
        return Math.max(...str.split(" ").map(word => word.length));
    }

// 5) Return Largest Numbers in Arrays :
-
    function largestOfFour(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(Math.max(...arr[i]));
        }
        console.log(newArr);
        return newArr;
    }
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 6) Confirm the Ending:
-
    function confirmEnding(str, target) {
        return str.slice(str.length - target.length) === target;
    }
    confirmEnding("Bastian", "n");

// 7) Repeat a String Repeat a String:
-
    function repeatStringNumTimes(str, num) {
        let newStr = "";
        if (num < 0) {
            return "";
        }
        for (let i = 1; i <= num; i++) {
            newStr += str;
        }
        return newStr;
    }
    repeatStringNumTimes("abc", 3);

-
    function repeatStringNumTimes(str, num) {
        var accumulatedStr = "";
        while (num > 0) {
            accumulatedStr += str;
            num--;
        }
        return accumulatedStr;
    }
    repeatStringNumTimes("abc", 3);

-
    function repeatStringNumTimes(str, num) {
        return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
    }
    repeatStringNumTimes("abc", 3);

// 8) Truncate a String:
-
    function truncateString(str, num) {
        // Clear out that junk in your trunk
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    truncateString("A-tisket a-tasket A green and yellow basket", 8);

-
    function truncateString(str, num) {
        return str.length > num ? str.slice(0, num) + "..." : str;
    }
    truncateString("A-tisket a-tasket A green and yellow basket", 8);

// 9) Finders Keepers:
-
    function findElement(arr, func) {
        return arr.find(func);
    }
    findElement([1, 2, 3, 4], num => num % 2 === 0);

-
    function findElement(arr, func) {
        let num = 0;
        for (var i = 0; i < arr.length; i++) {
            num = arr[i];
            if (func(num)) {
                return num;
            }
        }
        return undefined;
    }
    findElement([1, 2, 3, 4], num => num % 2 === 0);

-
    function findElement(arr, func) {
        return arr[arr.map(func).indexOf(true)];
    }
    findElement([1, 2, 3, 4], num => num % 2 === 0);

//10) Title Case a Sentence :
-
    function titleCase(str) {
        var convertToArray = str.toLowerCase().split(" ");
        var result = convertToArray.map(function (val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
        console.log(result.join(" "));
        return result.join(" ");
    }
    titleCase("I'm a little tea pot");

-
    function titleCase(str) {
        return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
    }
    titleCase("I'm a little tea pot");

//11) Slice and Splice :
-
    function frankenSplice(arr1, arr2, n) {
        // It's alive. It's alive!
        let localArray = arr2.slice();
        for (let i = 0; i < arr1.length; i++) {
            localArray.splice(n, 0, arr1[i]);
            n++;
        }
        console.log(localArray);
        return localArray;
    }
    frankenSplice([1, 2, 3], [4, 5, 6], 1);

-
    function frankenSplice(arr1, arr2, n) {
        // It's alive. It's alive!
        let localArr = arr2.slice();
        localArr.splice(n, 0, ...arr1);
        return localArr;
    }
    frankenSplice([1, 2, 3], [4, 5, 6], 1);

//12) Falsy Bouncer :
-
    function bouncer(arr) {
        let newArray = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]) newArray.push(arr[i]);
        }
        console.log(newArray);
        return newArray;
    }
    bouncer([7, "ate", "", false, 9]);

-
    function bouncer(arr) {
        console.log(arr.filter(Boolean));
        return arr.filter(Boolean);
    }
    bouncer([7, "ate", "", false, 9]);

//13) Where do I Belong
-
    function getIndexToIns(arr, num) {
        // Find my place in this sorted array.
        var times = arr.length; // runs the for loop once for each thing in the array
        var count = 0;
        for (var i = 0; i < times; i++) {
            if (num > arr[i]) {
                count++;
            }
        }
        console.log(count);
        // counts how many array numbers are smaller than num
        return count; // the above equals num's position in a sorted array
    }
    getIndexToIns([40, 60], 50);

-
    function getIndexToIns(arr, num) {
        arr.sort(function (a, b) {
            return a - b;
        });

        for (var a = 0; a < arr.length; a++) {
            if (arr[a] >= num) return a;
        }

        return arr.length;
    }

    -
    function getIndexToIns(arr, num) {
        arr.sort(function (a, b) {
            return a - b;
        });

        var i = 0;
        while (num > arr[i]) {
            i++;
        }

        return i;
    }
    getIndexToIns([40, 60], 50);

-
    function getIndexToIns(arr, num) {
        arr.push(num);
        arr.sort(function (a, b) {
            return a - b;
        });
        return arr.indexOf(num);
    }

    -
    function getIndexToIns(arr, num) {
        // sort and find right index
        var index = arr
            .sort((curr, next) => curr - next)
            .findIndex(currNum => num <= currNum);
        // Returns proper answer
        return index === -1 ? arr.length : index;
    }
    getIndexToIns([40, 60], 500);

-
    function getIndexToIns(arr, num) {
        return arr
            .concat(num)
            .sort((a, b) => a - b)
            .indexOf(num);
    }
    getIndexToIns([1, 3, 4], 2);

-
    function getIndexToIns(arr, num) {
        return arr.filter(val => num > val).length;
    }

// 14) Mutations:
-
    function mutation(arr) {
        var test = arr[1].toLowerCase();
        var target = arr[0].toLowerCase();
        for (var i = 0; i < test.length; i++) {
            if (target.indexOf(test[i]) < 0) return false;
        }
        return true;
    }
    mutation(["hello", "hey"]);

-
    function mutation(arr) {
        return arr[1]
            .toLowerCase()
            .split("")
            .every(function (letter) {
                return arr[0].toLowerCase().indexOf(letter) != -1;
            });
    }

-
    function mutation([target, test], i = 0) {
        target = target.toLowerCase();
        test = test.toLowerCase();
        return i >= test.length
            ? true
            : !target.includes(test[i])
                ? false
                : mutation([target, test], i + 1);
    }

//15) Chunky Monkey :
-
    function chunkArrayInGroups(arr, size) {
        // Break it up.
        var arr2 = [];
        for (var i = 0; i < arr.length; i += size) {
            arr2.push(arr.slice(i, i + size));
        }
        console.log(arr2);
        return arr2;
    }
    chunkArrayInGroups(["a", "b", "c", "d"], 2);

-
    function chunkArrayInGroups(arr, size) {
        var temp = [];
        var result = [];

        for (var a = 0; a < arr.length; a++) {
            if (a % size !== size - 1) temp.push(arr[a]);
            else {
                temp.push(arr[a]);
                result.push(temp);
                temp = [];
            }
        }

        if (temp.length !== 0) result.push(temp);
        return result;
    }

-
    function chunkArrayInGroups(arr, size) {
        // Break it up.
        var newArr = [];
        var i = 0;

        while (i < arr.length) {
            newArr.push(arr.slice(i, i + size));
            i += size;
        }
        return newArr;
    }
    chunkArrayInGroups(["a", "b", "c", "d"], 2);

-
    function chunkArrayInGroups(arr, size) {
        var newArr = [];
        while (arr.length) {
            newArr.push(arr.splice(0, size));
        }
        return newArr;
    }

-
    function chunkArrayInGroups(arr, size) {
        if (arr.length <= size) {
            return [arr];
        } else {
            return [arr.slice(0, size)].concat(
                chunkArrayInGroups(arr.slice(size), size)
            );
        }
    }  