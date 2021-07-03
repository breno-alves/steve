import { Currency } from '../infra/typeorm/entities/Job';
export default interface CreateJobDTO {
  name: string;
  description: string;
  salary?: number;
  currency?: Currency;
  seniorityLevel?: string[];
  URL: string;
  labels?: string[];
  creatorId: string;
}
