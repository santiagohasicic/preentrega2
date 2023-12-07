let nombre, pass

function login() {
    do {
        alert("Bienvenido!, Hace click en aceptar para registrarte.")
        nombreGuardado = prompt("Ingresa tu nombre de usuario").toLowerCase()
        passGuardado= prompt("Ingresa una contraseña")
        alert("Perfecto! ahora por favor hace click en aceptar para iniciar sesion.")
        nombreValidacion = prompt("Ingrese su nombre").toLowerCase()
        passValidacion = prompt("Ingrese la contraseña")
        if (nombreValidacion !== nombreGuardado || passValidacion !== passGuardado){
            alert("Nombre o contraseña incorrecta, vuelve a intentar")
        }
    } while (nombreValidacion !== nombreGuardado || passValidacion !== passGuardado)
    alert("Logueado correctamente")
}

function mostrarMenu() {
    return Number(prompt("Escriba 1 para calcular el promedio, 2 para realizar una operación y 3 para salir del sistema"))
}

function realizarOperacion() {
    alert("Elección 2, a realizar una operación")
    let num1 = Number(prompt("Ingrese el primer número"))
    let num2 = Number(prompt("Ingrese el segundo número"))
    let operacion = prompt("Ingrese la operación (+, -, *, /)")

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.")
        return
    }

    switch (operacion) {
        case '+':
            alert("Resultado: " + (num1 + num2))
            break
        case '-':
            alert("Resultado: " + (num1 - num2))
            break
        case '*':
            alert("Resultado: " + (num1 * num2))
            break
        case '/':
            if (num2 !== 0) {
                alert("Resultado: " + (num1 / num2))
            } else {
                alert("No se puede dividir por cero")
            }
            break
        default:
            alert("Operación no válida")
            break
    }
}

function calcularPromedio() {
    alert("Elección 1, a calcular promedios")
    let notas
    
    do{
        notas = Number(prompt("Ingrese la cantidad de notas a calcular"))
        if (isNaN(notas) || notas <= 0)
        alert("Ingrese un numero valido y mayor que cero para la cantidad de notas")
} while (isNaN(notas) || notas <= 0)


    let sumador = 0
    for (let i = 0; i < notas; i++) {
        let nota
        do {
            nota = Number(prompt("Ingresa tu nota Nro " + (i + 1)))
            if (isNaN(nota)) {
                alert("Por favor, ingrese una nota válida.");
            }
        } while (isNaN(nota))
        sumador += nota
    }

    let promedio = sumador / notas;
    alert("El promedio de tus notas" + nombreGuardado + ", es: " + promedio.toFixed(2))
}

login();

let eleccion = mostrarMenu();

while (eleccion !== 3) {
    switch (eleccion) {
        case 1:
            calcularPromedio()
            break
        case 2:
            realizarOperacion()
            break
        default:
            alert("Elección inválida. Por favor, selecciona 1, 2 o 3")
            break
    }

    eleccion = mostrarMenu()
}

alert("Saliendo del sistema!")