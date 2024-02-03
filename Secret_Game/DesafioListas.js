const listaGenerica = [];
const lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

function pushArray() {
    let mensaje = prompt("Escriba lo que desea ingresar al Array: ")
    lenguagesDeProgramacion.push(mensaje)

}

function showArray() {
    for (let index = 0; index < lenguagesDeProgramacion.length; index++) {
        const element = lenguagesDeProgramacion[index];
        console.log(element);
    }
}

function showArrayInverse() {
    for (let index = lenguagesDeProgramacion.length; index >= 0; index--) {
        const element = lenguagesDeProgramacion[index];
        console.log(element);
    }
}

function averageArray(array) {
    let cont = 0
    let prodemio = 0
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        cont = cont+element
        
    }

    promedio = cont/(array.length)

    return promedio
}

function mayorMenor(){


}