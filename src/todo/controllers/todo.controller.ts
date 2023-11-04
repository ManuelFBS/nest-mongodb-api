import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from '../services/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('create')
  public async create(@Body() createTodo: any) {
    return this.todoService.create(createTodo);
  }
}
