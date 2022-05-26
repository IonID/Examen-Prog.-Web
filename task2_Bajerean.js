let a = prompt("Introduceti un numar:")
    let i = 0
    const array = []

    for (i = 0; i < a; i++) {
    array.push(i)
}

console.log("Tiparirea in consola prin for:")
    for (i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log("Tiparirea in consola prin while:")
    i = 0
    while (i != a) {
    console.log(array[i])
    i++
}

console.log("Tiparirea in consola prin do..while:")
    i = 0
    do {
        console.log(array[i])
        i++
} while (i != a)

console.log("Tiparirea in consola prin for..in:")
    for (i in array) {
        console.log(array[i])
}

console.log("Tiparirea in consola prin for..of:")
    for (i of array) {
        console.log(i)
}

console.log("Tiparirea in consola prin forEach:")
array.forEach(tiparire_forEach)

function tiparire_forEach(item, index, array) {
    console.log(array[index])
}

console.log("Tiparirea in consola prin map:")
const map_array = array.map(tiparire_map)

function tiparire_map(value, index, array) {
    console.log(array[index])
}



