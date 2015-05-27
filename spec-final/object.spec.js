

describe('object.assign', () => {

  it('clones an object', () => {
    let obj = {
      foo: 'bar'
    };

    // clone obj with Object.assign

    let copy = Object.assign({}, obj);

    expect(copy).toEqual(obj);

  });

  it('extends an object', () => {
    let obj1 = {
      foo: 'bar'
    };

    let obj2 = {
      bar: 'baz'
    };

    // add obj2's props to obj1 with Object.assign()

    Object.assign(obj1, obj2);

    expect(obj1.bar).toBeDefined();
    expect(obj1.bar).toBe('baz');
  });

  it('cannot copy inherit and non-enumerable properties', () => {

    // create an object three properties:
    // 1 - foo: an inherit property
    // 2 - bar: a non-enumerable property
    // 3 - baz: an enumerable property

    let obj = Object.create({ foo: 'bar' }, { // foo is an inherit property
      bar: {
        value: 'baz' // non-enumerable
      },
      baz: {
        value: 'bim',
        enumerable: true
      }
    });

    let clone = Object.assign({}, obj);

    expect(clone.foo).toBeUndefined();
    expect(clone.bar).toBeUndefined();
    expect(clone.baz).toBeDefined();
    expect(clone).toEqual({ baz: 'bim'});

  });

  it('wraps primitives', () => {
    // ???
  });

  it('copies an accessor\'s value', () => {

    // clone an object with a getter

    let obj = {
      foo: 'bar',
      get baz() {
        return 'bim';
      }
    };

    let clone = Object.assign({}, obj);

    expect(clone.baz).toBe('bim');
    expect(clone).toEqual({ foo: 'bar', baz: 'bim' });
  });

  it('interrupts copy on exception', () => {

    let obj = Object.defineProperty({}, 'foo', {
      value: 1,
      writeable: false
    }); // obj.foo is a read-only property

    Object.assign(obj, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });

    expect(obj.bar).toBeDefined();
    expect(obj.foo2).toBeDefined();
    expect(obj.foo).toBe(1); //exception is thrown for read-only property
    //expect(obj.foo3).toBeUndefined(); // transpiler doesn't stop copying
    //expect(obj.baz).toBeUndefined(); // transpiler doesn't stop copying

  });
});

describe('object.is', () => {

  it('checks equality of NaN', () => {

    let isSame = Object.is(NaN, NaN);

    expect(isSame).toBe(true);
  });

  it('checks equality of 0 and -0', () => {

    let isSame = Object.is(0, -0);

    expect(isSame).toBe(false);
  });
});