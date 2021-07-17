const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/server.ts']

const doc = {
    info: {
        version: '1.0.0',
        title: 'Finanças API',
        description: 'Documentação de utilização da API'
    },
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apikey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    },
    definitions: {
        User: {
            name: "Daniel Guerra",
            email: "danielguerra@gmail.com",
            
        },
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
})