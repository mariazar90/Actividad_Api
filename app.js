import express from "express";
import alumnoRoute from './routes/alumnos.routes.js'
import alumnoRouteApi from './api/routes/students.api.routes.js'


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/api', express.json());
app.use("/", express.static("public"));

app.use('/',alumnoRoute)
app.use('/api',alumnoRouteApi)

app.listen(2023, function () {
  console.log("Servidor funcionando :)");
});
