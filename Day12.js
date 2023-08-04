function allPairs(array, targetValue) {

    array = array.sort((a, b) => a - b);
    newarray = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) == targetValue) {
                newone=[array[i],array[j]];
                newarray.push(newone);
                array.splice(j,1);
            }
        }
    }
    return newarray;
}
console.log(allPairs([4, 5, 1, 3, 6, 8], 9))