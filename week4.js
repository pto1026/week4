function flatten(arr) {
    // array = [[1, 2, 3], [1, [2, 4]], []]
    // should be [1, 2, 3, 1, 2, 4]
    const answer = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            flatten(element).forEach(x => {
                answer.push(x);
            })
        } else {
            // base case = just a number not an array
            answer.push(element);
        }
    })

    return answer;
}

function capitalizeWords(arr, index = 0) {
    if (index === arr.length) {
        return;
    }
    arr[index] = arr[index].toUpperCase();
    capitalizeWords(arr, ++index);
    return arr;
}

function factorial(n) {
    // if factorial of 7 is, 7 * 6 * ..
    if (n <= 1) {
        return n;
    }
    return n * factorial(n-1);
}

function collectStrings(obj, current = []) {
    if (Object.keys(obj).length === 0) {
        return;
    }
    const keys = Object.keys(obj);
    if (typeof obj[keys[0]] === 'string') {
        current.push(obj[keys[0]]);
    }
    delete obj[keys[0]];
    collectStrings(obj, current);
    return current;
}

function swap(arr, xp, yp) {
    const temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function bubbleSortWithNestedForLoop(arr, n = arr.length) {
    let i, j;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    }
    return arr;
}

function bubbleSortByAge(arr, n = arr.length) {
    let i, j;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++) {
            if (arr[j]['age'].get('age') > arr[j+1]['age'].get('age')) swap(arr, j, j+1);
        }
    }
    return arr;
}

function bubbleSortAgeOptimized(arr, n = arr.length) {
    let i, j;
    let swapped;
    for (i = 0; i < n-1; i++) {
        swapped = false;
        for (j = 0; j < n-i-1; j++) {
            if (arr[j]['age'].get('age') > arr[j+1]['age'].get('age')) {
                swap(arr, j, j+1);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

function bubbleSortRecursive(arr, n = arr.length) {
    if (n === 0 || n === 1) {
        return;
    }

    let i;
    for (i = 0; i < n-1; i++) {
        if (arr[i] > arr[i+1]) {
            swap(arr, i, i+1);
        }
    }
    bubbleSortRecursive(arr, n-1);
    return arr;
}

module.exports = {
    flatten,
    capitalizeWords,
    factorial,
    collectStrings,
    bubbleSortWithNestedForLoop,
    bubbleSortByAge,
    bubbleSortAgeOptimized,
    bubbleSortRecursive
};