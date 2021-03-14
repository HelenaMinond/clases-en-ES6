"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Variables
var nombres = document.getElementById("Nombres");
var montoVentas = document.getElementById("MontoVentas");
var deducciones = document.getElementById("Deducciones");
var botonObtener = document.getElementById("BotonObtener");
var botonRenovar = document.getElementById("BotonRenovar");
var tabla = document.getElementById("Tabla"); //Clase Cliente

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "ObtenerNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "ModificarNombre",
    set: function set(valor) {
      this.nombre = valor;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(monto_bruto_anual, deducciones) {
      var impuesto = (monto_bruto_anual - deducciones) * 0.21;
      if (!impuesto) return 0;
      this.impuesto = {
        impuesto: impuesto
      };
      return impuesto;
    }
  }]);

  return Cliente;
}(); //Clase Impuestos


var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this.monto_bruto_anual = monto_bruto_anual;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "ObtenerMonto_bruto_anual",
    get: function get() {
      return this.monto_bruto_anual;
    }
  }, {
    key: "ObtenerDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "ModificarMonto_bruto_anual",
    set: function set(val) {
      this.monto_bruto_anual = val;
    }
  }, {
    key: "ModificarDeducciones",
    set: function set(val) {
      this.deducciones = val;
    }
  }]);

  return Impuestos;
}(); //Funcion click para utilizar botón 'Obtener Información'


botonObtener.addEventListener('click', function () {
  //Normalización Variables
  var normalizacionMontoVentas = Number(montoVentas.value);
  var normalizacionDeducciones = Number(deducciones.value); //Instancias de clases

  var Cliente1 = new Cliente(nombres.value);
  var Impuestos1 = new Impuestos(normalizacionMontoVentas, normalizacionDeducciones);
  var calculoImpuesto = Cliente1.calcularImpuesto(Impuestos1.ObtenerMonto_bruto_anual, Impuestos1.ObtenerDeducciones);
  tabla.innerHTML += "\n  <tr>\n    <td>".concat(Cliente1.ObtenerNombre, "</td>\n    <td>").concat(calculoImpuesto, "%</td>\n  </tr>\n  ");
}); //Funcion click para utilizar botón 'Nuevo Cliente'

botonRenovar.addEventListener('click', function () {
  var limpiar = function limpiar() {
    nombres.value = "";
    montoVentas.value = "";
    deducciones.value = "";
  };

  limpiar();
});