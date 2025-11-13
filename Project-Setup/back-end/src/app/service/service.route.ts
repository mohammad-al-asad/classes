import expres from "express"
import { getAllServices } from "./service.controller.js"
const ServiceRouter = expres.Router()

ServiceRouter.get("/",getAllServices)

export default ServiceRouter