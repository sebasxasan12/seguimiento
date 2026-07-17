import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Login } from "./login.entity";

@Entity('MAN_Orden')
export class Orden {

    @PrimaryGeneratedColumn('increment', {
        name: 'MAN_Id'
    })
    id: number;

    @Column('datetime', {
        name: 'MAN_FechCrea'
    })
    fechCrea: string;

    // @Column('int', {
    //     name: 'MAN_Responsable'
    // })
    // responsable: number;

    @Column('int', {
        name: 'MAN_Activo'
    })
    activo: number;

    @Column('int', {
        name: 'MAN_TipoMantenimiento'
    })
    tipo: number;

    @Column('text', {
        nullable: true,
        name: 'MAN_Solicitud'
    })
    solicitud: string;

    @Column('text', {
        nullable: true,
        name: 'MAN_FechFinal'
    })
    fechFinal: string;

    @Column('text', {
        nullable: true,
        name: 'MAN_Description'
    })
    descripcion: string;

    @Column('text', {
        name: 'MAN_Responsables'
    })
    responsables: string;

    @Column('int', {
        name: 'MAN_Eliminado'
    })
    eliminado: number;

    @Column('int', {
        nullable: true,
        name: 'MAN_DeletedBy'
    })
    deletedBy: number;

    @Column('datetime', {
        nullable: true,
        name: 'MAN_DeleteDate'
    })
    deleteDate: string;

    @Column('text', {
        name: 'MAN_Comentario'
    })
    comentario: string;

    @ManyToOne(() => Login, login => login.ordenes)
    @JoinColumn({ name: 'Man_Responsable' })
    responsable: Login;

}
