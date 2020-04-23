// ? TS import syntax so TS has better support and auto complete
import express, { Request, Response, NextFunction } from 'express'
import todoRoutes from './routes/todo-routes'
import { json } from 'body-parser'

const app = express();

// parses body of all incoming requests and extracts json data to place in req.body
app.use(json())

// ? All Requests starting with todos will use imported routes
app.use('/todos', todoRoutes)

// ? handles error if any other middleware has error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    res.status(500).json({ message: err.message })

})

app.listen(3000)