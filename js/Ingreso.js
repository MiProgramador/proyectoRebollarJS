class Ingreso extends Dato {
  static contadorIngresos = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor); // Llamada al constructor de la clase padre
    this._id = ++Ingreso.contadorIngresos; // Preincremento a la variable estática
  }

  // Getter para id (no se crea setter porque no se debe modificar)
  get id() {
    return this._id;
  }
}
