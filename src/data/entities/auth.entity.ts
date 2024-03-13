// Entité pour l'authentification des utilisateurs, associé à un utilisateur.

import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { SubscriberEntity } from './subscriber.entity';

@Entity()
export class AuthEntity {
  @Column({
    primary: true,
  })
  username: string;

  @Column({
    primary: true,
  })
  password: string;

  @Column({
    primary: true,
  })
  salt: string;

  @ManyToOne(() => SubscriberEntity, (subscriber) => subscriber.auth)
  @JoinColumn()
  @Index()
  subscriber: SubscriberEntity;

  @CreateDateColumn()
  createdDate: Date;
}
