

const a: readonly [string, number]= ['bau', 9] 

type Obj = {
  key1: number;
  key2:  number;
}

const myObj : Obj = {
  key1: 1,
  key2: 2,
}

const myConst : keyof Obj = 'key1'

// 2 sintaxes, same result
type myObj2 = {
   [key: string]: string
}

type myObj3 = Record<string, string>

const freeNpropObj2 : myObj2 = {
  ciao: 'buz',
  miao: 'qwerty',
  bau: 'fizz',
}


const freeNpropObj3 : myObj3 = {
  ciao: 'buz',
  miao: 'qwerty',
  bau: 'fizz',
}

const holdOn = () => setTimeout(() => null, 2000)

const p = new Promise((res, rej) => {
  holdOn();
  res('done')
}) 

const doAfterProm = async () => {
  const res = await p
  console.log(res)
  console.log('promise awaited')
}

doAfterProm()

p.then(r => console.log('this is what i log after the promise'))

console.log('here what to log sync')

