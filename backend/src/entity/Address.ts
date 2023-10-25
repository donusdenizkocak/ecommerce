import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    line: string

    @Column()
    district: string

    @Column()
    city: string

    @Column()
    country:string

    @Column()
    post_code: number

    @Column()
    user_id: number

}
