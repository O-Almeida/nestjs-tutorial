import { TaskStatus } from '../tasks.model';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class GetTaskFilterFDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
