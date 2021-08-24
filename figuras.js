// //Codigo del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`)
// const perimetroCuadrado = ladoCuadrado * 4
const perimetroCuadrado = (lado) => lado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`)

// const areaCuadrado = ladoCuadrado * ladoCuadrado
const areaCuadrado = (lado) => lado * lado;
console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`)
console.groupEnd()

// //Codigo del triangulo
console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden: 
// ${ladoTriangulo1} 
// cm
// ${ladoTriangulo2} 
// cm
// ${baseTriangulo} 
// cm`)
// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo es de: ${alturaTriangulo} cm`)

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
console.log(`La perimetro del triangulo es de: ${perimetroTriangulo} cm`)

// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2
const areaTriangulo = (base, altura) => (base * altura) / 2
console.log(`El area del triangulo es de: ${areaTriangulo} cm^2`)
console.groupEnd()

console.group("Circulos")

// //radio
// const radioCirculo = 4
// console.log(`El radio del circulo es de: ${radioCirculo} cm`)
// //diametro
// const dimetroCirculo = radioCirculo * 2
const diametroCirculo = (radio) => radio * 2
console.log(`El diametro del circulo es de: ${diametroCirculo} cm`)
// //PI
const PI = Math.PI
// //Circunferencia
// const perimetroCirculo = dimetroCirculo * PI
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI
console.log(`La perimetro del circulo es de: ${perimetroCirculo} cm`)
// //Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI
const areaCirculo = (radio) => PI * (radio*radio)
console.log(`El area del circulo es de: ${areaCirculo} cm^2`)
console.groupEnd()


//Interactundo con el HTML

//Cuadrado
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById("InputCuadrado")
    const value = input.value

    const area = areaCuadrado(value)
    alert(area)
}
//Triangulo
const calcularPerimetroTriangulo = () => {
    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulo3")
    const value1 = parseInt(input1.value)
    const value2 = parseInt(input2.value)
    const value3 = parseInt(input3.value)

    const perimetro = perimetroTriangulo(value1,value2,value3)
    alert(perimetro)
}

const calcularAreaTriangulo = () => {
    const input3 = document.getElementById("InputTriangulo3")
    const input4 = document.getElementById("InputTriangulo4")
    const value1 = input3.value
    const value2 = input4.value

    const area = areaTriangulo(value1,value2)
    alert(area)
}
//Circulo
const calcularDiametroCirculo = () => {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const perimetro = diametroCirculo(value)
    alert(perimetro)
}

const calcularPerimetroCirculo = () => {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const perimetro = perimetroCirculo(value)
    alert(perimetro)
}

const calcularAreaCirculo = () => {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const area = areaCirculo(value)
    alert(area)
}