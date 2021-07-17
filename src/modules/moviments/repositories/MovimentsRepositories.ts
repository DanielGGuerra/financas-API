import { EntityRepository, Repository } from "typeorm";
import { Moviment } from "../entities/Moviment";

@EntityRepository(Moviment)
export class MovimentsRepositories extends Repository<Moviment> {
    
}