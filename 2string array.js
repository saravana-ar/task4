const convertToTitleCaps = (arr) => {
    return arr.map((str) =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };
  
  const titleCapsArray = convertToTitleCaps(["hello", "world", "javascript"]);
  console.log(titleCapsArray);
  