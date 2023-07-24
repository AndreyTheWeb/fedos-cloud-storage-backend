import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'vader@mail.ru',
  })
  email: string;

  @ApiProperty({
    default: 'mistarpidar',
  })
  fullName: string;

  @ApiProperty({
    default: '123',
  })
  password: string;
}
