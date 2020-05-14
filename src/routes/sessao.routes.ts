import { Router } from 'express';
import { getRepository } from 'typeorm';

import Usuario from '../models/Usuario';
import CriarUsuarioService from '../service/CriarUsuarioService';

const rotaUsuario = Router();

rotaUsuario.post('/', async (request, response) => {
  try {
    const { email, senha } = request.body;

    return response.json({ ok: true });
  } catch (err) {
    return response.status(400).json({ mensagem: err.message });
  }
});
