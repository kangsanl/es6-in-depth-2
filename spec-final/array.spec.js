
describe('array', () => {

  it('should find an element in an array', () => {
    let arr = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'baz' }
    ];

    // use Array.prototype.find to get the element with name 'bar'

    let result = arr.find(e => e.name === 'bar');

    expect(result).toEqual(arr[1]);
  });

  it('should find the index of an array element', () => {
    let arr = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'baz' }
    ];

    // use Array.prototype.find to get the index of the element with name 'baz'

    let result = arr.findIndex(e => e.name === 'baz');

    expect(result).toBe(2);

  });

  //array.from
  it('should create an array from an array-like object', () => {

    // return a proper array using ES6 array methods

    function myFunc() {
      return Array.from(arguments);
    }

    let result = myFunc(1, 2, 3, 4);
    expect(result instanceof Array).toBe(true);
  });

  //TODO more array.from - maybe need to cover iterable first?
  it('should transform the source entity', () => {
    let arrLike = {
      length: 3,
      0: 'foo',
      1: 'bar',
      2: 'baz'
    };

    // use ES6 array methods to make the test pass
    let arr = Array.from(arrLike, (el) => el.toUpperCase());

    expect(arr).toEqual(['FOO', 'BAR', 'BAZ']);
  });

  //array.of
  it('should create an array from a variable number and type of arguments', () => {

    // constrast with array constructor when a single number arg is passed
    let arr = Array.of(1);

    expect(arr).toEqual([1]);
  });

  //array.copyWithin()
  it('should copy elements within an array', () => {

    let arr = [1, 2, 3, 4, 5];
    arr.copyWithin(0, 3);

    expect(arr).toEqual([4, 5, 3, 4, 5]);
  });

  it('should copy elements within an array 2', () => {

    let arr = [1, 2, 3, 4, 5];
    arr.copyWithin(0, 3, 4);

    expect(arr).toEqual([4, 2, 3, 4, 5]);
  });

  //array.fill
  it('should fill an array with values', () => {
    let a = new Array( 4 );
    a.fill(undefined);

    expect(a).toEqual([undefined, undefined, undefined, undefined]);
  });

  it('should partially fill an array with values', () => {
    let a = new Array(null, null, null, null);

    expect(a).toEqual([null, null, null, null]);

    a.fill(42, 1, 3);

    expect(a).toEqual([null, 42, 42, null]);
  });


  //array.keys
  it('should get the keys of an array', () => {

    // implement a function getKeys that returns the keys of an array as an array
    function getKeys(arr) {
      return [...arr.keys()];
    }

    expect(getKeys([1, 2, 3])).toEqual([0, 1, 2]);
  });

  it('should get the values of an array', () => {

    // implement a function getKeys that returns the keys of an array as an array

    function getValues(arr) {
      return [...arr.values()];
    }

    expect(getValues([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should get the entries of an array', () => {

    // implement a function getKeys that returns the keys of an array as an array
    function getEntries(arr) {
      return [...arr.entries()];
    }

    expect(getEntries([1, 2, 3])).toEqual([ [0, 1], [1, 2], [2,3] ]);
  });



  //Array.prototype[@@iterator]()
});