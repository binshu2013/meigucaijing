import { IsEmail, IsOptional, IsString } from "class-validator";

export class EmailMsgDto {
    @IsEmail()
    email: string;

    @IsOptional()
    message: string;

    @IsString()
    subject: string;

    @IsString()
    @IsOptional()
    username: string;
}