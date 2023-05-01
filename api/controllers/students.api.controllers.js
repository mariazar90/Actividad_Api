import * as service from '../../services/alumnos.services.js'

function obtenerAlumnos(req,res){
    service.obtenerAlumnos({deleted:true})
    .then(function(alumnos){
        res.status(200).json(alumnos)
    })
}

function crearAlumno(req,res){
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        anio: req.body.anio
    }

    service.crearAlumno(alumno)
        .then(function(alumno){
         res.status(201).json(alumno)
        })
    }

function obtenerAlumnosPorLegajo(req,res){
    const legajo = req.params.legajo 

    service.obtenerAlumnosPorLegajo(legajo)
    .then(function(alumno){
        if(alumno){
            res.status(200).json(alumno)
        } else {
            res.status(404).json({error:{message: `No existe el alumno con legajo ${legajo}`}})
        }
    })
}

function replaceAlumno(req,res){
    const legajo = req.params.legajo

    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        anio: req.body.anio
    }

    service.modificarAlumno(legajo, alumno)
    .then(function(alumno){
        if(alumno){
            res.status(200).json(alumno)
        } else {
            res.status(404).json({error:{message: `No existe el alumno con legajo ${legajo}`}})
        }
    })

}

function updateAlumno(req,res){
    const legajo = req.params.legajo

    const alumno = {}

    if(req.res.nombre){
        alumno.nombre = req.res.nombre
    }
    if(req.body.apellido){
        alumno.apellido = req.body.apellido
    }
    if(req.body.anio){
        alumno.anio = req.res.anio
    }

    service.modificarAlumno(legajo, alumno)
    .then(function(alumno){
        if(alumno){
            res.status(200).json(alumno)
        } else {
            res.status(404).json({error:{message: `No existe el alumno con legajo ${legajo}`}})
        }
    })
}

function borrarAlumno(req,res){
    const legajo = req.params.legajoAlumno

    service.borrarAlumno(legajo)
    .then(function(alumno){
        if(alumno){
            res.status(200).json(alumno)
        } else {
            res.status(404).json({error:{message: `No se pudo borrar el alumno con legajo ${legajo}`}})
        }
    })
  }

export{
    obtenerAlumnos,
    crearAlumno,
    obtenerAlumnosPorLegajo,
    replaceAlumno,
    updateAlumno,
    borrarAlumno
}