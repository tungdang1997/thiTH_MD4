import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:"text"})
    name: string
    @Column({type:"int"})
    price: number
    @Column()
    quantity: number
    @Column()
    brand: number

}