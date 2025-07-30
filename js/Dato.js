class Dato {
  constructor(descripcion, valor) {
    this._descripcion = descripcion;
    this._valor = valor;
  }

  // Getter para descripción
  get descripcion() {
    return this._descripcion;
  }

  // Setter para descripción
  set descripcion(nuevaDescripcion) {
    this._descripcion = nuevaDescripcion;
  }

  // Getter para valor
  get valor() {
    return this._valor;
  }

  // Setter para valor
  set valor(nuevoValor) {
    this._valor = nuevoValor;
  }
}

