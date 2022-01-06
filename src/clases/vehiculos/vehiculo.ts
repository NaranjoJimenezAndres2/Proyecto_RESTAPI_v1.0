export class Vehiculo {
  protected _idVehiculo: string;
  protected _idPiloto: string;
    protected _marca: string;
    protected _modelo: string;
    constructor (idVehiculo: string, idPiloto: string, marca: string, modelo: string){
        this._idVehiculo = idVehiculo;
        this._idPiloto = idPiloto;
        this._marca = marca;
        this._modelo = modelo;
    }

    public get idVehiculo(): string {
        return this._idVehiculo;
    }

    public get idPiloto(): string {
        return this._idPiloto;
    }

    
    public get marca(): string {
        return this._marca;
    }

    public get modelo(): string {
        return this._modelo;
    }

}