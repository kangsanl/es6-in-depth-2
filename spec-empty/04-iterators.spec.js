
describe('iterators', () => {

  xit('should iterate an array', () => {

    let arr = [1, 2, 3, 4];

    // implement iterateArray to make the test pass

    expect(iterateArray(arr)).toEqual([
      { value: 1, done: false },
      { value: 2, done: false },
      { value: 3, done: false },
      { value: 4, done: false }
    ]);
  });

  xit('should iterate a string', () => {

    // implement stringIterator() to make the test pass

    expect(stringIterator('Hello')).toEqual(['H', 'e', 'l', 'l', 'o']);
  });

  xit('should create a custom iterator', () => {

    // write an iterator for mordor.orcs to make the tests pass

    let mordor = {
      index: 0,

      orcs: ['Azog', 'Gorbag', 'Ugluk']
    };

    // implement [Symbol.iterator]() on object mordor to make the test pass

    let orcIterator = mordor[Symbol.iterator]();

    expect(orcIterator.next()).toEqual({value: 'Azog', done: false});
    expect(orcIterator.next()).toEqual({value: 'Gorbag', done: false});
    expect(orcIterator.next()).toEqual({value: 'Ugluk', done: false});
    expect(orcIterator.next()).toEqual({value: undefined, done: true});
  });

  xit('should produce a fibonacci sequence', () => {

    // implement the fibonacci object to makes the test pass

    let fibonacci = {};

    function fibonacciIterator() {
      let result = [];
      for (let n of fibonacci) {
        if (n > 13) {
          break;
        }
        result.push(n);
      }
      return result;
    }

    expect(fibonacciIterator()).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  xit('creates a combinator by combining iterators', () => {

    // write a combinator function 'take' that returns an iterator for the first n elements of an iterator argument

    let arr = ['a', 'b', 'c', 'd', 'e'];
    expect([...take(3, arr)]).toEqual(['a', 'b', 'c']);
  });

  xit('creates a functional filter chain', () => {

    // write two functions that return iterators, byDept and bySalary cap, to pass the test

    let employees = [
      { name: 'John Doe', dept: 'IT', salary: 150000 },
      { name: 'Jane Plane', dept: 'IT', salary: 165000 },
      { name: 'Joe Schmoe', dept: 'Accounting', salary: 45000 },
      { name: 'Jim Smith', dept: 'IT', salary: 55000 },
      { name: 'Sue Blue', dept: 'Finance', tenure: 70000 },
      { name: 'June Jones', dept: 'IT', salary: 125000 }
    ];

    let itDept = [...bySalaryCap(125000, byDept('IT', employees))];

    expect(itDept).toEqual([
      { name: 'Jim Smith', dept: 'IT', salary: 55000 },
      { name: 'June Jones', dept: 'IT', salary: 125000 }
    ]);
  });
});