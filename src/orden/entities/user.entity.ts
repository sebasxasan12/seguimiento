import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Login } from "./login.entity";

@Entity({ name: 'MAN_User' })
export class User {
    @PrimaryGeneratedColumn('increment', {
        name: 'MAN_Id'
    })
    id: number;

    @Column('datetime', {
        name: 'MAN_FechCrea'
    })
    fechCrea: string;

    @Column('text', {
        name: 'MAN_Nombre'
    })
    nombre: string;

    @Column('text', {
        name: 'MAN_Apellido'
    })
    apellido: string;

    @Column('text', {
        name: 'MAN_Correo',
        nullable: true
    })
    correo: string;

    @Column('text', {
        name: 'MAN_Dni'
    })
    dni: string;

    @Column('int', {
        name: 'MAN_Unidad'
    })
    unidad: number;

    @Column('text', {
        name: 'MAN_Area'
    })
    area: number;

    @Column('int', {
        name: 'MAN_Estado'
    })
    estado: number;

    @Column('int', {
        name: 'MAN_Bandera'
    })
    bandera: number;

    @OneToOne(() => Login, login => login.userF)
    login: Login

}