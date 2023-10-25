import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Movement {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    
    @Column()
    payment: boolean

    @Column()
    product_id: number

    @Column('decimal',{precision:8,scale:2})
    price: number

    @Column()
    discount:number

    @Column('decimal',{precision:8,scale:2})
    amount: number

    @Column()
    is_delete: boolean

}
