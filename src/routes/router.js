import express from 'express'
import { getAll, 
    getDetalhes, 
    getCriar, 
    postCriar, 
    getApagar,
    getPut,
    getFormEdit
} from '../controllers/HqsController.js'

export const routes = express.Router()

routes.get('/', getAll)
routes.get('/detalhes/:id', getDetalhes)

routes.get('/criar', getCriar)
routes.post('/criar', postCriar)

routes.get('/apagar/:id', getApagar)

routes.get('/editar/:id', getFormEdit)
routes.post('/editar_enviar/:id', getPut)
 
