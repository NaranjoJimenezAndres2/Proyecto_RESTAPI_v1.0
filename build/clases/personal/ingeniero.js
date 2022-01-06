"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingeniero = void 0;
const empleado_1 = require("./empleado");
class Ingeniero extends empleado_1.Empleado {
    constructor(idIngeniero, especialidad, idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia) {
        super(idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idIngeniero = idIngeniero;
        this._especialidad = especialidad;
    }
    get idIngeniero() {
        return this._idIngeniero;
    }
    get especialidad() {
        return this._especialidad;
    }
}
exports.Ingeniero = Ingeniero;
