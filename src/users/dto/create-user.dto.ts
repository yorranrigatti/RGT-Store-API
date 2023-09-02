import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @Length(1, 255)
  @IsString()
  firstName: string;

  @Length(1, 255)
  @IsString()
  lastName: string;

  @IsEmail()
  @IsString()
  email: string;

  @Matches(
    RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    ),
    {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.',
    },
  )
  @IsString()
  password: string;
}
