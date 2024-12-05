import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export abstract class BaseCrudService<T> {
  protected abstract repository: Repository<T>;

  findAll(): Promise<T[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<T | null> {
    return this.repository.findOneBy({ id } as any);
  }

  async findOneOrFail(id: number): Promise<T | null> {
    const entity = this.repository.findOneBy({ id } as any);
    if(!entity) throw new Error(`The entity with ID ${id} was not found.`);
    return entity;
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
