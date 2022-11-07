import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/users.schema';
//import { CreateCatDto } from './dto/create-cat.dto';
import { Model } from 'mongoose';

export type User = any;

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private UsersModel: Model<UsersDocument>) {}

  async create(createCatDto: any): Promise<User> {
    const createdCat = new this.UsersModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.UsersModel.find().exec();
  }
    private readonly users = [
        {
          userId: 1,
          username: 'hola',
          password: 'mundo',
        }
      ];
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
