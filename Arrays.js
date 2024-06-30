//on which index element is present 

//const arr=[1,2,3,4,"hello"];
const func=(target)=>{
for(let i=0; i<arr.length;  i++){
    if(arr[i]==target
    )
    console.log(i)
}
}


//if element present in the arr
const findelement=(target)=>
    {
        for(let i=0; i<arr.length; i ++){
        if(arr[i]==target){
            return console.log(true)
        }
    }
    return false;
    }

//check it two arry are equal are not


 const isArrayEqual=(arr1,arr2)=>
    {
        if(arr1.length!==arr2.length){
            return false;
        }
for(let i=0; i<arr1.length; i++){
    if(arr1[i]!==arr2[i]){
        return false;
    }
}
return true;

    }
    // console.log(isArrayEqual([1,2,3,4],[1,2,3,]))



//sorting array in ascneding and descending orders
const arr=[2,3,5,5,6,1,7,3,4]
arr.sort()
arr.reverse()

// console.log(arr)



//filter method

var arr1=[1,2,3,4,5,6,7,8,9]

var filterarr=arr1.filter((ele)=>{
    return ele<3
})
console.log(filterarr)


//map method



