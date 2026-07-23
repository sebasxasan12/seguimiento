import { IsArray, IsOptional, IsString, MinLength } from "class-validator";

export class MailDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    path: string;

    @IsString({
        each: true,
    })
    @IsArray()
    @IsOptional()
    recipients: string[];
}