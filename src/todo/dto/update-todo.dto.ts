import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatus } from '../schemas/todo.schema';

export class UpdateTodoDTO {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status: TodoStatus;
}
