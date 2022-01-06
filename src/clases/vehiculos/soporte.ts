import { Vehiculo} from "./vehiculo";

export class Soporte extends Vehiculo {
    private _asistenciaMedica: boolean;
    private _asistenciaTecnica: boolean;
    constructor (idVehiculo: string, idPiloto: string, marca: string, modelo: string, asistenciaMedica: boolean, asistenciaTecnica: boolean) {
        super(idVehiculo,idPiloto, marca, modelo);
        this._asistenciaMedica = asistenciaMedica;
        this._asistenciaTecnica = asistenciaTecnica;
    }

    public get asistenciaMedica(): boolean {
        return this._asistenciaMedica;
    }

    public get asistenciaTecnica(): boolean {
        return this._asistenciaTecnica;
    }


}
