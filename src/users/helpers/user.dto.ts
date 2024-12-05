import { IsDefined, IsString } from "class-validator";

export class UserAccessDto {
    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @IsString()
    company: string;
}