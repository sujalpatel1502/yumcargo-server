import "dotenv/config"
import fastify from "fastify";
import { connectDB } from "./src/config/connect.js";
import { PORT } from "./src/config/config.js";
import { admin, buildAdminRouter } from "./src/config/setup.js";
import { registerRoutes } from "./src/routes/index.js";

// manav8424
// 9OjJQZw6VGem6v8u



// mongodb+srv://manav8424:1i93yY4iOge1lF2N@cluster0.ulpgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const start=async()=>{
    // console.log("envvv",process.env.MONGO_URI)

    await connectDB(process.env.MONGO_URI)
    const app=fastify();

    await registerRoutes(app)

    await buildAdminRouter(app)
    // const PORT=process.env.PORT || 3000;
    app.listen({port:PORT,host:"0.0.0"},(err,addr)=>{
        if(err){
            console.log("errr",err)
        }else{
            console.log(`yumcargo started on http://localhost:${PORT}${admin.options.rootPath}`)
        }
    })
}

start();