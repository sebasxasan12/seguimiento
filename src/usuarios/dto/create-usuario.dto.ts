import { IsString, MinLength } from "class-validator";
export class CreateUsuarioDto {

    @IsString()
    @MinLength(1)
    name: string

}
