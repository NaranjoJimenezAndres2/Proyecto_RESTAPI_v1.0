"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monoplaza = void 0;
const vehiculo_1 = require("./vehiculo");
class Monoplaza extends vehiculo_1.Vehiculo {
    constructor(idMonoplaza, idPiloto, marca, modelo, motor, patrocinadores) {
        super(idMonoplaza, idPiloto, marca, modelo);
        this._idMonoplaza = idMonoplaza;
        this._idPiloto = idPiloto;
        this._motor = motor;
        this._patrocinadores = patrocinadores;
    }
    get idMonoplaza() {
        return this._idMonoplaza;
    }
    get idPiloto() {
        return this._idPiloto;
    }
    get motor() {
        return this._motor;
    }
    get patrocinadores() {
        return this._patrocinadores;
    }
}
exports.Monoplaza = Monoplaza;
