import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'email@email.com', description: 'Почтовый адрес' })
    @Column({ unique: true })
    email: string;

    @ApiProperty({ example: 'password', description: 'Пароль' })
    @Column()
    password: string;

    status: boolean;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;

    @ApiProperty({ example: '22.12.2022', description: 'Дата регистрации' })
    @CreateDateColumn()
    createdAt: Date;
}
