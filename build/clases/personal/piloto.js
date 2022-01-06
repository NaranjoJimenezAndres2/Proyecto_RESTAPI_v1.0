"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piloto = void 0;
const empleado_1 = require("./empleado");
class Piloto extends empleado_1.Empleado {
    constructor(idPiloto, nacionalidad, patrocinadores, vueltasRapidas, adelantamientos, puntos, abandonos, puntosTotales, idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia) {
        super(idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idPiloto = idPiloto;
        this._nacionalidad = nacionalidad;
        this._patrocinadores = patrocinadores;
        this._vueltasRapidas = vueltasRapidas;
        this._adelantamientos = adelantamientos;
        this._abandonos = abandonos;
        this._puntosTotales = puntosTotales;
    }
    get idPiloto() {
        return this._idPiloto;
    }
    get nacionalidad() {
        return this._nacionalidad;
    }
    get patrocinadores() {
        return this._patrocinadores;
    }
    get vueltasRapidas() {
        return this._vueltasRapidas;
    }
    get adelantamientos() {
        return this._adelantamientos;
    }
    get abandonos() {
        return this._abandonos;
    }
    get puntosTotales() {
        return this._puntosTotales;
    }
    set idPiloto(value) {
        this._idPiloto = value;
    }
    set puntosTotales(value) {
        this._puntosTotales = value;
    }
    set adelandamientos(value) {
        this._adelantamientos = value;
    }
}
exports.Piloto = Piloto;
