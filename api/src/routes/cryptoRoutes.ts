import express from 'express';
import { createCrypto, getCryptos } from '../controllers/cryptoController';

const router = express.Router();

// Route to add a new cryptocurrency
router.post('/cryptos', createCrypto);

// Route to fetch paginated list of cryptocurrencies
router.get('/cryptos', getCryptos);

export default router;
