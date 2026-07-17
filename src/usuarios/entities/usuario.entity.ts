import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'usuarios' })
export class Usuario {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', {
        nullable: false,
    })
    name: string;

}
