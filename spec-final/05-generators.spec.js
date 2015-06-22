let fs = require('fs');
jest.dontMock('fs');
jest.autoMockOff();

//let FakeTimers = require('../node_modules/jest-cli/src/lib/FakeTimers');

describe('generators', () => {


  it('produces a simple array', () => {

    // write a generator arrayGenerator to make the test pass

    function* arrayGenerator() {
      yield 1;
      yield 2;
      yield 3;
    }

    let arr = [...arrayGenerator()];

    expect(arr).toEqual([1, 2, 3]);
  });

  it('produces a fibonacci sequence', () => {

    // write a generator "fibonacci to make the test pass

    // solution 1
    function* fibonacci() {
      let prev = 0;
      let curr = 1;
      let swap;

      yield prev;
      yield curr;

      while (true) {
        swap = prev;
        prev = curr;
        curr = swap + curr;
        yield curr;
      }
    }

    // solution 2 with array destructuring - extra credit
    //function* fibonacci() {
    //  let [prev, curr] = [0, 1];
    //  yield prev;
    //  yield curr;
    //  for (;;) {
    //    [prev, curr] = [curr, prev + curr];
    //    yield curr;
    //  }
    //}

    let fibArray = [];

    for (n of fibonacci()) {
      if (n > 13) {
        break;
      }
      fibArray.push(n);
    }

    expect(fibArray).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  it('implements recursive yield', () => {

    function* bar() {
      yield 'a';
      yield 'b';
    }

    // implement foo generator to make the test pass

    function* foo() {
      yield 1;
      yield* bar();
      yield 2;
    }

    expect([...foo()]).toEqual([1, 'a', 'b', 2]);
  });

  it('is a data consumer', () => {

    let arr = [];

    function* consumer() {
      arr.push(yield);
      arr.push(yield);
      arr.push(yield);
    }

    let consumerObj = consumer();
    consumerObj.next(); //initialize the consumer
    consumerObj.next(1);
    consumerObj.next(2);
    consumerObj.next(3);

    expect(arr).toEqual([1, 2, 3]);
  });

  it('sends and receives data', () => {

    // TODO: from Kyle Simpson blog post - not sure whether to use this contrived example
    // or write another contrived example ;)
    function* foo(x) {
      var y = 2 * (yield (x + 1));
      var z = yield (y / 3);
      return (x + y + z);
    }

    var it = foo( 5 );

    // note: not sending anything into `next()` here
    expect( it.next() ).toEqual({ value:6, done:false });
    expect( it.next( 12 ) ).toEqual({ value:8, done:false });
    expect( it.next( 13 ) ).toEqual({ value:42, done:true });
  });

  //TODO async generators

  it('does async with sync-like semantics', () => {

    //FakeTimers.prototype.useRealTimers();

    function someAsyncFunction(arg) {
      //console.log(arg);
      fs.readFile(arg, function(err, response) {
        if (err) throw err;
        console.log(response);
        //it.next(response);
      });
      //setTimeout(function () {
      //  console.log('first timeout');
      //  it.next(arg + 1);
      //}, 100);
      //jest.runOnlyPendingTimers();
    }

    //function someAsyncFunction2(arg) {
    //  setTimeout(() => {
    //    it.next(arg + 1);
    //  }, 100);
    //}
    //
    //function* async() {
    //  let result1 = yield someAsyncFunction('../assets/foo.txt');
    //  console.log(result1);
    //
    //  let result2 = yield someAsyncFunction(result1);
    //  console.log(result2);
    //
    //  expect(result2).toBe('Hello World!');
    //  return result2;
    //}
    //
    //let it = async();
    //it.next(); //kick it off

    //someAsyncFunction('assets/foo.txt');
    fs.readFile('assets/foo.txt', function(err, response) {
      if (err) throw err;
      console.log(response);
      //it.next(response);
    });
  });
});