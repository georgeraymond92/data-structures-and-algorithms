
const binarySearch = (arr, el) => {
    let center = Math.ceil(arr.length/2 -1);

    if(arr[center] >=el) {
        for(let i = center; i > -1; i--){
            if(arr[i] === el) {
                return i;
            }
        }
        return -1;
    }else if(arr[center] <= el) {

        console.log('hello');
        for(let i = center; i < arr.length; i++){
            if(arr[i] === el){
                console.log('hello');
                return i;
            }

        }
        return -1;
    }
}
module.exports = binarySearch;