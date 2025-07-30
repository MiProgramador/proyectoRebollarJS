class Egreso extends Dato {
  static contadorEgresos = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor); // Llamada al constructor del padre Dato
    this._id = ++Egreso.contadorEgresos; // Preincremento para asegurar que inicie en 1
  }

  // Getter para el ID (solo lectura)
  get id() {
    return this._id;
  }
}
