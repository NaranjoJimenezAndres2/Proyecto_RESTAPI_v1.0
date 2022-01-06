import { Vehiculo} from "./vehiculo";

export class Monoplaza extends Vehiculo {
    private _idMonoplaza: string;
    private _motor: string;
    private _patrocinadores: string[];
    constructor (idMonoplaza: string, idPiloto: string, marca: string, modelo: string, motor: string, patrocinadores: string[]) {
        super(idMonoplaza,idPiloto, marca, modelo);
        this._idMonoplaza = idMonoplaza;
        this._idPiloto = idPiloto;
        this._motor = motor;
        this._patrocinadores = patrocinadores;
    }

    public get idMonoplaza(): string {
        return this._idMonoplaza;
    }

    public get idPiloto(): string {
        return this._idPiloto;
    }

    public get motor(): string {
        return this._motor;
    }

    public get patrocinadores(): string[] {
        return this._patrocinadores;
    }

    
}