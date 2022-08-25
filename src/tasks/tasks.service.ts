import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterFDto } from './dto/gte-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  getTaskById(id: string): Promise<Task> {
    return this.taskRepository.findById(id);
  }

  getTasks(filterDto: GetTaskFilterFDto): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto);
  }

  insert(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.insert(createTaskDto);
  }

  deleteById(id: string): Promise<void> {
    return this.taskRepository.deleteById(id);
  }

  updateStatusById(
    id: string,
    updateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;
    return this.taskRepository.updateStatusById(id, status);
  }
}
