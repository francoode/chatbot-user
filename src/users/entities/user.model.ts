
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 256, nullable: false})
  name: string;

  @Column({length: 256, nullable: false})
  company: string;
}
