function sortByProperty(arr, property) {
    return arr.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  
  let arrayOfObjects = [
    { name: "John", age: 25 },
    { name: "Anna", age: 30 },
    { name: "Mike", age: 20 }
  ];
  

  let sortedByAge = sortByProperty(arrayOfObjects, "age");
  console.log(sortedByAge);
  
  let sortedByName = sortByProperty(arrayOfObjects, "name");
  console.log(sortedByName);
  