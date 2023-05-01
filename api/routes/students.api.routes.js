import {Router} from 'express'
import * as controller from '../controllers/students.api.controllers.js'

const route = Router()

route.get('/students', controller.obtenerAlumnos)
route.post('/students', controller.crearAlumno)

route.get('/students/:legajo', controller.obtenerAlumnosPorLegajo)
route.put('/students/:legajo', controller.replaceAlumno)
route.patch('/students/:legajo', controller.updateAlumno)
route.delete('/students/:legajo', controller.borrarAlumno)

export default route