
describe('generators', () => {

  it('produces a simple array', () => {

    function* arrayGenerator() {
      yield 1;
      yield 2;
      yield 3;
    }

    let arr = [...arrayGenerator()];

    expect(arr).toEqual([1, 2, 3]);
  });

  it('produces a fibonacci sequence', () => {

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

    // solution 2 with array destructuring
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
});