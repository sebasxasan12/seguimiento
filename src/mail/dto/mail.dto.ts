import { IsArray, IsString, MinLength } from "class-validator";

export class MailDto {
    @IsString()
    @MinLength(1)
    path: string;

    @IsString({
        each: true,
    })
    @IsArray()
    recipients: string[];
}