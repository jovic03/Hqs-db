
import Sequelize from 'sequelize'
import { connection } from '../database/db.js'

export const Hqs = connection.define("hqs", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    artista: {
        type: Sequelize.STRING,
        allowNull: false
    },

    genero: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, 
{
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
}
)

const initTable = async () => {
    await Hqs.sync()
}

initTable()