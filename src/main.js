//Variables
const nombres = document.getElementById("Nombres");
const montoVentas = document.getElementById("MontoVentas");
const deducciones = document.getElementById("Deducciones");
const botonObtener = document.getElementById("BotonObtener");
const botonRenovar = document.getElementById("BotonRenovar");
const tabla = document.getElementById("Tabla");

//Clase Cliente
class Cliente {
  constructor(nombre, impuesto = {}) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }
  get ObtenerNombre() {
    return this.nombre;
  }
  set ModificarNombre(valor) {
    this.nombre = valor;
  }
  calcularImpuesto(monto_bruto_anual, deducciones) {
    const impuesto = ((monto_bruto_anual - deducciones) * 0.21);
    if(!impuesto) return 0;
    this.impuesto = {impuesto: impuesto};
    return impuesto;
  }
}

//Clase Impuestos
class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this.monto_bruto_anual = monto_bruto_anual;
    this.deducciones = deducciones;
  }
  get ObtenerMonto_bruto_anual() {
    return this.monto_bruto_anual;
  }
  get ObtenerDeducciones() {
    return this.deducciones;
  }
  set ModificarMonto_bruto_anual(val) {
    this.monto_bruto_anual = val;
  }
  set ModificarDeducciones(val) {
    this.deducciones = val;
  }
}

//Funcion click para utilizar botón 'Obtener Información'
botonObtener.addEventListener('click', () => {
  //Normalización Variables
  const normalizacionMontoVentas = Number(montoVentas.value);
  const normalizacionDeducciones = Number(deducciones.value);

  //Instancias de clases
  const Cliente1 = new Cliente(nombres.value);
  const Impuestos1 = new Impuestos(normalizacionMontoVentas, normalizacionDeducciones);

  const calculoImpuesto = Cliente1.calcularImpuesto(Impuestos1.ObtenerMonto_bruto_anual, Impuestos1.ObtenerDeducciones);

  tabla.innerHTML += `
  <tr>
    <td>${Cliente1.ObtenerNombre}</td>
    <td>${calculoImpuesto}%</td>
  </tr>
  `;
})

//Funcion click para utilizar botón 'Nuevo Cliente'
botonRenovar.addEventListener('click', () => {
  const limpiar = () => {
    nombres.value = "";
    montoVentas.value = "";
    deducciones.value = "";
  };
  limpiar();
})
