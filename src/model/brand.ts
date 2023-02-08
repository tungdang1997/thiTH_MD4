import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    idBrand: number;
    @Column({type:"text"})
    nameBrand: string;
    @Column({type:"text"})
    describe: string
}