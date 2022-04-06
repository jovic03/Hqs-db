import { Hqs } from '../models/Hqs.js'

export const getAll = async (req, res) => {
    try {
        const hqs = await Hqs.findAll({
            order: [["nome", "ASC"]]
        })
        res.status(200).render('index.ejs', {
            hqs,
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

// status(200) siginifca status ok, tuido certo
// status(500) mostra qual erro deu

export const getDetalhes = async (req, res) => {
    try {
        const hqs = await Hqs.findByPk(req.params.id)
        res.render('detalhes.ejs', {
            hqs
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const getCriar = (req, res) => {
    res.render('criar.ejs')
}

export const postCriar = async (req, res) => {
    try {
    const { nome, img, ano, artista, genero } = req.body
    const hqs = await Hqs.create({
        nome, img, ano, artista, genero
    })
    res.redirect('/')
    }
    catch(err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const getAllDelete = async (req, res) => {
    try {
        const hqs = await Hqs.findAll()
        res.status(200).render('deletar', {
            hqs
        })
    }
    catch(err) {
        res.status(500).send({err: err.message})
    }
}

export const getApagar = async (req, res) => {
    try {
        await Hqs.destroy({
            where: {
            id: req.params.id
        }})
        res.status(200).redirect("/")
    }
    catch(err){
        res.status(500).send({err: err.message})
    }
}

export const getFormEdit = async (req, res) => {
    const hqs = await Hqs.findByPk(req.params.id)
    res.status(200).render('editar.ejs', {hqs})
}

export const getPut = async (req, res) => {
    const { nome, img, ano, artista, genero } = req.body
    try {
        await Hqs.update({
            nome: nome,
            img: img,
            ano: ano,
            artista: artista,
            genero: genero
        }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).redirect('/')
        
    }

    catch(err) {
        res.status(500).send({err: err.message})
    }
}