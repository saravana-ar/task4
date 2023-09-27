const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
  };
  
  const getPalindromes = (arr) => {
    return arr.filter((str) => isPalindrome(str));
  };
  
  const palindromes = getPalindromes(["racecar", "hello", "level", "world"]);
  console.log(palindromes);
  