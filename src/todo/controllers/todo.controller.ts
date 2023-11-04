import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { CreateTodoDTO } from '../dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('create')
  public async create(@Body(new ValidationPipe()) createTodo: CreateTodoDTO) {
    return this.todoService.create(createTodo);
  }
}
