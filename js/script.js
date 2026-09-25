/* ── a) Variables y salida (Con función de Mostrar / Ocultar) ── */
document.getElementById('btnDatos').addEventListener('click', function () {
    const nombre    = 'Miguel Angel Ramos Tadeo';
    const matricula = '100030399';
    const carrera   = 'Licenciatura en Sistemas Computacionales';
    const semestre  = 5;

    const parDatos = document.getElementById('parDatos');
    const btnDatos = document.getElementById('btnDatos');

    // Comprobamos si los datos están ocultos para mostrarlos, o viceversa
    if (parDatos.style.display === 'none' || parDatos.style.display === '') {
        // Mostrar datos y cambiar texto del botón a "Ocultar datos"
        const mensaje = `Nombre: ${nombre}
Matrícula: ${matricula}
Carrera: ${carrera}
Semestre: ${semestre}`;

        parDatos.textContent = mensaje;
        parDatos.style.display = 'block';
        btnDatos.textContent = 'Ocultar datos';
        
        console.log(`[Ejercicio A] Datos mostrados -> Alumno: ${nombre} | Matrícula: ${matricula}`);
    } else {
        // Ocultar datos y restaurar texto del botón a "Mostrar mis datos"
        parDatos.textContent = '';
        parDatos.style.display = 'none';
        btnDatos.textContent = 'Mostrar mis datos';
        
        console.log('[Ejercicio A] Datos ocultados por el usuario.');
    }
});

/* ── b) Calculadora de calificaciones ── */
document.getElementById('btnCalc').addEventListener('click', function () {
    const p1 = parseFloat(document.getElementById('p1').value);
    const p2 = parseFloat(document.getElementById('p2').value);
    const p3 = parseFloat(document.getElementById('p3').value);

    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        alert('Por favor ingresa los tres parciales.');
        return;
    }

    const promedio = (p1 + p2 + p3) / 3;
    const parCalc  = document.getElementById('parCalc');

    console.log(`[Ejercicio B] Parciales: [${p1}, ${p2}, ${p3}] | Promedio: ${promedio.toFixed(2)}`);

    if (promedio >= 70) {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Aprobado ✓`;
        parCalc.style.color = '#EAA71B';
        parCalc.style.backgroundColor = 'rgba(234, 167, 27, 0.15)';
    } else {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Reprobado ✗`;
        parCalc.style.color = '#C09537';
        parCalc.style.backgroundColor = 'rgba(192, 149, 55, 0.15)';
    }
});

/* ── c) Lista dinámica ── */
document.getElementById('btnAgregar').addEventListener('click', function () {
    const inputItem = document.getElementById('inputItem');
    const valor = inputItem.value.trim();

    if (valor === '') return;

    const li = document.createElement('li');
    li.className   = 'list-group-item';
    li.textContent = valor;
    
    document.getElementById('miLista').appendChild(li);
    
    console.log(`[Ejercicio C] Elemento agregado a la lista dinámica: "${valor}"`);

    inputItem.value = '';
    inputItem.focus();
});

document.getElementById('btnLimpiar').addEventListener('click', function () {
    document.getElementById('miLista').innerHTML = '';
    console.log('[Ejercicio C] La lista dinámica ha sido limpiada.');
});

/* ── d) Cambio de estilos (Afecta a toda la página) ── */
function cambiarFondo(hexColor) {
    document.body.style.backgroundColor = '#' + hexColor;
    console.log(`[Ejercicio D] Fondo de toda la página cambiado a #${hexColor}`);
}

function restaurarFondo() {
    document.body.style.backgroundColor = '';
    console.log('[Ejercicio D] Fondo de la página restaurado al original.');
}