import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      //`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.irhtnet.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`,
      `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.proxy.rlwy.net:46974/${process.env.MONGODB_DBNAME}?authSource=admin`,
    ),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

// 'mongodb+srv://manuelfbs:321Shalom321@cluster0.irhtnet.mongodb.net/nestjsdb?retryWrites=true&w=majority'
//
export class AppModule {}
