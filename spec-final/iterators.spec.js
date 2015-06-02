
describe('iterators', () => {

  it('should create a custom iterator', () => {

    let orcs = ['Azog', 'Gorbag', 'Ugluk'];

    let mordor = {

      location: 'Middle Earth',
      chiefExecutiveOfficer: 'Sauron',
      vicePresident: 'Saruman',
      [Symbol.iterator]() {
        let index = 0;

        let iterator = {
          next() {
            if (index < orcs.length) {
              let isDone = index === orcs.length - 1;
              let ret= { value: orcs[index], done: isDone };
              index++;
              return ret;
            }
          }
        };

        return iterator;
      }
    };

    let orcIterator = mordor[Symbol.iterator]();

    expect(orcIterator.next()).toEqual({value: 'Azog', done: false});
    expect(orcIterator.next()).toEqual({value: 'Gorbag', done: false});
    expect(orcIterator.next()).toEqual({value: 'Ugluk', done: true});
  });

  it('creates a combinator by combining iterators', () => {

    // write a combinator function 'take' iterates over n elements of an iterator

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
    let result = [];

    for(let x of take(3, arr)) {
      result.push(x);
    }

    // extra credit, use the spread operator for same result?
    //let result = [...take(3, arr)];

    expect(result).toEqual(['a', 'b', 'c']);
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