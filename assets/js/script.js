let numero = document.querySelector('#cajanumero')
let boton = document.querySelector('#miBoton')
let muestraMultiplicaciones = document.querySelector('#mutiplcaciones')


boton.addEventListener('click', () => {
    const ingresonumero = parseInt(numero.value)
    muestraMultiplicaciones.innerHTML = '';

    for (i = 0; i <= 10; i++) {
        const resultado = ingresonumero * i;
        muestraMultiplicaciones.innerHTML += `<p class="text-center montserrat transparente">${ingresonumero} x ${i} = ${resultado}</p>`;
    }

})
