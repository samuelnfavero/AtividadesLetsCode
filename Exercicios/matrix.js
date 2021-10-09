const pessoas = [ { name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 }, { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 } ]

function makeStrings(arr) {
    return arr.map(
        (people) => people.age > 18
        ? people.name + 'pode assistir The Matrix'
        : people.name + 'não pode assistir The Matrix'

        
    )
}
