// window.addEventListener('load', () => {
//     renderDiv()
// })

let contador = 0

function init() {
    mostrarContador(contador)

    console.log('ANTES do LOOP')
    const frutas = ['maça', 'laranja', 'abacaxi', 'mamao', 'limao']
    // for (let i = 0; i < frutas.length; i++) {
    //     const fruta = frutas[i]
    //     console.log(fruta)
    // }
    console.log('DEPOIS do LOOP')

    // let i = 0;
    // while(i < 5) {
    //     console.log(i)
    //     i++
    // }

    // let i = 15
    // do {
    //     console.log(i)
    //     i++
    // } while (i < 5)

}

function mostrarContador(valor) {   
    document.getElementById("div-contador").innerHTML = valor
}

function onClickAumentar () {
    const res = contador + 1
    mostrarContador(res)
    contador = res
}

function onClickDiminuir () {
    const res = contador - 1
    mostrarContador(res)
    contador = res
}