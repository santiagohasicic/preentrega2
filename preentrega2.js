let registrosUsuarios = []

const calculadora = {
sumar: (a, b) => a + b,
restar: (a, b) => a - b,
multiplicar: (a, b) => a * b,
dividir: (a, b) => (b !== 0 ? a / b : (alert("No se puede dividir por cero"), null)),
}

function registrarUsuario() {
const nombreUsuario = prompt("Ingrese un nombre de usuario a registrar").toLowerCase()


const usuarioExistente = registrosUsuarios.find((usuario) => usuario.nombre === nombreUsuario)

if (usuarioExistente) {
    alert("El nombre de usuario ya esta en uso. Por favor, elija otro.")
    return
}

const nuevoUsuario = {
    nombre: nombreUsuario,
    pass: prompt("Ingrese una contraseña"),
}

registrosUsuarios.push(nuevoUsuario)
alert("Usuario registrado correctamente")
}

function login() {
let intentos = 3

while (intentos > 0) {
    const nombreUsuario = prompt("Ingrese su nombre de usuario para logear").toLowerCase()
    const passUsuario = prompt("Ingrese la contraseña")

    const usuarioEncontrado = registrosUsuarios.find(
    (usuario) => usuario.nombre === nombreUsuario && usuario.pass === passUsuario)

    if (usuarioEncontrado) {
    alert("Logueado correctamente")
    return
    } else {
    alert(`Nombre de usuario o contraseña incorrectos. Intentos restantes: ${intentos}`)
    intentos--
    }
}

alert("Demasiados intentos incorrectos. Saliendo del sistema.")
throw new Error("Demasiados intentos incorrectos")
}

function mostrarMenu() {
return Number(prompt("Escribe 1 para calcular el promedio, 2 para realizar una operación matematica y 3 para salir del sistema"))
}

function obtenerNotas() {
const notasArray = []
const cantidadNotas = Number(prompt("Ingrese la cantidad de notas a calcular"))

if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
    alert("Ingrese un numero valido y mayor que cero para la cantidad de notas")
    return obtenerNotas() 
}

for (let i = 0; i < cantidadNotas; i++) {
    let nota
    do {
    nota = Number(prompt("Ingresa tu nota Nro " + (i + 1)))
    if (isNaN(nota)) {
        alert("Por favor, ingrese una nota válida.")
    }
    } while (isNaN(nota))
    notasArray.push(nota)
}

return notasArray
}

function calcularPromedio() {
alert("Elección 1, a calcular promedios")
const notasArray = obtenerNotas()

const sumador = notasArray.reduce((acc, nota) => acc + nota, 0)
const promedio = sumador / notasArray.length
alert("Tu promedio total tiene un valor de " + promedio.toFixed(2))
}

function realizarOperacionMatematica() {
do {
    alert("Elección 2, a realizar una operacion matematica")
    const num1 = Number(prompt("Ingrese el primer número"))

    if (isNaN(num1)) {
    alert("Por favor, ingrese numeros validos o escriba 'salir' para volver al menu principal.")
    break
    }

    const num2 = Number(prompt("Ingrese el segundo numero"))

    if (isNaN(num2)) {
    alert("Por favor, ingrese numeros validos o escriba 'salir' para volver al menu principal.")
    break
    }

    const operacion = prompt("Ingrese la operacion matematica (+, -, *, /)")


    switch (operacion) {
    case '+':
        mostrarResultado(calculadora.sumar(num1, num2))
        break
    case '-':
        mostrarResultado(calculadora.restar(num1, num2))
        break
    case '*':
        mostrarResultado(calculadora.multiplicar(num1, num2))
        break
    case '/':
        mostrarResultado(calculadora.dividir(num1, num2))
        break
    case 'salir':
        return
    default:
        alert("Operacion no valida");
    }


    const continuar = confirm("Desea realizar otra operacion?")
    if (!continuar) {
    break
    }
} while (true)
}

function mostrarResultado(resultado) {
if (resultado !== null) {
    alert("Resultado: " + resultado)
}
}

registrarUsuario()
login()

let eleccion = mostrarMenu()

while (eleccion !== 3) {
switch (eleccion) {
    case 1:
    calcularPromedio()
    break
    case 2:
    realizarOperacionMatematica()
    break
    default:
    alert("Eleccion invalida. Por favor, selecciona 1, 2 o 3")
    break
}

eleccion = mostrarMenu()
}

alert("Saliendo del sistema!")