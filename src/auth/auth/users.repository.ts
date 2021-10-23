import { EntityRepository, Repository } from 'typeorm';
import Usuario from '../usuario.entity';

@EntityRepository(Usuario)
class UsuariosRepository extends Repository<Usuario> {
  async findByMatricula(matricula: string): Promise<Usuario | undefined> {
    return this.findOne({
      where: {
        usu_codigo: matricula,
      },
    });
  }
}

export default UsuariosRepository;
