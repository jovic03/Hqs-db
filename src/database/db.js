import Sequelize from 'sequelize';//conecta com banco de dados
import dotenv from 'dotenv'//nao subir dados sensiveis

dotenv.config()//variavel interna de ambiente pra configurar o servidor

// export const connection = new Sequelize( //faz a conexão
//     process.env.DB_BASE,//acessando todos os config apartir do .env
//     process.env.DB_USER,//tem que ser nesta ordem
//     process.env.DB_PASS,

//     {
//             host: process.env.DB_HOST,
//             port: 5432,
//             dialect:'postgres'
//     }
// )


export const connection = new Sequelize(
    process.env.DB_URL,
    // process.env.DB_BASE,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)