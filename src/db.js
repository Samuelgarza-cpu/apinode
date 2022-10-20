import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: '162.241.2.109',
    user: 'gruposav_admin',
    password: '@dm1nSQL2014',
    database: 'gruposav_cafeteria'
})