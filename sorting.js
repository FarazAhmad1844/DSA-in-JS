const arr = [-1, 2, 33, 4, -55, 6, 7, 87, 9];
arr.sort((a, b) => a - b);
//sorting by inbuilt function
//takes a calback funtion
// a-b for ascendign and a-b for decending

// Sort a String
// we can't use inbuilt fun for strings so

const string = "Faraz Ahmad";

console.log(string.split("").sort().join());

///Types of Sorting

//Bubble Sort

const array = [10, 4, 5, 6, 7, 2, 3, 9, 1, 8];

const bubblesort = (array) => {
  let swapped;
  do {
    swapped = false;

    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }

    }
  } while (swapped);
  return array;
};

console.log(bubblesort(array));
