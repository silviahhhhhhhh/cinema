function mostrarDetalles(titulo, genero, duracion) {
    document.getElementById('tituloPelicula').innerText = titulo;
    document.getElementById('generoPelicula').innerText = 'Género: ' + genero;
    document.getElementById('duracionPelicula').innerText = 'Duración: ' + duracion;
    document.getElementById('salasHorarios').classList.remove('hidden');
}

function mostrarSeccion(seccion) {
    document.getElementById('peliculas').style.display = 'none';
    document.getElementById('entradas').style.display = 'none';
    document.getElementById('mapaAsientos').style.display = 'none';
    document.getElementById(seccion).style.display = 'block';
}

function mostrarMapa(hora) {
    alert('Has seleccionado la hora: ' + hora);
    mostrarSeccion('mapaAsientos');
}

document.addEventListener('DOMContentLoaded', function() {
    const filas = document.querySelectorAll('.fila');

    filas.forEach((fila, index) => {
        const esUltimaFila = index === 9;
        const numAsientos = 24;

        for (let i = 1; i <= numAsientos; i++) {
            const asiento = document.createElement('div');
            asiento.className = 'asiento';
            let asientoNumero = i

            if (!esUltimaFila) {
               if (i === 13) {
                  const pasillo = document.createElement('div');
                  pasillo.className = 'pasillo';
                  fila.appendChild(pasillo);
                  i++
                  continue
               } else {
                   asiento.title = `Asiento ${asientoNumero}, Fila ${index + 1}`;
               }
            } else {
                 asiento.title = `Asiento ${asientoNumero}, Fila ${index + 1}`;
            }

            fila.appendChild(asiento);
        }
    });
});