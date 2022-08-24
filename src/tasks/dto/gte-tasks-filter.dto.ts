import { TaskStatus } from '../tasks.model';

export class GetTaskFilterFDto {
  status?: TaskStatus;
  search?: string;
}
