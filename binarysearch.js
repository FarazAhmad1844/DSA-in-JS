// // binary Search Iterative
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const bs = (arr, target) => {

//     let start = 0;
//     let end = arr.length - 1; 
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         }
//         else if (arr[mid] > target) {
//             end = mid - 1;
//         }
//         else {
//             start = mid + 1;
//         }

//     }
//     return -1;
// }

// // console.log(bs([1,2,3,4,5,6,7,8], 1))


// Binary Search Recursive

const binarySearchRecu = (arr, target) => {
    return searchUntil(arr, target, 0, arr.length - 1);
}

const searchUntil = (arr, target, start, end) => {
    if (start > end) 
        return -1;

    let mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) {
        return mid;
    }
    else if (arr[mid] > target) {
        return searchUntil(arr, target, start, mid - 1);
    }
    else {
        return searchUntil(arr, target, mid + 1, end);
    }
}

console.log(binarySearchRecu([1, 2, 3, 4, 5, 6, 7, 8], 3)); 