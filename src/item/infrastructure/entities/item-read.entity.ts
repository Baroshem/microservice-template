import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ItemReadEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  transformedName: string;

  constructor(id: number, name: string, transformedName: string) {
    super();
    this.id = id;
    this.name = name;
    this.transformedName = transformedName;
  }
}
