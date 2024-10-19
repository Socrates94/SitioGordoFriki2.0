window.onload = function(){
    $('#spin').fadeOut();
    $('body').removeClass('hidden');
}

document.addEventListener('DOMContentLoaded', function(){

    crearGaleria()

})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 16; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/full/${i}.jpg`;
        imagen.alt = 'galeria';
        
        // Event handler
        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(indice){

    const imagen = document.createElement('IMG');
    imagen.src = `src/img/full/${indice}.jpg`;
    imagen.alt = 'galeria'    
    
    // Generando modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    // Boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrra')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    // agregando al html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal(){
 
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout( () => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500);

}