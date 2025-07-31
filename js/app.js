// Arreglo de ingresos
 ingresos = [
  new Ingreso('Salario', 25000),
  new Ingreso('Venta auto', 55000),
  new Ingreso('Airbnb', 5000)
];

// Arreglo de egresos
 egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800),
  new Egreso('Despensa', 6000),
];

totalIngresos = () => {
    totalIngresos = 0
    for (i = 0; i < ingresos.length; i++) {
        totalIngresos = totalIngresos + ingresos[i]._valor
    }
    return totalIngresos
}

totalEgresos = () => {
    totalEgresos = 0
    for (i = 0; i < egresos.length; i++) {
        totalEgresos = totalEgresos + egresos[i]._valor
    }
    return totalEgresos
}

cargarIngresos = () => {
    let elemento = document.getElementById("lista-ingresos")
    ingresosHTML = ""
    for (i = 0; i < ingresos.length; i++) {
        ingresosHTML = ingresosHTML +
        "<div class=\"elemento limpiarEstilos\">" +
          "<div class=\"elemento_descripcion\">" + ingresos[i]._descripcion + "</div>" +
          "<div class=\"derecha limpiarEstilos\">" + 
            "<div class=\"elemento_valor\">" + ingresos[i]._valor+  "</div>" +
            "<div class=\"elemento_eliminar\">" +
              "<button type=\"button\" class=\"elemento_eliminar--btn\"" + " id=\"ingreso_" + i + "\">" +
                "<ion-icon class=\"close-circle-outline\"></ion-icon>" +
              "</button>" +
            "</div>" +
          "</div>" + 
        "</div>"
    }
    elemento.innerHTML = ingresosHTML;
}

cargarEgresos = () => {
    let elemento = document.getElementById("lista-egresos")
    let porcentaje
    let totalE = totalEgresos
    egresosHTML = ""
    for (i = 0; i < egresos.length; i++) {
        porcentaje = formatoPorcentaje(egresos[i]._valor/totalE)
        egresosHTML = egresosHTML +
        "<div class=\"elemento limpiarEstilos\">" +
          "<div class=\"elemento_descripcion\">" + egresos[i]._descripcion + "</div>" +
          "<div class=\"derecha limpiarEstilos\">" + 
            "<div class=\"elemento_valor\">" + egresos[i]._valor +  "</div>" +
            "<div class=\"elemento_porcentaje\">" + porcentaje + "</div>" +
            "<div class=\"elemento_eliminar\">" +
              "<button type=\"button\" class=\"elemento_eliminar--btn\" onclick=\"eliminarEgreso(" + egresos[i]._id + ")\"" + ">" +
                "<ion-icon class=\"close-circle-outline\"></ion-icon>" +
              "</button>" +
            "</div>" +
          "</div>" + 
        "</div>"
    }
    elemento.innerHTML = egresosHTML;
}

formatoMoneda = valor => valor.toLocaleString('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2
});

formatoPorcentaje = valor => valor.toLocaleString('es-MX', {
  style: 'percent',
  minimumFractionDigits: 2
});

cargarCabecero = () => {
    let elemento
    let presupuesto
    let porcentajeEgreso

    elemento = document.getElementById("presupuesto")
    presupuesto = totalIngresos() - totalEgresos()
    elemento.innerHTML = formatoMoneda(presupuesto) + " MNX"

    elemento = document.getElementById("ingresos")
    elemento.innerHTML = formatoMoneda(totalIngresos) + " MNX" 

    elemento = document.getElementById("egresos")
    elemento.innerHTML = formatoMoneda(totalEgresos) + " MNX"

    porcentajeEgreso = totalEgresos / totalIngresos
    elemento = document.getElementById("porcentaje")
    elemento.innerHTML =  formatoPorcentaje(porcentajeEgreso)
}

cargarApp = () => {
  cargarCabecero()
  cargarIngresos()
  cargarEgresos()
}

eliminarEgreso = (id) => {
  indiceEliminar = egresos.findIndex(Egreso => Egreso.id === id)
  egresos.splice(indiceEliminar, 1)
  cargarCabecero()
  cargarEgresos()
}