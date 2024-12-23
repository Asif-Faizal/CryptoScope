import { Document, Schema, model } from 'mongoose';

export interface ICrypto {
    name: string;
    price: number;
    description: string;
    isRedOrGreen: boolean;
    _24hrValue: number;
}

export interface CryptoDocument extends ICrypto, Document {}

const cryptoSchema = new Schema<CryptoDocument>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    isRedOrGreen: { type: Boolean, required: true },
    _24hrValue: { type: Number, required: true }
});

export const CryptoModel = model<CryptoDocument>('Crypto', cryptoSchema);