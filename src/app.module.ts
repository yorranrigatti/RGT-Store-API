import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rgt-store.cdq3konolatu.sa-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'yorran',
      password: '17072000',
      database: 'rgt-store',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    /* ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
    }), */
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
