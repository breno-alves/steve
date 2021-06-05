import CreateProfileDTO from '../dtos/CreateProfileDTO';
import Profile from '../infra/typeorm/entities/Profile';

export default interface IProfilesRepository {
  create(data: CreateProfileDTO): Promise<Profile>;
  findById(profileId: string): Promise<Profile>;
  save(profile: Profile): Promise<Profile>;
}
