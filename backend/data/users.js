import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10) ,
        isAdmin: true,
    },
    {
        name: 'john Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10)  ,
    },
    {
        name: 'mike Myers',
        email: 'mike@example.com',
        password: bcrypt.hashSync('123456', 10)  ,
    },
]

export default users