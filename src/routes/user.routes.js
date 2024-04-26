import { create } from "../controllers/user.controler.js"

const userRoutes = (app) => {
    app.post("/user", create)
}

export default userRoutes