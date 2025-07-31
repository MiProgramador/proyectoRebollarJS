// Arreglo de ingresos
 let ingresos = [
  new Ingreso('Salario', 25000),
  new Ingreso('Venta auto', 55000),
  new Ingreso('Airbnb', 5000)
];

// Arreglo de egresos
 let egresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800),
  new Egreso('Despensa', 6000),
];

const totalIngresos = () => {
    totalIngreso = 0
    for (i = 0; i < ingresos.length; i++) {
        totalIngreso = totalIngreso + ingresos[i]._valor
    }
    return totalIngreso
}

const totalEgresos = () => {
    totalEgreso = 0
    for (i = 0; i < egresos.length; i++) {
        totalEgreso = totalEgreso + egresos[i]._valor
    }
    return totalEgreso
}

const cargarApp = () => {
  cargarCabecero()
  cargarIngresos()
  cargarEgresos()
}

const eliminarEgreso = (id) => {
  indiceEliminar = egresos.findIndex(Egreso => Egreso.id === id)
  egresos.splice(indiceEliminar, 1)
  cargarCabecero()
  cargarEgresos()
}

const eliminarIngreso = (id) => {
  indiceEliminar = ingresos.findIndex(Ingreso => Ingreso.id === id)
  ingresos.splice(indiceEliminar, 1)
  cargarCabecero()
  cargarIngresos()
}

const cargarCabecero = () => {
    let elemento
    let presupuesto
    let porcentajeEgreso

    elemento = document.getElementById("presupuesto")
    presupuesto = totalIngresos() - totalEgresos()
    elemento.innerHTML = formatoMoneda(presupuesto) + " MNX"

    elemento = document.getElementById("ingresos")
    elemento.innerHTML = formatoMoneda(totalIngresos()) + " MNX" 

    elemento = document.getElementById("egresos")
    elemento.innerHTML = formatoMoneda(totalEgresos()) + " MNX"

    if (totalIngresos() != 0) {
      porcentajeEgreso = totalEgresos() / totalIngresos()
    } else { porcentajeEgreso = 0 }
    elemento = document.getElementById("porcentaje")
    elemento.innerHTML =  formatoPorcentaje(porcentajeEgreso)
}

cargarIngresos = () => {
    let elemento = document.getElementById("lista-ingresos")
    ingresosHTML = ""
    for (i = 0; i < ingresos.length; i++) {
        ingresosHTML = ingresosHTML +
        "<div class=\"elemento limpiarEstilos\">" +
          "<div class=\"elemento_descripcion\">" + ingresos[i]._descripcion + "</div>" +
          "<div class=\"derecha limpiarEstilos\">" + 
            "<div class=\"elemento_valor\">" + formatoMoneda(ingresos[i]._valor) +  " MNX </div>" +
            "<div class=\"elemento_eliminar\">" +
              "<button type=\"button\" class=\"elemento_eliminar--btn\" onclick=\"eliminarIngreso(" + ingresos[i]._id + ")\">" +
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
    let totalE = totalEgresos()
    egresosHTML = ""
    for (i = 0; i < egresos.length; i++) {
        porcentaje = formatoPorcentaje(egresos[i]._valor/totalE)
        egresosHTML = egresosHTML +
        "<div class=\"elemento limpiarEstilos\">" +
          "<div class=\"elemento_descripcion\">" + egresos[i]._descripcion + "</div>" +
          "<div class=\"derecha limpiarEstilos\">" + 
            "<div class=\"elemento_valor\">" + formatoMoneda(egresos[i]._valor) +  " MNX </div>" +
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

const agregarDato = () => {
  const forma = document.getElementById("forma")
  const tipo = forma.tipo.value
  const descripcion = forma.descripcion.value.trim()
  const valor = parseFloat(forma.valor.value)

  if (descripcion !== "" && !isNaN(valor)) {
    if (tipo === "+") {
      ingresos.push(new Ingreso(descripcion, valor))
      cargarCabecero()
      cargarIngresos()
    } else {
      egresos.push(new Egreso(descripcion, valor));
      cargarCabecero()
      cargarEgresos()
    }
  } else {
    alert("Por favor llena todos los campos correctamente.")
  }
  forma.tipo.value = "+"
  forma.descripcion.value = ""
  forma.valor.value = ""
}
