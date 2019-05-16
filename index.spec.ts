import conditionalArray from './index'


describe('The conditionalArray function', () => {

  it('returns the array returned by the callback function', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 'a', [], {foo: true}, false, null, undefined]
    expect(conditionalArray(() => arr1)).toEqual(arr1)
    expect(conditionalArray(() => arr2)).toEqual(arr2)
  })

  it('calls the callback with a function', () => {
    const cb = jest.fn().mockReturnValue([])
    conditionalArray(cb)
    expect(cb).toHaveBeenCalledTimes(1)
    expect(cb).toHaveBeenCalledWith(expect.any(Function))
  })

  it('includes items in the array if the first parameter to addIf is true and excludes them if false', () => {
    expect(conditionalArray(addIf => [
      addIf(false, 5),
      addIf(true, 'a'),
      'b',
      addIf(true, 'c'),
      addIf(false, 'd'),
    ]))
      .toEqual(['a', 'b', 'c'])
  })

  it('if the condition to addIf is false and a third argument is provided, that argument will be added to the array', () => {
    expect(conditionalArray(addIf => [
      addIf(false, 5, 1),
      addIf(true, 'a'),
      'b',
      addIf(true, 'c'),
      addIf(false, 'd', 2),
    ]))
      .toEqual([1, 'a', 'b', 'c', 2])
  })

})
