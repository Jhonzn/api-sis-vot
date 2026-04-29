# api-sis-vot
Repositorio para envió de prueba técnica de New Intech

API REST - Sistema de Votación
API REST para gestión de votantes con Node.js, Express y MongoDB.

Dependencias
Principales
express - Framework web
mongoose - ODM para MongoDB
jsonwebtoken - Autenticación JWT
bcryptjs - Encriptación - En caso de Autenticación con inicio de sesión
cors - Manejo de CORS - En caso de comunicación con Frontend
dotenv - Variables de entorno

Desarrollo
nodemon - Recarga automática

Instalación Rápida
# 1. Clonar e instalar
git clone https://github.com/Jhonzn/api-sis-vot
cd api-rest-sisvot
npm install

npm install mongoose cors dotenv bcryptjs jsonwebtoken mongodb

npm install --save-dev nodemon

npm install express

npm init

# 2. Verificar .env (ya incluido)
# URI de DB en Atlas
MONGODB_URI=mongodb+srv://BookAplication:aplicaciondelibros@cluster0.plnmdkz.mongodb.net/votantes?retryWrites=true&w=majority&appName=Cluster0
# Secret
JWT_SECRET=supervotantecan123

# 3. Ejecutar
npm run dev
Endpoints
Públicos
GET [/api/token](http://localhost:8090/token) - Obtener token para pruebas

Protegidos (Requieren JWT)
POST [/api/voters](http://localhost:8090/voters) - Registrar votante

GET [/api/voters](http://localhost:8090/voters) - Listar votantes

[GET [/api/voters/filter](http://localhost:8090/voters/filter)](http://localhost:8090/api/voters/filter?name=Manuel%20James&page=1&limit=10
) - Filtrar votante y paginación

GET [/api/voters/:id](http://localhost:8090/voters/69055b1768f798c70c7e5461) - Detalles de votante

DELETE [/api/voters/:id](http://localhost:8090/voters/69055b1768f798c70c7e5461) - Eliminar votante

POST [/api/candidates](http://localhost:8090/candidates) - Registrar canditato

GET [/api/candidates](http://localhost:8090/candidates) - Listar canditatos

[GET [/api/candidates/filter](http://localhost:8090/candidates/filter)](http://localhost:8090/api/candidates/filter?name=Luis%20Manuel&page=1&limit=10
) - Filtrar votante y paginación

GET [/api/candidates/:id](http://localhost:8090/candidates/69056926e015213392de7ed0) - Detalles de canditato

DELETE [/api/candidates/:id](http://localhost:8090/candidates/690605329f7db07cfc6a4279) - Eliminar canditato

POST [/api/votes](http://localhost:8090/votes) - Registrar voto

GET [/api/votes](http://localhost:8090/votes) - Listar votos

GET [/api/votes/statistics](http://localhost:8090/votes/statistics) - Estadisticas

Uso en Postman
Obtener token:

text
GET http://localhost:8090/token
Usar en endpoints:
text
GET http://localhost:8090/voters
Headers: Authorization: Bearer [token]

POST http://localhost:8090/voters
Headers: Authorization: Bearer [token]
Body: {
  "name": "Monti Alvarez",
  "email": "monti@email.com"
}

Scripts
npm start      # Producción: node server
npm run dev    # Desarrollo: nodemon server
Servidor en: http://localhost:8090
