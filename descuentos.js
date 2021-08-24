// const precioOriginal = 120
// const descuento = 18

const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

const onClickButtonDiscount = () => {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value
    
    const inputDiscount = document.getElementById("InputDiscount")
    const DiscountValue = inputDiscount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue,DiscountValue)
    
    const resultP = document.getElementById("ResultP")
    resultP.innerText = `El precio con descuento es:  ${precioConDescuento}`

}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })