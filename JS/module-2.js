// const jsFileName = "script.js";
// console.log(jsFileName.endsWith("js")); // true

// console.log(jsFileName.includes('js'));

// const jsFileName = "script.js, about.css, portfolio.css";
// console.log(jsFileName.endsWith(".js")); // false
// console.log(jsFileName.includes('.js')); // true

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace("script.js", "min.dfghrjjs");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll("styles.css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// console.log(jsFileName);

// function checkAge(age) {
//     if (age >= 18) { // Change this line
//         return "You are an adult";
//     }

//     return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

/* function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam"; */
// Change code below this line

/*     if (password === ADMIN_PASSWORD) {
        return "Welcome!";
    }
    return "Access denied, wrong password!";

    // Change code above this line
}

console.log(checkPassword("mangohackzor")); //"Access denied, wrong password!"
console.log(checkPassword("polyhax"));//"Access denied, wrong password!"
console.log(checkPassword("jqueryismyjam"))//"Welcome!" */

/* function checkStorage(available, ordered) {
    // Change code below this line

    if (ordered === 0) {
        return "Your order is empty!";
    }
    if (ordered > available) {
        return "Your order is too large, not enough goods in stock!";
    }

    return "The order is accepted, our manager will contact you";

    // Change code above this line
}

console.log(checkStorage(100, 50)); //"The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130));//"Your order is too large, not enough goods in stock!"
console.log(checkStorage(70, 0));//"Your order is empty!" */

// function getExtremeElements(array) {
//     // Change code below this line
//     const newArray = [];

//     // newArray.push(array[0], array[array.length - 1]);

//     // return newArray;



//     // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));//[1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));//["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));//["apple", "banana"]

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//     words = message.split(delimiter);
//     // Change code above this line
//     return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "))//["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", ""))//["M", "a", "n", "g", "o"]
// console.log(splitMessage("best_for_week", "_"))//["best", "for", "week"]
// console.log(splitMessage('Mango hurries to the train', ''))

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line

//     let price = 0;
//     price = message.split(' ').length * pricePerWord;

//     return price;
//     // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))//50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20))//100
// console.log(calculateEngravingPrice("Web-development is creative work", 40))//160
// console.log(calculateEngravingPrice("Web-development is creative work", 20))//80

// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line

//     string = array.join(delimiter);


//     // Change code above this line
//     return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))//"Mango hurries to the train"
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""))//"Mango"
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"))//"top_picks_for_you"

// function slugify(title) {
//     // Change code below this line


//     return title.toLowerCase().split(' ').join('-');


//     // Change code above this line
// }

// console.log(slugify("Arrays for begginers"))//"arrays-for-begginers"
// console.log(slugify("English for developer"))//"english-for-developer"
// console.log(slugify("Ten secrets of JavaScript"))//"ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"))//"how-to-become-a-junior-developer-in-two-weeks"

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const newArray = firstArray.concat(secondArray);

//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength);
//     }

//     return newArray;

//     // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 2))//["Mango", "Poly", "Ajax"]

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const newArray = firstArray.concat(secondArray);

//     if (newArray.length > maxLength) {
//         const newArray2 = newArray.splice(maxLength, newArray.length, '...');
//         return newArray;
//     }

//     return newArray;

//     // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 1))//["Mango", "Poly", "Ajax"]

// const start = 1;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {// Change this line
//         console.log(i);
//     }
// }

// function calculateTotal(number) {
//     // Change code below this line
//     let total = 0;
//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     }

//     return total;


//     // Change code above this line
// }

// console.log(calculateTotal(1));//1
// console.log(calculateTotal(3));//6
// console.log(calculateTotal(24));//300

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//     const fruit = fruits[i]; // Change this line
//     console.log(fruit);
// }

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//     }
//     // Change code above this line
//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503

/* function findLongestWord(string) {
    // Change code below this line
    const stringArray = string.split(' ');
    let longestWord = '';

    for (let i = 0; i < stringArray.length; i += 1) {

        if (stringArray[i].length > longestWord.length) {
            longestWord = stringArray[i];
        }


    }

    return longestWord;
    // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))//jumped
console.log(findLongestWord("Google do a roll"))//Google */


/* function findLongestWord(string) {
    // Change code below this line

    let longestWord = '';
    const stringToArray = string.split(' ');

    for (let i = 0; i < stringToArray.length; i += 1) {

        if (stringToArray[i].length > longestWord.length) {
            longestWord = stringToArray[i];
        }
    }

    return longestWord;

    // Change code above this line
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))//jumped
console.log(findLongestWord("Google do a roll"))//Google */

/* function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    for (let i = min; i <= max; i += 1) {
        numbers.push(i)
    }

    // Change code above this line
    return numbers;
}

console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34] */

/* function filterArray(numbers, value) {
    // Change code below this line
    const newNumbers = [];

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            newNumbers.push(numbers[i]);
        }
    }
    return newNumbers;
    // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3)) //[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)) // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)) // [] */

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum")) // true
// console.log(checkFruit("mandarin")) // false
// console.log(checkFruit("pear")) // true
// console.log(checkFruit("Pear")) // false

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     const newArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             newArray.push(array1[i]);
//         }
//     }
//     return newArray;

//     // Change code above this line
// }


console.log(getCommonElements([1, 2, 3], [2, 4])) // [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) // [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) // [12, 27, 3]