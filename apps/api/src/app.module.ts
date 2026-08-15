import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './modules/health/health.module';
import { PermissionModule } from './modules/permission/permission.module';

@Module({
  imports: [DatabaseModule, HealthModule, PermissionModule],
})
export class AppModule {}
