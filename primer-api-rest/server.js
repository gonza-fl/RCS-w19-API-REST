import express from "express"
import userRoutes from "./src/routes/user.routes.js"
import "dotenv/config"

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
    res.status(200).send("<h1 style='color: red;'>Hola Mundo!</h1>");
});

app.get("/health", (_req, res) => {
    const fecha = new Date().toISOString();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
    };
    res.json({
        message: "OK",
        timestamp: fecha.toLocaleString("es-AR", options)
    });
});

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);

    const { SUPPORT_EMAILS } = process.env;
    const emails = SUPPORT_EMAILS.split(",");
    console.log("Soporte técnico: ", emails);
});
