// const records: Customers = [
//    { id: 10, name: 'Luca',     city: 'Milan',    country: 'Italy'  },
//    { id: 20, name: 'Mario',    city: 'Rome',     country: 'Italy'  },
//    { id: 30, name: 'Anna',     city: 'New York', country: 'USA'    },
//    { id: 40, name: 'Stefano',  city: 'Boston',   country: 'USA'    },
//    { id: 50, name: 'Gloria',   city: 'Paris',    country: 'France' },
//    { id: 60, name: 'Giuseppe', city: 'Rome',     country: 'Italy'  },
//  ] 
 
//  create a function that group the data on a specified field. 
 
//  # Example 1: groupCustomersBy(records, 'country') result = 
//  {
//     'Italy':  [ 10, 20, 60 ],
//     'USA':    [ 30, 40 ],
//     'France': [ 50 ],
//  }
 
//   # Example 2: groupCustomersBy(records, 'city') result = {
//     'Milan':    [ 10 ],
//     'Rome':     [ 20, 60 ],
//     'New York': [ 30 ],
//     'Boston':   [ 40 ],
//     'Paris':    [ 50 ]
//  } 

//  TODO: create the groupCustomersBy function as requested and model/type all the elements
//  in typescript (the records, the function params/result type)
 
type Customer =   {
  id: number, 
  name: string,
  city: string,    
  country: string 
}

type Customers =  Customer[]

type Res =   {
 [key: string]: number[];
}

const data : Customers = [
 { id: 10, name: 'Luca',     city: 'Milan',    country: 'Italy'  },
 { id: 20, name: 'Mario',    city: 'Rome',     country: 'Italy'  },
 { id: 30, name: 'Anna',     city: 'New York', country: 'USA'    },
 { id: 40, name: 'Stefano',  city: 'Boston',   country: 'USA'    },
 { id: 50, name: 'Gloria',   city: 'Paris',    country: 'France' },
 { id: 60, name: 'Giuseppe', city: 'Rome',     country: 'Italy'  },
] 

const group = (customers: Customers, field: keyof Customer) : Res =>  {
  const obj = {} 
  customers.forEach(e => obj[e[field]] = [] )
  customers.forEach(e => obj[e[field]].push(e.id) )
  return obj
} 

console.log(group(data, 'country'))
console.log(group(data, 'city'))