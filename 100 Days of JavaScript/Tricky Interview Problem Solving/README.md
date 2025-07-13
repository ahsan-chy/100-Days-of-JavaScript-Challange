# Different Tricky Interview Questions

Table Of Questions 
- Pass 1 return 2, Pass 2 return 1
- Swap two variables 
- 


### Question: 1
 
- Make a function in which users pass 1 inside the function parameter and the function will return 2 and if user pass 2 it will return 1.
- Make sure you may not use this in javascript function  **==, ===, + - / %, if, if else, switch, case** 

```javascript
function reverse(val) {
    let result = {
        1: 2, 
        2: 1
    }
    return result[val]

}
console.log(reverse(1))
```

### Question 2
- Swap two values
```javascript
let a = 1,
    b = 2,
    tmp;
tmp = a;
a = b;
b = tmp;

console.log(a,b)
```


- Method 1: Swap two values without using third variable.

```javascript
let a = 10;
let b = 35;

a = a + b;   
b = a - b;   
a = a - b;   

console.log(a,b)   // a=35, b=10

``` 

- Method 2: Swap two values without using third variable.

```javascript
let a = 10;
let b = 35;
[a,b] = [b,a]

console.log(a, b)  // a=35, b=10

```

- Method 3: Swap two values without using third variable.
```javascript
let a=1;
let b=2;

b = [a, a = b][0];

console.log(a, b)  // a=2, b=1
```

- Method 4: 
```javascript
let a=4;
let b=5;

a = [a, b];
b = a[0];
a = a[1];

console.log(a, b)  // a=5, b=4
```




# JavaScript Questions

## 🔤 String-Related Questions

- Reverse a string (With & without built-in methods)
- Reverse Number (With & without built-in methods)
- Reverse words in a sentence (With & without built-in methods)
- Reverse an entire sentence (With & without built-in methods)
- Check if a string is a palindrome (With & without built-in methods)
- Check if two strings are anagrams
- Find the most frequently occurring character in a string or sentence
- Check if a string contains only digits or alphabets
- Count the number of vowels and consonants in a string
- Remove duplicate characters from a string
- Capitalize the first letter of each word in a sentence
- Compress a string (e.g., `"aaabbc"` → `"a3b2c1"`)
- Find the first non-repeating character in a string
- Find all permutations of a string
- Implement `substring()` or `includes()` manually
- Count occurrences of a substring in a string
- Check if one string is a rotation of another




### 🔄 **Reverse String**


#### ✅ **Using Built-in Methods**

```javascript
const userName = "AHSAN";

const reversed = userName.split('').reverse().join('');

console.log(reversed); // "NAHSA"
```

---

#### 🔧 **Without Using Built-in Methods**

```javascript
const userName = "AHSAN";

let reversed = '';
for (let i = userName.length - 1; i >= 0; i--) {
  reversed += userName[i];
}

console.log(reversed); // "NAHSA"
```



Here’s a breakdown of what both code snippets are doing — they are reversing **different parts** of the string.

---

## ✅ 1. **Reverse Word Order in a Sentence**

```js
let sentence = "Hello World!";

const reverseSentence = sentence.split(" ").reverse().join(" ");
console.log(reverseSentence); // Output: "World! Hello"
```

### 🔍 What it does:

* Splits on space → `["Hello", "World!"]`
* Reverses array → `["World!", "Hello"]`
* Joins with space → `"World! Hello"`

✅ **Reverses the order of words**, not the characters.

---

## ✅ 2. **Reverse Characters in Entire Sentence**

```js
let sentence = "I am Ahsan";

const reverseSentence = sentence.split("").reverse().join("");
console.log(reverseSentence); // Output: "nashA ma I"
```

### 🔍 What it does:

* Splits to characters → `["I", " ", "a", "m", " ", "A", ...]`
* Reverses that → `["n", "a", "s", "h", "A", " ", ...]`
* Joins → `"nashA ma I"`

✅ **Reverses all characters**, including spaces and punctuation.

---

### 🧠 Summary:

| Code                       | Effect                      | Result           |
| -------------------------- | --------------------------- | ---------------- |
| `split(" ")` → `reverse()` | Reverses word **order**     | `"World! Hello"` |
| `split("")` → `reverse()`  | Reverses **all characters** | `"nashA ma I"`   |





### 🔢 **Reverse Number**


#### ✅ **Using Built-in Methods**

