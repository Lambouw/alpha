import { Module } from '@nestjs/common';

// Modules
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
