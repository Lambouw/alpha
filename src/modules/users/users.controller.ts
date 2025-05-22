import { Controller, Get } from '@nestjs/common';
// DTOs
import { UserDto } from '../../dtos/user.dto';

@Controller('v1/users')
export class UsersController {
  @Get()
  findAll(): UserDto[] {
    return [{ id: 1, name: 'John Doe', email: 'john.doe@example.com' }];
  }
}