```javascript
const num = 12345;

const reversed = parseInt(num.toString().split('').reverse().join(''));

console.log(reversed); // 54321
```

> ℹ️ This converts number → string → array → reversed string → back to number.

---

#### 🔧 **Without Using Built-in Methods**

```javascript
const num = 12345;

let reversed = 0;
let n = num;

while (n > 0) {
  const digit = n % 10;
  reversed = reversed * 10 + digit;
  n = Math.floor(n / 10);
}

console.log(reversed); // 54321
```

> ✅ No use of `toString`, `split`, `reverse`, or `join`.

---


Here’s how to **check if a string is a palindrome** both **with** and **without** built-in methods.

---

## 🔁 **Palindrome Check**

### 📌 Palindrome:

> A word or sentence that reads the same forwards and backwards (e.g. `"madam"`, `"racecar"`).

---

### ✅ **1. With Built-in Methods**

```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

---

### 🔧 **2. Without Built-in Methods**

```javascript
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("world"));   // false
```


Here’s how to check if **two strings are anagrams** — meaning they contain the **same characters in different order**.

---

## 🔄 **Anagram Check**

### 📌 Definition:

> Two strings are anagrams if they have the **same characters** with the **same frequency**, regardless of order.

---

### ✅ **1. With Built-in Methods**

```javascript
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
```

---

### 🔧 **2. Without Built-in Methods**

```javascript
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq1 = {};
  const freq2 = {};

  for (let i = 0; i < str1.length; i++) {
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("evil", "vile"));     // true
console.log(isAnagram("anagram", "grammar")); // false
```

---

Let’s break down a **dry run** of the `isAnagram` function step by step to see how it works under the hood.

---

## 🔁 Function

```js
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq1 = {};
  const freq2 = {};

  for (let i = 0; i < str1.length; i++) {
    freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
  }

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}
```

---

## 🧪 Dry Run #1: `isAnagram("evil", "vile")`

### Step 1: Length Check

* `"evil".length === 4`
* `"vile".length === 4` ✅ Pass

---

### Step 2: Build Frequency Maps

**Loop i = 0 to 3**

| i | str1\[i] | freq1                      | str2\[i] | freq2                      |
| - | -------- | -------------------------- | -------- | -------------------------- |
| 0 | "e"      | { e: 1 }                   | "v"      | { v: 1 }                   |
| 1 | "v"      | { e: 1, v: 1 }             | "i"      | { v: 1, i: 1 }             |
| 2 | "i"      | { e: 1, v: 1, i: 1 }       | "l"      | { v: 1, i: 1, l: 1 }       |
| 3 | "l"      | { e: 1, v: 1, i: 1, l: 1 } | "e"      | { v: 1, i: 1, l: 1, e: 1 } |

✅ Both `freq1` and `freq2` now contain:

```js
{ e: 1, v: 1, i: 1, l: 1 }
```

---

### Step 3: Compare Frequencies

Iterate over keys in `freq1`:

* e → 1 === 1 ✅
* v → 1 === 1 ✅
* i → 1 === 1 ✅
* l → 1 === 1 ✅

✅ All match → return `true`

---

## 🧪 Dry Run #2: `isAnagram("anagram", "grammar")`

### Step 1: Length Check

* `"anagram".length === 7`
* `"grammar".length === 7` ✅ Pass

---

### Step 2: Build Frequency Maps

| i | str1\[i] | freq1                            | str2\[i] | freq2                      |
| - | -------- | -------------------------------- | -------- | -------------------------- |
| 0 | a        | { a: 1 }                         | g        | { g: 1 }                   |
| 1 | n        | { a: 1, n: 1 }                   | r        | { g: 1, r: 1 }             |
| 2 | a        | { a: 2, n: 1 }                   | a        | { g: 1, r: 1, a: 1 }       |
| 3 | g        | { a: 2, n: 1, g: 1 }             | m        | { g: 1, r: 1, a: 1, m: 1 } |
| 4 | r        | { a: 2, n: 1, g: 1, r: 1 }       | m        | { g: 1, r: 1, a: 1, m: 2 } |
| 5 | a        | { a: 3, n: 1, g: 1, r: 1 }       | a        | { g: 1, r: 1, a: 2, m: 2 } |
| 6 | m        | { a: 3, n: 1, g: 1, r: 1, m: 1 } | r        | { g: 1, r: 2, a: 2, m: 2 } |

---

### Step 3: Compare Frequencies

* a → 3 === 2 ❌ mismatch

⛔ return `false`

---

## ✅ Final Output:

```js
console.log(isAnagram("evil", "vile"));     // true
console.log(isAnagram("anagram", "grammar")); // false
```

---


### Here’s how to check if a **string contains only digits**, only **alphabets**, or **mixed content** — using both **built-in** and **manual** methods.

---

## ✅ 1. **With Built-in Methods (Regex)**

```js
function checkContentType(str) {
  if (/^[0-9]+$/.test(str)) return "Only digits";
  if (/^[a-zA-Z]+$/.test(str)) return "Only alphabets";
  return "Mixed content";
}

