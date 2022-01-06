import { Empleado } from './empleado';

export class Ingeniero extends Empleado {
    private _idIngeniero: string;   //se espera asociar con los coches
    private _especialidad: string;
    constructor (idIngeniero: string, especialidad: string, idEmpleado: string, nombre: string, apellidos: string, fechaContratacion: Date, salario: number, idEscuderia: string) {
        super(idEmpleado, nombre, apellidos, fechaContratacion, salario, idEscuderia);
        this._idIngeniero = idIngeniero;
        this._especialidad = especialidad;
        
    }

    public get idIngeniero(): string {
        return this._idIngeniero;
    }

    public get especialidad(): string {
        return this._especialidad;
    }

}

