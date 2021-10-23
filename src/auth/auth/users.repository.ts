import { EntityRepository, Repository } from 'typeorm';
import CreateLoginDTO from '../create-login.dto';
import Usuario from '../usuario.entity';

@EntityRepository(Usuario)
class UsuariosRepository extends Repository<Usuario> {
  async findByMatricula({
    matricula,
    senha,
  }: CreateLoginDTO): Promise<Usuario | undefined> {
    return this.findOne({
      where: {
        usu_codigo: matricula,
        usu_senha: senha,
      },
    });
  }
}

export default UsuariosRepository;
