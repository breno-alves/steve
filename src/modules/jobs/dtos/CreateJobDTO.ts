import { SeniorityLevel } from '../infra/typeorm/entities/Job';

export default interface CreateJobDTO {
  name: string;
  description: string;
  salary?: number;
  currency?: string;
  seniorityLevel?: SeniorityLevel;
  url: string;
  creatorId: string;
}
