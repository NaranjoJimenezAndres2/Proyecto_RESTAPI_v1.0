import {Schema, model } from 'mongoose';

const granPremioSchema = new Schema({
    _idGranPremio: {
        type: String,
        required: true
    },
    _nombre: {
        type: String,
    },
    _fecha: {
        type: Date,
    },
    _pais: {
        type: String,
    },
    _clasificacion:[{}],
    
    _vueltaRapida: {
        type: Schema.Types.Mixed,
    },
    _abandonos: {
        type: Schema.Types.Mixed,
    }
});

export type iGranPremio = {
    _idGranPremio: string,
    _nombre: string,
    _fecha: Date,
    _pais: string,
    _clasificacion:[{}],
    _vueltaRapida: {
        type: Schema.Types.Mixed,
    },
    _abandonos: {
        type: Schema.Types.Mixed,
    }
}

export const granPremios = model('GranPremios', granPremioSchema);
