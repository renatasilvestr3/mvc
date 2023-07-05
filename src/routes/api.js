import express from 'express'
import ApiContreller from '../controllers/apiControllers.js';

const router = express.Router();

router
.get("/", ApiContreller.getAllApis)