import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product } from "./entity/Product"
import { Address } from "./entity/Address"
import { Movement } from "./entity/Movement"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",   //burayı mysql ile doldur
    password: "",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User,Product,Address,Movement],
    migrations: [],
    subscribers: [],
})
