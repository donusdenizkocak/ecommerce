import { Request } from 'express';
import { Response } from 'express';
import { NextFunction } from 'express';
import { AppDataSource } from '../data-source';
import { Product } from '../entity/Product';




export class ProductController {
    private productRepository = AppDataSource.getRepository(Product)

    async all(request:Request, response: Response, next:NextFunction) {
        return this.productRepository.find()
    }
}