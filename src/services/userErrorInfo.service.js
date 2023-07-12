export const generateUserErrorInfo = (user) => {

    return `
        Alguno de los campos para crear el usuario no es válido.\n
        Lista de campos requeridos:\n
        first_name: Debe ser un campo string, se recibió ${user.first_name}\n
        last_name: Debe ser un campo string, se recibió ${user.last_name}\n
        email: Debe ser un campo string, se recibió ${user.email}\n
    `

};