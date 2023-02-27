function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let k = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] > k) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = k;
    }
    return arr;
}
// Running with this array [15, 27, 2, 66, 101, 5, 3,17,83]

console.log(insertionSort([15, 27, 2, 66, 101, 5, 3,17,83]));