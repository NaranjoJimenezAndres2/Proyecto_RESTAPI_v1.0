"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const equipoSchema_1 = require("../model/equipoSchema");
const vehiculoSchema_1 = require("../model/vehiculoSchema");
const recambioSchema_1 = require("../model/recambioSchema");
const personalSchema_1 = require("../model/personalSchema");
const granPremioSchema_1 = require("../model/granPremioSchema");
const boxeSchema_1 = require("../model/boxeSchema");
class Routes {
    constructor() {
        this.getEquipos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    equipoSchema_1.Equipos.find({})
                        .then((equipos) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(equipos))
                            .catch((error) => reject(`Error desconectando de ${database_1.db._cadenaConexion}: ${error}`));
                    })
                        .catch((error) => reject(`Error consultando a ${database_1.db._cadenaConexion}: ${error}`));
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.getVehiculos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    vehiculoSchema_1.Vehiculos.find({})
                        .then((vehiculos) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(vehiculos))
                            .catch((error) => reject(`Error desconectando de ${database_1.db._cadenaConexion}: ${error}`));
                    })
                        .catch((error) => reject(`Error consultando a ${database_1.db._cadenaConexion}: ${error}`));
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.getRecambios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    recambioSchema_1.Recambios.find({})
                        .then((recambios) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(recambios))
                            .catch((error) => reject(`Error desconectando de ${database_1.db._cadenaConexion}: ${error}`));
                    })
                        .catch((error) => reject(`Error consultando a ${database_1.db._cadenaConexion}: ${error}`));
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        /*private getPersonal = async (req: Request, res: Response) => {
            const promise = new Promise<any>( async (resolve, reject) => {
                await db.conectarBD()
                .then( async () => {
                    Personal.find({})
                    .then( (personal) => {
                        db.desconectarBD()
                        .then( () => resolve(personal) )
                        .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                    })
                    .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
            })
            res.json(await promise)
            db.desconectarBD()
        }*/
        //obtener mediante metodo get el personal de una escuderia
        this.getPersonalEscuderia = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield database_1.db.conectarBD()
                    .then(() => __awaiter(this, void 0, void 0, function* () {
                    personalSchema_1.Personal.find({ _idEscuderia: req.params.idEscuderia })
                        .then((personal) => {
                        database_1.db.desconectarBD()
                            .then(() => resolve(personal))
                            .catch((error) => reject(`Error desconectando de ${database_1.db._cadenaConexion}: ${error}`));
                    })
                        .catch((error) => reject(`Error consultando a ${database_1.db._cadenaConexion}: ${error}`));
                }))
                    .catch((error) => reject(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            }));
            res.json(yield promise);
            database_1.db.desconectarBD();
        });
        this.postEquipo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                equipoSchema_1.Equipos.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`)); //si hay alguna limitacion de Schema salta este error
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        this.postVehiculo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                vehiculoSchema_1.Vehiculos.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        //introducir un vehiculo del tipo monoplaza dentro de la base de datos mediante el metodo post
        this.postMonoplaza = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaMonoplaza = new vehiculoSchema_1.Vehiculos({
                _idVehiculo: req.body._idVehiculo,
                _idMonoplaza: req.body._idMonoplaza,
                _idPiloto: req.body._idPiloto,
                _marca: req.body._marca,
                _modelo: req.body._modelo,
                _motor: req.body._motor,
                _patrocinadores: req.body._patrocinadores,
            });
            console.log(pShemaMonoplaza);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaMonoplaza.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        //introducir un vehiculo del tipo soporte dentro de la base de datos mediante el metodo post
        this.postSoporte = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaSoporte = new vehiculoSchema_1.Vehiculos({
                _idVehiculo: req.body._idVehiculo,
                _idPiloto: req.body._idPiloto,
                _marca: req.body._marca,
                _modelo: req.body._modelo,
                _asistenciaMedica: req.body._asistenciaMedica,
                _asistenciaTecnica: req.body._asistenciaTecnica
            });
            console.log(pShemaSoporte);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaSoporte.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        this.postRecambio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                recambioSchema_1.Recambios.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        this.postPersonal = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                personalSchema_1.Personal.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        //introducir un personal del tipo piloto dentro de la base de datos mediante el metodo post
        this.postPiloto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaPiloto = new personalSchema_1.Personal({
                _idPersonal: req.body._idPersonal,
                _idPiloto: req.body._idPiloto,
                _nombre: req.body._nombre,
                _apellidos: req.body._apellidos,
                _fechaContratacion: req.body._fechaContratacion,
                _salario: req.body._salario,
                _idEscuderia: req.body._idEscuderia,
                _nacionalidad: req.body._nacionalidad,
                _patrocinadores: req.body._patrocinadores,
                _adelantamientos: req.body._adelantamientos,
                _abandonos: req.body._abandonos,
                _puntosTotales: req.body._puntosTotales
            });
            console.log(pShemaPiloto);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaPiloto.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        //introducir un personal del tipo ingeniero dentro de la base de datos mediante el metodo post
        this.postIngeniero = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaIngeniero = new personalSchema_1.Personal({
                _idPersonal: req.body._idPersonal,
                _idIngeniero: req.body._idIngeniero,
                _nombre: req.body._nombre,
                _apellidos: req.body._apellidos,
                _fechaContratacion: req.body._fechaContratacion,
                _salario: req.body._salario,
                _idEscuderia: req.body._idEscuderia,
                _especialidad: req.body._especialidad
            });
            console.log(pShemaIngeniero);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaIngeniero.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        //introducir elementos en la coleccion granPremio por el metodo post
        this.postGranPremio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let pShemaGranPremio = new granPremioSchema_1.granPremios({
                _idGranPremio: req.body._idGranPremio,
                _nombre: req.body._nombre,
                _fecha: req.body._fecha,
                _pais: req.body._pais,
                _clasificacion: req.body._clasificacion,
                _vueltaRapida: req.body._vueltaRapida,
                _abandonos: req.body._abandonos
            });
            console.log(pShemaGranPremio);
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                yield pShemaGranPremio.save()
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            database_1.db.desconectarBD();
        });
        //introducir elementos en la coleccion boxes por el metodo post
        this.postBox = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                boxeSchema_1.Boxes.create(req.body)
                    .then((mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la subida del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        /*private postBoxes = async (req: Request, res: Response) => {
    
            let pShemaBoxes= new Boxes({
                _idBoxe: req.body._idBoxe,
                _idgranPremio: req.body._idgranPremio,
                _idEscuderia: req.body._idEscuderia,
                _idCoche: req.body._idCoche,
                _idMecanico: req.body._idMecanico,
                _tiempo: req.body._tiempo
            })
    
            console.log(pShemaBoxes)
    
            await db.conectarBD()
            .then( async () => {
                await pShemaBoxes.save()
                .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
                .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
            })
            .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
            db.desconectarBD()
        }*/
        //modificar el campo precio de la base de datos mediante el metodo put en la ruta /recambios/:idPieza
        this.updateRecambio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                recambioSchema_1.Recambios.findByIdAndUpdate(req.params.idPieza, req.body)
                    .then((mensaje) => res.send(`El documento se ha modificado correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la modificación del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        //eliminar un empleado de la coleccion personal mediante el metodo delete en la ruta /personal/:idPersonal
        this.deletePersonal = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                personalSchema_1.Personal.findByIdAndDelete(req.params.idPersonal)
                    .then((mensaje) => res.send(`El documento se ha eliminado correctamente en la base de datos ${mensaje}`))
                    .catch((error) => res.send(`Ha habido un error en la eliminación del documento a ${database_1.db._cadenaConexion}: ${error}`));
            }))
                .catch((error) => res.send(`Error conectando a ${database_1.db._cadenaConexion}: ${error}`));
            yield database_1.db.conectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/equipos', this.getEquipos);
        this._router.get('/personal/:idEscuderia', this.getPersonalEscuderia);
        this._router.get('/recambios', this.getRecambios);
        this._router.get('/vehiculos', this.getVehiculos);
        this._router.post('/equipo', this.postEquipo);
        this._router.post('/vehiculo', this.postVehiculo); //posiblemente se pueda eliminar
        this._router.post('/vehiculo/monoplaza', this.postMonoplaza); //para la subclases de vehiculos
        this._router.post('/vehiculo/soporte', this.postSoporte); //para la subclases de vehiculos
        this._router.post('/recambio', this.postRecambio);
        this._router.post('/personal', this.postPersonal);
        this._router.post('/personal/piloto', this.postPiloto);
        this._router.post('/personal/ingeniero', this.postIngeniero);
        this._router.post('/granPremio', this.postGranPremio); //funciona
        this._router.post('/boxes', this.postBox);
        this._router.put('/recambio/:idPieza', this.updateRecambio);
        this._router.delete('/personal/:idPersonal', this.deletePersonal);
    }
}
const obj = new Routes();
obj.misRutas();
exports.routes = obj.router;
