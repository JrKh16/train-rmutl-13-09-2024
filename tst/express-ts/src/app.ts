import "dotenv/config" 
import express, { Express, Request, Response,NextFunction } from 'express'
import cors from 'cors'
import { myapiRoute } from "./lib/myapi"
import { fruitRoute } from "./lib/fruit"

const app: Express = express()
const port = Number(process.env.PORT) || 3000

app.use('/api/myapi',myapiRoute)
app.use('/api/fruits',fruitRoute)
app.use(cors())
app.use(express.json())
app.use(express.raw())
app.use(express.urlencoded({extended:true}))


// let apikey="123456789"
// app.use((req:Request,res:Response,next:NextFunction)=>{
//   console.log("Middleware")
//   if(req.headers.apikey!==apikey ){
//     return res.status(401).json({error:"Unauthorized"})
//   }
//   next()
// })

app.get('/hello',(req,res)=>{
    
    res.send("Hello 'YOKA'")
})
app.get('/',(req,res)=>{
    res.send("Hello Express")
})
app.listen(port, () => console.log(`running on port ${port}`))