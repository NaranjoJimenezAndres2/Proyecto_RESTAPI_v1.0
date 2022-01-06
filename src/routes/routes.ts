import {Request, Response, Router } from 'express'
import { db } from '../database/database'
import { Equipos } from '../model/equipoSchema'
import { Vehiculos, iVehiculo, iMonoplaza, iSoporte } from '../model/vehiculoSchema'
import { Recambios } from '../model/recambioSchema'
import { Personal, iPersonal, iMecanico, iIngeniero, iPiloto } from '../model/personalSchema'
import { granPremios } from '../model/granPremioSchema'
import { Boxes } from '../model/boxeSchema'



class Routes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router(){
        return this._router
    }




    private getEquipos = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Equipos.find({})
                .then( (equipos) => {
                    db.desconectarBD()
                    .then( () => resolve(equipos) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }

    private getVehiculos = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Vehiculos.find({})  
                .then( (vehiculos) => {
                    db.desconectarBD()
                    .then( () => resolve(vehiculos) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }

    private getRecambios = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Recambios.find({})
                .then( (recambios) => {
                    db.desconectarBD()
                    .then( () => resolve(recambios) )
                    .catch( (error) => reject(`Error desconectando de ${db._cadenaConexion}: ${error}`) )
                })
                .catch( (error) => reject(`Error consultando a ${db._cadenaConexion}: ${error}`) )
            })
            .catch( (error) => reject(`Error conectando a ${db._cadenaConexion}: ${error}`) )
        })
        res.json(await promise)
        db.desconectarBD()
    }


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
    private getPersonalEscuderia = async (req: Request, res: Response) => {
        const promise = new Promise<any>( async (resolve, reject) => {
            await db.conectarBD()
            .then( async () => {
                Personal.find({_idEscuderia: req.params.idEscuderia})
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
    }




    private postEquipo = async (req: Request, res: Response) => {
            await db.conectarBD()
            .then( async () => {
                Equipos.create(req.body)
                .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`) )
                .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`)) //si hay alguna limitacion de Schema salta este error
            })
            .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
            await db.conectarBD()
        }



    private postVehiculo = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Vehiculos.create(req.body)
            .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }


    //introducir un vehiculo del tipo monoplaza dentro de la base de datos mediante el metodo post
    private postMonoplaza = async (req: Request, res: Response) => {

        let pShemaMonoplaza= new Vehiculos({
            _idVehiculo: req.body._idVehiculo,
            _idMonoplaza: req.body._idMonoplaza,
            _idPiloto: req.body._idPiloto,
            _marca: req.body._marca,
            _modelo: req.body._modelo,
            _motor: req.body._motor,
            _patrocinadores: req.body._patrocinadores,
        })
        console.log(pShemaMonoplaza)

        await db.conectarBD() 
        .then( async () => {
            await pShemaMonoplaza.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()

    }

    //introducir un vehiculo del tipo soporte dentro de la base de datos mediante el metodo post
    private postSoporte = async (req: Request, res: Response) => {

        let pShemaSoporte= new Vehiculos({
            _idVehiculo: req.body._idVehiculo,
            _idPiloto: req.body._idPiloto,
            _marca: req.body._marca,
            _modelo: req.body._modelo,
            _asistenciaMedica: req.body._asistenciaMedica,
            _asistenciaTecnica: req.body._asistenciaTecnica
        })
        console.log(pShemaSoporte)

        await db.conectarBD()
        .then( async () => {
            await pShemaSoporte.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()
    }



    private postRecambio = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Recambios.create(req.body)
            .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }




    private postPersonal = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Personal.create(req.body)
            .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }

    //introducir un personal del tipo piloto dentro de la base de datos mediante el metodo post
    private postPiloto = async (req: Request, res: Response) => {

        let pShemaPiloto= new Personal({
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
        })
        console.log(pShemaPiloto)

        await db.conectarBD()
        .then( async () => {
            await pShemaPiloto.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()
    }

    //introducir un personal del tipo ingeniero dentro de la base de datos mediante el metodo post
    private postIngeniero = async (req: Request, res: Response) => {

        let pShemaIngeniero= new Personal({
            _idPersonal: req.body._idPersonal,
            _idIngeniero: req.body._idIngeniero,
            _nombre: req.body._nombre,
            _apellidos: req.body._apellidos,
            _fechaContratacion: req.body._fechaContratacion,
            _salario: req.body._salario,
            _idEscuderia: req.body._idEscuderia,
            _especialidad: req.body._especialidad
        })
        console.log(pShemaIngeniero)

        await db.conectarBD()
        .then( async () => {
            await pShemaIngeniero.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()
    }


    //introducir elementos en la coleccion granPremio por el metodo post
    private postGranPremio = async (req: Request, res: Response) => {

        let pShemaGranPremio= new granPremios({
            _idGranPremio: req.body._idGranPremio,
            _nombre: req.body._nombre,
            _fecha: req.body._fecha,
            _pais: req.body._pais,
            _clasificacion: req.body._clasificacion,
            _vueltaRapida: req.body._vueltaRapida,
            _abandonos: req.body._abandonos
        })
        console.log(pShemaGranPremio)

        await db.conectarBD()
        .then( async () => {
            await pShemaGranPremio.save()
            .then( (mensaje:any) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error:any) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error:any) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        db.desconectarBD()
    }

    //introducir elementos en la coleccion boxes por el metodo post
    private postBox = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Boxes.create(req.body)
            .then( (mensaje) => res.send(`El documento se ha introducido correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la subida del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }

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
    private updateRecambio = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Recambios.findByIdAndUpdate(req.params.idPieza, req.body)
            .then( (mensaje) => res.send(`El documento se ha modificado correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la modificación del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }




    //eliminar un empleado de la coleccion personal mediante el metodo delete en la ruta /personal/:idPersonal
    private deletePersonal = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then( async () => {
            Personal.findByIdAndDelete(req.params.idPersonal)
            .then( (mensaje) => res.send(`El documento se ha eliminado correctamente en la base de datos ${mensaje}`))
            .catch( (error) => res.send(`Ha habido un error en la eliminación del documento a ${db._cadenaConexion}: ${error}`))
        })
        .catch( (error) => res.send(`Error conectando a ${db._cadenaConexion}: ${error}`))
        await db.conectarBD()
    }
 


    misRutas(){ 
        this._router.get('/equipos', this.getEquipos)
        this._router.get('/personal/:idEscuderia', this.getPersonalEscuderia)
        this._router.get('/recambios', this.getRecambios)
        this._router.get('/vehiculos', this.getVehiculos)
        this._router.post('/equipo', this.postEquipo)
        this._router.post('/vehiculo', this.postVehiculo) //posiblemente se pueda eliminar
        this._router.post('/vehiculo/monoplaza', this.postMonoplaza) //para la subclases de vehiculos
        this._router.post('/vehiculo/soporte', this.postSoporte) //para la subclases de vehiculos
        this._router.post('/recambio', this.postRecambio)
        this._router.post('/personal', this.postPersonal)
        this._router.post('/personal/piloto', this.postPiloto)
        this._router.post('/personal/ingeniero', this.postIngeniero)
        this._router.post('/granPremio', this.postGranPremio)  //funciona
        this._router.post('/boxes', this.postBox)
        this._router.put('/recambio/:idPieza', this.updateRecambio)
        this._router.delete('/personal/:idPersonal', this.deletePersonal)
        
    }



}


const obj = new Routes()
obj.misRutas()
export const routes = obj.router

