import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Player } from './entity/player.entity'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Player)
    private userRepository: Repository<Player>,
  ) {}

  async add(user: Player): Promise<void> {
    await this.userRepository.save(user);
  }

  findAll(): Promise<Player[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<Player> {
    return this.userRepository.findOne(id);
  }

  async modify(user: Player): Promise<void> {
    const userNew = await this.userRepository.findOne(user.id);
    userNew.firstName = user.firstName;
    userNew.lastName = user.lastName;
    userNew.isActive = user.isActive;
    await this.userRepository.save(userNew);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
