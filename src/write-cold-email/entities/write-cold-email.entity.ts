import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WriteColdEmail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;
}
