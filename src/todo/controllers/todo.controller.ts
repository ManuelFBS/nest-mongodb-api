import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { CreateTodoDTO } from '../dto/create-todo.dto';
import { UpdateTodoDTO } from '../dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('create')
  public async create(@Body(new ValidationPipe()) createTodo: CreateTodoDTO) {
    return this.todoService.create(createTodo);
  }

  @Get('getall')
  public async findAll() {
    return this.todoService.findAll();
  }

  @Get('find/:id')
  public async findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Put('update/:id')
  public async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateTodo: UpdateTodoDTO,
  ) {
    return this.todoService.update(id, updateTodo);
  }

  @Delete('del/:id')
  public async delete(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
