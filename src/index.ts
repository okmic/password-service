import 'reflect-metadata'
import express, {Request, Response, NextFunction} from 'express'
import dotenv from "dotenv"
import { DataSource } from 'typeorm'
import ormconfig from './ormconfig'
dotenv.config()

const app = express()
const PORT = process.env.PORT as string

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: "404 NOT FOUND" });
})

const AppDataSource = new DataSource(JSON.parse(JSON.stringify(ormconfig)))

AppDataSource.initialize()
.then(() => {
  console.log("Db connection done.")
  app.locals.dataSource = AppDataSource
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})
.catch(error => {
  console.error("Error connecting tb", error)
})