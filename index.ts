type AddIf = <T, U>(condition: ((x: T) => boolean) | boolean, itemIfTrue: T, itemIfFalse?: U | typeof nin) => T | U | typeof nin
type WidenLiterals<T> =
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T

const nin = Symbol('nin')

const addIf: AddIf = (condition, itemIfTrue, itemIfFalse = nin) =>
  (typeof condition === "function" ? condition(itemIfTrue) : condition) ? itemIfTrue : itemIfFalse

export = <T>(cb: (addIf: AddIf) => Array<T | typeof nin>) =>
  cb(addIf).filter((item): item is T => item !== nin)  as Array<WidenLiterals<T>>
