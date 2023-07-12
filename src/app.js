import express from "express";

import { productRouter } from "./routes/product.route.js";
import { userRouter } from "./routes/user.route.js";
import { errorHandler } from "./middlewares/errorhandler.js";

const PORT  = 8080;

const app = express();

app.use(errorHandler);

app.use(express.json());

app.use('/mockingproducts', productRouter);

app.use('/api/users', userRouter);

app.listen(PORT, () => console.log(`Server Listening on PORT: ${PORT}`));