import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import Usuario from '../models/Usuario';

interface Request {
  email: string;
  senha: string;
}

class AutenticarUsuarioService {
  public async execute({ email, senha }: Request): Promise<void> {
    const repositorioUsuario = getRepository(Usuario);

    const usuario = await repositorioUsuario.findOne({ where: { email } });

    if (!usuario) {
      throw new Error('Incorrect email/senha combination');
    }

    const comparaSenha = await compare(senha, usuario.senha);

    if (!comparaSenha) {
      throw new Error('Incorrect email/senha combination');
    }
  }
}

export default AutenticarUsuarioService;
