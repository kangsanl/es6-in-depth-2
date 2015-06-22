
describe('iterators', () => {

  it('should iterate an array', () => {

    let arr = [1, 2, 3, 4];
    let vals = [];

    // use ES6 iterator to make the test pass

    for (let val of arr) {
      vals.push(val);
    }

    expect(vals).toEqual([1, 2, 3, 4]);
  });

  it('should iterate a string', () => {

    let myStr = 'Hello';

    // use ES6 iterator to make the test pass
    function stringIterator(str) {
      let chrs = [];
      for (let chr of myStr) {
        chrs.push(chr);
      }
      return chrs;

      // xtra credit for the spread operator
      //return [...str]
    }

    // implement stringIterator() to make the test pass

    expect(stringIterator(myStr)).toEqual(['H', 'e', 'l', 'l', 'o']);
  });

  it('should create a custom iterator', () => {

    // write an iterator for mordor.orcs to make the tests pass

    let mordor = {
      index: 0,

      orcs: ['Azog', 'Gorbag', 'Ugluk'],

      [Symbol.iterator]() {
        return this;
      },
      next() {
        let ret= { value: undefined, done: true };

        if (this.index < this.orcs.length) {
          ret.value = this.orcs[this.index];
          ret.done = false;
          this.index++;
        }
        return ret;
      }
    };

    // implement [Symbol.iterator]() on object morder to make the test pass

    let orcIterator = mordor[Symbol.iterator]();

    expect(orcIterator.next()).toEqual({value: 'Azog', done: false});
    expect(orcIterator.next()).toEqual({value: 'Gorbag', done: false});
    expect(orcIterator.next()).toEqual({value: 'Ugluk', done: false});
    expect(orcIterator.next()).toEqual({value: undefined, done: true});
  });

  it('should produce a fibonacci sequence', () => {

    // implement an iterator on fibonacci to makes the test pass
    let fibonacci = {
      prev: 0,
      curr: 1,
      swap: null,
      [Symbol.iterator]() {
        return this;
      },
      next() {
        this.swap = this.prev;
        this.prev = this.curr;
        this.curr = this.swap + this.curr;
        return { value: this.swap, done: false };
      }
    };

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

  it('creates a combinator by combining iterators', () => {

    // write a combinator function 'take' that iterates over the first n elements of an iterator

    function take(n, iterable) {
      let iterator = iterable[Symbol.iterator]();

      return {
        [Symbol.iterator]() {
          return this;
        },
        next() {
          if (n > 0) {
            n--;
            return iterator.next();
          } else {
            return { done: true };
          }

        }
      }
    }

    let arr = ['a', 'b', 'c', 'd', 'e'];
    expect([...take(3, arr)]).toEqual(['a', 'b', 'c']);
  });

  it('creates a functional filter chain', () => {

    // write two functions that return iterators, byDept and bySalary cap, to pass the tests
    function byDept(dept, iterable) {
      let iterator = iterable[Symbol.iterator]();

      return {
        [Symbol.iterator]() {
          return this;
        },
        next() {
          let entry = iterator.next();
          if (entry.done) {
            return { done: true };
          }
          while(entry.value && entry.value.dept !== dept) {
            entry = iterator.next();
          }
          return entry;
        }
      }
    }

    function bySalaryCap(cap, iterable) {
      let iterator = iterable[Symbol.iterator]();

      return {
        [Symbol.iterator]() {
          return this;
        },
        next() {
          let entry = iterator.next();
          if (entry.done) {
            return { done: true };
          }
          while(entry.value && entry.value.salary > cap) {
            entry = iterator.next();
          }
          return entry;
        }
      }
    }

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