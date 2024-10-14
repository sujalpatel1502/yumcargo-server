import { confirmOrder, createOrder, getOrder, getOrderById, updateOrderStatus } from "../controllers/order/order.js"
import { verifyToken } from "../middleware/auth.js"



export const orderRoutes = async(fastify,options)=>{
    fastify.addHook("preHandler",async(request,reply)=>{
        const isAuthenticated=await verifyToken(request,reply)
        if(!isAuthenticated){
            return reply.code(401).send({message:"Unauthorizeddddd"})
        }
})

fastify.post('/order',createOrder)
fastify.get('/order',getOrder)
fastify.patch('/order/:orderId/status',updateOrderStatus)
fastify.post('/order/:orderId/confirm',confirmOrder)
fastify.post('/order/:orderId',getOrderById)

}