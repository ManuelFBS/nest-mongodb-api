import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { CreateTodoDTO } from '../dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('create')
  public async create(@Body() createTodo: CreateTodoDTO) {
    return this.todoService.create(createTodo);
  }
}
