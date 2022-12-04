const {flatten, capitalizeWords, factorial, collectStrings} = require('./week4.js');
const {bubbleSortWithNestedForLoop, bubbleSortByAge, bubbleSortAgeOptimized, bubbleSortRecursive} = require("./week4.js");
test('should flatten array', () => {
    expect(JSON.stringify(flatten([[1, 2, 3], [1, [2, 4]], []]))).toBe(JSON.stringify([1, 2, 3, 1, 2, 4]));
})

test('should capitalize an array of words', () => {
    expect(JSON.stringify(capitalizeWords(['tony', 'kim']))).toBe(JSON.stringify(['TONY', 'KIM']));
})

describe(`factorial tests`, () => {
    test('should return the factorial of the number', () => {
        expect(factorial(7)).toBe(5040);
    })

    test('should return 0 because factorial of 0 is 0', () => {
        expect(factorial(0)).toBe(0);
    })
})

test(`should return array of every value in the object that is of type string`, () => {
    expect(JSON.stringify(collectStrings({
        a: 'One',
        b: 2,
        c: 'Three',
        d: '4'
    }))).toBe(JSON.stringify(['One', 'Three', '4']));
})

describe(`tests for bubble sort`, () => {
    test(`should sort array of numbers`, () => {
        expect(JSON.stringify(bubbleSortWithNestedForLoop([5, 1, 4, 2, 8]))).toBe(JSON.stringify([1, 2, 4, 5, 8]));
    })

    test(`should sort array of numbers with a recursive bubble sort`, () => {
        expect(JSON.stringify(bubbleSortRecursive([5, 1, 4, 2, 8]))).toBe(JSON.stringify([1, 2, 4, 5, 8]));
    })

    const data = [
        {
            name: 'John Smith',
            age: new Map([['age', 88]]),
            favoriteMovie: [
                {
                    title: 'Hulk',
                    genre: 'action',
                    rating: 6
                }
            ]
        },
        {
            name: 'Tony Kim',
            age: new Map([['age', 33]]),
            favoriteMovie: [
                {
                    title: 'Top Gun',
                    genre: 'action',
                    rating: 10
                }
            ]
        },
        {
            name: 'John Smith',
            age: new Map([['age', 15]]),
            favoriteMovie: [
                {
                    title: 'Saw',
                    genre: 'horror',
                    rating: 8
                }
            ]
        }
    ]
    const sorted = [
        {
            name: 'John Smith',
            age: new Map([['age', 15]]),
            favoriteMovie: [
                {
                    title: 'Saw',
                    genre: 'horror',
                    rating: 8
                }
            ]
        },
        {
            name: 'Tony Kim',
            age: new Map([['age', 33]]),
            favoriteMovie: [
                {
                    title: 'Top Gun',
                    genre: 'action',
                    rating: 10
                }
            ]
        },
        {
            name: 'John Smith',
            age: new Map([['age', 88]]),
            favoriteMovie: [
                {
                    title: 'Hulk',
                    genre: 'action',
                    rating: 6
                }
            ]
        }
    ]

    test(`should sort complex array of objects by age`, () => {
        expect(JSON.stringify(bubbleSortByAge(data))).toBe(JSON.stringify(sorted));
    });

    test(`should sort complex array of objects by age`, () => {
        expect(JSON.stringify(bubbleSortAgeOptimized(data))).toBe(JSON.stringify(sorted));
    })

})
