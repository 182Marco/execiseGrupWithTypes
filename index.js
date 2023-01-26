// const records: Customers = [
//    { id: 10, name: 'Luca',     city: 'Milan',    country: 'Italy'  },
//    { id: 20, name: 'Mario',    city: 'Rome',     country: 'Italy'  },
//    { id: 30, name: 'Anna',     city: 'New York', country: 'USA'    },
//    { id: 40, name: 'Stefano',  city: 'Boston',   country: 'USA'    },
//    { id: 50, name: 'Gloria',   city: 'Paris',    country: 'France' },
//    { id: 60, name: 'Giuseppe', city: 'Rome',     country: 'Italy'  },
//  ] 
var clients = [
    { id: 10, name: 'Luca', city: 'Milan', country: 'Italy' },
    { id: 20, name: 'Mario', city: 'Rome', country: 'Italy' },
    { id: 30, name: 'Anna', city: 'New York', country: 'USA' },
    { id: 40, name: 'Stefano', city: 'Boston', country: 'USA' },
    { id: 50, name: 'Gloria', city: 'Paris', country: 'France' },
    { id: 60, name: 'Giuseppe', city: 'Rome', country: 'Italy' },
];
var groupData = function (customers, field) {
    var obj = {};
    customers.forEach(function (e) { return obj[e[field]] = []; });
    customers.forEach(function (e) { return obj[e[field]].push(e.id); });
    return obj;
};
console.log(groupData(clients, 'country'));
console.log(groupData(clients, 'city'));
