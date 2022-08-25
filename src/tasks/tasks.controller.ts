import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterFDto } from './dto/gte-tasks-filter.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/:id')
  findById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  insert(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.insert(createTaskDto);
  }

  @Get()
  getTasks(@Query() filterDto: GetTaskFilterFDto): Promise<Task[]> {
    return this.tasksService.getTasks(filterDto);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteById(id);
  }

  @Patch('/:id/status')
  updateStatusById(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> {
    return this.tasksService.updateStatusById(id, updateTaskStatusDto);
  }
}
