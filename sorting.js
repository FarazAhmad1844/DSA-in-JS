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
        array[i] = array[i + 1]; // [arr[i],arr[i+1]]= [arr[i+1],arr[i]];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

// console.log(bubblesort(array));

// Selection Sort

const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minindex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minindex]) {
        minindex = j;
      }
      if (minindex != i) {
        [arr[i], arr[minindex]] = [arr[minindex], arr[i]];
      }
    }
  }
  return arr;
};

// console.log(SelectionSort([3,2,1,5,43,7]))

//Insertion Sort

const insertionsort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

// console.log(insertionsort([3, 2, 1, 5, 43, 7]));