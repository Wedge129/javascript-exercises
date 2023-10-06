const findTheOldest = function (people) {


    people.map(a => {
        a.age = a.yearOfDeath - a.yearOfBirth;
    });

    console.log(people);


    let oldest=Math.max.apply(Math,people.map(function(o){return o.age;}))   
    console.log(oldest);

    const nameOfOldest = people.filter(getName);

    function getName(item){
        if(oldest == item.age){
            return item.name;
        }
        
    }

    console.log(nameOfOldest);

};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

findTheOldest(people);
// Do not edit below this line
//module.exports = findTheOldest;
