export class Mecanica {
    protected _idPieza: string;
    protected _nombre: string;
    protected _precio: number;
    protected _tipo: string;
    protected _fabricante: string;
    protected _descripcion: string;
    protected _cantidad: number;
    protected _idMecanico: string;
    protected _idEscuderia: string;
    protected _idIngeniero: string;
    protected _idCoche: string;
    constructor (idPieza: string, nombre: string, precio: number, tipo: string,fabricante: string, descripcion: string, fechaAlta: Date, cantidad: number, idMecanico: string, idEscuderia: string, idIngeniero: string, idCoche: string, idReparacion: string) {
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

    public get idPieza(): string {
        return this._idPieza;
    }   

    public get nombre(): string {
        return this._nombre;
    }

    public get precio(): number {
        return this._precio;
    }

    public get tipo(): string {
        return this._tipo;
    }

    public get fabricante(): string {
        return this._fabricante;
    }


    public get descripcion(): string {
        return this._descripcion;
    }

    public get cantidad(): number {
        return this._cantidad;
    }

    public get idMecanico(): string {
        return this._idMecanico;
    }

    public get idEscuderia(): string {
        return this._idEscuderia;
    }

    public get idIngeniero(): string {
        return this._idIngeniero;
    }

    public get idCoche(): string {
        return this._idCoche;
    }

    public set idCoche(value: string) {
        this._idCoche = value;
    }

    public set idIngeniero(value: string) {
        this._idIngeniero = value;
    }

    public set idEscuderia(value: string) {
        this._idEscuderia = value;
    }

    public set idMecanico(value: string) {
        this._idMecanico = value;
    }

    public set cantidad(value: number) {
        this._cantidad = value;
    }

    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public set tipo(value: string) {
        this._tipo = value;
    }

    public set precio(value: number) {
        this._precio = value;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public set idPieza(value: string) {
        this._idPieza = value;
    }

    public set fabricante(value: string) {
        this._fabricante = value;
    }
    

}