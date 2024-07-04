import bcrypt from 'bcrypt'
const SALT_ROUNDS : number = 10
//Esta función se encarga de encriptar un password
export const hashPassword = async (password:string):Promise<string> => {
    return await bcrypt.hash(password, SALT_ROUNDS)
}

//Esta función se encarga de comparar un password
export const comparePassword = async (password:string, hashPassword:string):Promise<boolean> => {
    return await bcrypt.compare(password, hashPassword)
}