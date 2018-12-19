const test1 = [2,4,6,8,10];


const binarySearch = (arr, el) => {
    let center = Math.ceil(arr.length/2 -1);

    if(arr[center] >=el) {
        for(let i = center; i > -1; i--){
            // console.log(i);
            if(arr[i] === el) {
                return i;
            }
        }
        return -1;
    }else if(arr[center] <= el) {
        // console.log(i);
        console.log('hello');
        for(let i = center; i < arr.length; i++){
            // console.log(i);
            console.log('hello');
            // if(i < 10){console.log(i)};
            if(arr[i] === el){
                console.log('hello');
                return i;
            }

        }
        return -1;
    }
}

console.log(binarySearch(test1, 4));
console.log(binarySearch(test1, 10));