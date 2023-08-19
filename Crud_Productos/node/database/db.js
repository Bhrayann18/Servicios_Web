/*Como se trabaja una base de datos relacional de importa el sequelize*/
import {Sequelize} from 'sequelize'
/*Se asigan el password el nombre de la db, el nombre de usuario y el host*/
const db = new Sequelize('auth_db', 'root', 'keynton',{
    host:'localhost',
    dialect: 'mysql'
})

export default db