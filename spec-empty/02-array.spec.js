
describe('array', () => {

  xit('should find an element in an array', () => {
    let arr = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'baz' }
    ];

    // use ES6 array methods to get the element with name 'bar'

    let result;

    expect(result).toEqual(arr[1]);
  });

  xit('should find the index of an array element', () => {
    let arr = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'baz' }
    ];

    // use ES6 array methods to get the index of element with name 'baz'

    let result;

    expect(result).toBe(2);

  });

  xit('should create an array from an array-like object', () => {

    // implement myFunc to return a proper array using ES6 array methods

    let result = myFunc(1, 2, 3, 4);
    expect(result instanceof Array).toBe(true);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  xit('should transform the source entity', () => {
    let arrLike = {
      length: 3,
      0: 'foo',
      1: 'bar',
      2: 'baz'
    };

    // use ES6 array methods to make the test pass
    let arr;

    expect(arr).toEqual(['FOO', 'BAR', 'BAZ']);
  });

  xit('should copy elements within an array', () => {

    let arr = [1, 2, 3, 4, 5];

    // copy elements in place to make the test pass

    expect(arr).toEqual([4, 5, 3, 4, 5]);
  });

  xit('should copy elements within an array 2', () => {

    let arr = [1, 2, 3, 4, 5];

    // copy elements in place to make the test pass

    expect(arr).toEqual([4, 2, 3, 4, 5]);
  });

  xit('should fill an array with values', () => {

    let arr = new Array(4);

    // use ES6 array methods to make the test pass

    expect(arr).toEqual([1, 1, 1, 1]);
  });

  xit('should partially fill an array with values', () => {
    let arr = new Array(null, null, null, null);

    // use ES6 array methods to make the test pass

    expect(arr).toEqual([null, 42, 42, null]);
  });


  xit('should get the keys of an array', () => {

    // implement a function getKeys that returns the keys of an array as an array

    expect(getKeys([1, 2, 3])).toEqual([0, 1, 2]);
  });

  xit('should get the values of an array', () => {

    // implement a function getValues that returns the values of an array as an array

   expect(getValues([1, 2, 3])).toEqual([1, 2, 3]);
  });

  xit('should get the entries of an array', () => {

    // implement a function getEntries that returns the entries of an array as an array

    expect(getEntries([1, 2, 3])).toEqual([ [0, 1], [1, 2], [2,3] ]);
  });
});