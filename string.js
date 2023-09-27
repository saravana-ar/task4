// Anonymous Function
const convertToTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };
  
  // IIFE
  const titleCapsArray = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  })(["hello", "world", "javascript"]);
  console.log(titleCapsArray);
  
