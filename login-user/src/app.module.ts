import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { HotelsModule } from './modules/hotels/hotels.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://pepealkalina:pepepilas@firstdb.obvg7ok.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    AuthModule,
    HotelsModule
],
})
export class AppModule {}
