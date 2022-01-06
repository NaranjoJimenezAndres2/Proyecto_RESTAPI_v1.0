"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanica = void 0;
class Mecanica {
    constructor(idPieza, nombre, precio, tipo, fabricante, descripcion, fechaAlta, cantidad, idMecanico, idEscuderia, idIngeniero, idCoche, idReparacion) {
        this._idPieza = idPieza;
        this._nombre = nombre;
        this._precio = precio;
        this._tipo = tipo;
        this._fabricante = fabricante;
        this._descripcion = descripcion;
        this._cantidad = cantidad;
        this._idMecanico = idMecanico;
        this._idEscuderia = idEscuderia;
        this._idIngeniero = idIngeniero;
        this._idCoche = idCoche;
    }
    get idPieza() {
        return this._idPieza;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get tipo() {
        return this._tipo;
    }
    get fabricante() {
        return this._fabricante;
    }
    get descripcion() {
        return this._descripcion;
    }
    get cantidad() {
        return this._cantidad;
    }
    get idMecanico() {
        return this._idMecanico;
    }
    get idEscuderia() {
        return this._idEscuderia;
    }
    get idIngeniero() {
        return this._idIngeniero;
    }
    get idCoche() {
        return this._idCoche;
    }
    set idCoche(value) {
        this._idCoche = value;
    }
    set idIngeniero(value) {
        this._idIngeniero = value;
    }
    set idEscuderia(value) {
        this._idEscuderia = value;
    }
    set idMecanico(value) {
        this._idMecanico = value;
    }
    set cantidad(value) {
        this._cantidad = value;
    }
    set descripcion(value) {
        this._descripcion = value;
    }
    set tipo(value) {
        this._tipo = value;
    }
    set precio(value) {
        this._precio = value;
    }
    set nombre(value) {
        this._nombre = value;
    }
    set idPieza(value) {
        this._idPieza = value;
    }
    set fabricante(value) {
        this._fabricante = value;
    }
}
exports.Mecanica = Mecanica;
