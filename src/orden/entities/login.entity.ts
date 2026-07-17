import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Orden } from "./orden.entity";
import { User } from "./user.entity";

@Entity({ name: 'MAN_Login' })
export class Login {
    @PrimaryGeneratedColumn('increment', {
        name: 'MAN_Id'
    })
    id: number;

    @Column('datetime', {
        name: 'MAN_FechCrea'
    })
    fechCrea: string;

    @Column('text', {
        name: 'MAN_User'
    })
    user: string;

    @Column('text', {
        name: 'MAN_Password'
    })
    password: string;

    // @Column('int', {
    //     name: 'MAN_UserF'
    // })
    // userF: number;

    @Column('int', {
        name: 'MAN_Pinit'
    })
    pinit: number;

    @Column('int', {
        name: 'MAN_Estado'
    })
    estado: number;

    @OneToOne(() => User, user => user.login)
    @JoinColumn({ name: 'MAN_UserF' })
    userF: User;

    @OneToMany(() => Orden, orden => orden.responsable)
    ordenes: Orden[];

    // @ManyToMany(()=>Orden)
    // @JoinColumn ({name:'MAN_Responsable'})

}