import {Schema, model } from 'mongoose';

const vehiculoSchema = new Schema({
    _idVehiculo: {
        type: String,
        required: true
    },
    _idPiloto: {
        type: String,
    },
    _marca: {
        type: String,
    },
    _modelo: {
        type: String,
    },
    _idMonoplaza: {
        type: String,
    },
    _motor: {
        type: String,
    },
    _patrocinadores: {
        type: [String],
    },
    _asistenciaMedica: {
        type: Boolean,
    },
    _asistenciaTecnica: {
        type: Boolean,
    }
});

export type iVehiculo = {
    _idVehiculo: string,
    _idPiloto: string,
    _marca: string,
    _modelo: string,
}

export type iMonoplaza = {
    _idVehiculo: string,
    _idMonoplaza: string,
    _idPiloto: string,
    _marca: string,
    _modelo: string,
    _motor: string,
    _patrocinadores: [string],
}

export type iSoporte = {
    _idVehiculo: string,
    _idPiloto: string,
    _marca: string,
    _modelo: string,
    _asistenciaMedica: boolean,
    _asistenciaTecnica: boolean,
}

export const Vehiculos = model('Vehiculos', vehiculoSchema);