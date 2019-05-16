type Narrowable = string | number | boolean | undefined | null | void | {};

const nin = Symbol('nin')

type AddIf = <T, U>(condition: ((x: T) => boolean) | boolean, itemIfTrue: T, itemIfFalse?: U | typeof nin) => T | U | typeof nin
const addIf: AddIf = (condition, itemIfTrue, itemIfFalse = nin) => {
  return (typeof condition === "function" ? condition(itemIfTrue) : condition) ? itemIfTrue : itemIfFalse
}

const conditionalArray = <T extends Narrowable>(cb: (addIf: AddIf) => Array<T | typeof nin>) =>
  cb(addIf).filter((item): item is T => item !== nin)

export default conditionalArray
