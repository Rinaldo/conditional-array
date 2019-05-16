# conditional-array

> Helper function to create arrays with conditionally included elements

## Installation

```
npm install conditional-array
```

## Usage

#### `conditionalArray(callback)`

Provides a clean syntax for creating an array with conditionally included elements.

#### Example

```typescript
conditionalArray(addIf => [
  addIf(true, 'foo'),
  addIf(true, 'bar'),
  addIf(false, 'baz'),
  addIf(word => word.includes('b'), 'qux'),
  addIf(sentence => sentence.length < 10, 'Some really really long sentence.', 'Too long!'),
  'always included'
])
// returns ['foo', 'bar', 'Too long!', 'always included']
```
```typescript
conditionalArray(addIf => [
  { name: 'Alice', age: 26 },
  addIf(true, { name: 'Bob', age: 24 }),
  addIf(person => person.age >= 21, { name: 'Claire', age: 20 }),
])
// returns [{ name: 'Alice', age: 23 }, { name: 'Bob', age: 34 }]
```

#### Arguments

* [`callback(addIf)`] User defined function that returns an array.

  * [`addIf(condition, itemIfTrue, [itemIfFalse])`] Returns an item or a placeholder value that is removed from the final array.

    * [`condition`] Either a boolean or predicate function. If it is a function it is invoked with `itemIfTrue`.

    * [`itemIfTrue`] The item returned if `condition` is or returns true.

    * [`itemIfFalse`] The item returned if `condition` is or returns false. Defaults to a placeholder value that is removed from the final array.


#### Returns

The array returned by the callback with the specified elements filtered out.

## License

MIT

## Acknowledgements

Thanks to stackoverflow user [jcalz](https://stackoverflow.com/users/2887218/jcalz) for [helping with the typings](https://stackoverflow.com/questions/56140564/typescript-how-to-properly-type-this-conditional-array-function)
