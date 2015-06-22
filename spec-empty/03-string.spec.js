
describe('string', () => {

  xit('should repeat a string', () => {

    // implement a function repeatString to make the test pass

    expect(repeatString('foo', 3)).toBe('foofoofoo');
  });

  xit('should check if a string starts with a given string', () => {

    // implement a function checkStart that uses ES6 methods to inspect the start of a string

    expect(checkStart('foobar', 'foo')).toBe(true);
  });

  xit('should check if a string ends with a given string', () => {

    // implement a function checkEnd that uses ES6 methods to inspect the end of a string

    expect(checkEnd('foobar', 'bar')).toBe(true);
  });

  xit('should check if a string includes another string', () => {

    // implement a function checkIncludes that uses ES6 methods to inspect the end of a string

    expect(checkEnd('foobar', 'bar')).toBe(true);
  });
});