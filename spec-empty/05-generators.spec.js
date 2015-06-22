let fs = require('fs');

describe('generators', () => {

  xit('produces a simple array', () => {

    // implement arrayGenerator to make the test pass

    expect([...arrayGenerator()]).toEqual([1, 2, 3]);
  });

  xit('produces a fibonacci sequence', () => {

    // write a generator "fibonacci" to make the test pass

    let fibArray = [];

    for (let n of fibonacci()) {
      if (n > 13) {
        break;
      }
      fibArray.push(n);
    }

    expect(fibArray).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  xit('implements recursive yield', () => {

    function* bar() {
      yield 'a';
      yield 'b';
    }

    // implement "foo" generator to make the test pass

    expect([...foo()]).toEqual(['a', 'b', 'c', 'd']);
  });

  xit('is a data consumer', () => {

    let arr = [];

    // implement a generator "consumer" to make the test pass

    let consumerObj = consumer();
    consumerObj.next(); //initialize the consumer
    consumerObj.next(1);
    consumerObj.next(2);
    consumerObj.next(3);

    expect(arr).toEqual([1, 2, 3]);
  });

  xit('sends and receives data', () => {

    // implement a generator "foo" to make the test pass

    var it = foo(1);

    // note: not sending anything into `next()` here
    expect(it.next()).toEqual({ value: 2, done: false });
    expect(it.next(2)).toEqual({ value: 3, done: false });
    expect(it.next(3)).toEqual({ value: 6, done: true });
  });

});