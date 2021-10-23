import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator';

class CreateLoginDTO {
  @IsNotEmpty()
  @MaxLength(11)
  @IsString()
  @IsDefined()
  readonly matricula: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  senha: string;
}

export default CreateLoginDTO;