console.log(checkContentType("12345"));     // Only digits
console.log(checkContentType("Hello"));     // Only alphabets
console.log(checkContentType("Hello123"));  // Mixed content
```

---

## 🔧 2. **Without Using Built-in Regex**

```js
function checkContentType(str) {
  let onlyDigits = true;
  let onlyAlphabets = true;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const code = ch.charCodeAt(0);

    if (code >= 48 && code <= 57) {
      onlyAlphabets = false; // it's a digit
    } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      onlyDigits = false; // it's an alphabet
    } else {
      return "Mixed content";
    }
  }

  if (onlyDigits) return "Only digits";
  if (onlyAlphabets) return "Only alphabets";
  return "Mixed content";
}

console.log(checkContentType("4567"));      // Only digits
console.log(checkContentType("Test"));      // Only alphabets
console.log(checkContentType("abc123"));    // Mixed content
```

---

### Here’s how to **count the number of vowels and consonants** in a string — both with and without using built-in helpers like `.toLowerCase()` and `.includes()`.

---

## ✅ 1. **With Built-in Methods**

```js
function countVowelsAndConsonants(str) {
  const vowels = "aeiou";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

console.log(countVowelsAndConsonants("Hello World")); 
// Output: { vowels: 3, consonants: 7 }
```

---

## 🔧 2. **Without Using Built-in Methods**

```js
function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    let code = ch.charCodeAt(0);

    if (code >= 97 && code <= 122) { // a-z
      if (
        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'
      ) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}

console.log(countVowelsAndConsonants("Education")); 
// Output: { vowels: 5, consonants: 4 }
```

---

### Here’s how to **capitalize the first letter of each word** in a sentence — both using and avoiding built-in methods.

---

## ✅ 1. **With Built-in Methods**

```js
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeWords("hello world from javascript"));
// Output: "Hello World From Javascript"
```

---

## 🔧 2. **Without Using Built-in Methods**

```js
function capitalizeWords(sentence) {
  let result = '';
  let capitalizeNext = true;

  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];

    if (capitalizeNext && ch !== ' ') {
      // Convert to uppercase manually
      let code = ch.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        ch = String.fromCharCode(code - 32); // a-z to A-Z
      }
      capitalizeNext = false;
    } else if (ch === ' ') {
      capitalizeNext = true;
    }

    result += ch;
  }

  return result;
}

console.log(capitalizeWords("hello world from javascript"));
// Output: "Hello World From Javascript"
```

---

## 🔢 **What is Factorial?**

> The factorial of a number `n` is:
> `n! = n × (n-1) × (n-2) × ... × 1`

Example:
`5! = 5 × 4 × 3 × 2 × 1 = 120`

---

## ✅ 1. **Using Iteration (Loop)**

```js
function factorialIterative(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialIterative(5)); // Output: 120
```

---

## 🔁 2. **Using Recursion**

```js
function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // Output: 120
```

---

Absolutely! That’s a great method for generating the **entire Fibonacci sequence up to the nth term**.

Here's the complete list of approaches including yours:

---

## 🔢 **Fibonacci Sequence in JavaScript**

---

### ✅ 1. **Iterative (Return Nth Term Only)**

```js
function fibonacciIterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

console.log(fibonacciIterative(6)); // Output: 8
```

---

### 🔁 2. **Recursive (Inefficient for large n)**

```js
function fibonacciRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6)); // Output: 8
```

---

### ⚡ 3. **Recursive with Memoization (Efficient)**

```js
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(50)); // Output: 12586269025
```

---

### 📃 4. **Generate Full Fibonacci Series (Your Version)**

```js
function fibonacciSeries(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSeries(8)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

---

