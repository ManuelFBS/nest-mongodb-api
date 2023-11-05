import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../schemas/todo.schema';
import { Model } from 'mongoose';
import { CreateTodoDTO } from '../dto/create-todo.dto';
import { UpdateTodoDTO } from '../dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  public async create(todo: CreateTodoDTO) {
    const createdTodo = new this.todoModel(todo);

    return createdTodo.save();
  }

  public async findAll() {
    return this.todoModel.find().exec();
  }

  public async findOne(id: string) {
    return this.todoModel.findById(id).exec();
  }

  public async update(id: string, todo: UpdateTodoDTO) {
    return this.todoModel
      .findByIdAndUpdate(id, todo, {
        new: true,
      })
      .exec();
  }

  public async delete(id: string) {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
