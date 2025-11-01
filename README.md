# api-sis-vot
Repositorio para envió de prueba técnica de New Intech

🗳️ API REST - Sistema de Votación
API REST para gestión de votantes con Node.js, Express y MongoDB.

📦 Dependencias
Principales
express - Framework web
mongoose - ODM para MongoDB
jsonwebtoken - Autenticación JWT
bcryptjs - Encriptación - En caso de Autenticación con inicio de sesión
cors - Manejo de CORS - En caso de comunicación con Frontend
dotenv - Variables de entorno

Desarrollo
nodemon - Recarga automática

🚀 Instalación Rápida
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
📡 Endpoints
🔓 Públicos
GET [/api/generate-token](http://localhost:8090/generate-token) - Obtener token para pruebas

🔐 Protegidos (Requieren JWT)
POST [/api/voters/registerVoter](http://localhost:8090/voters/registerVoter) - Registrar votante

GET [/api/voters/obtVoters](http://localhost:8090/voters/obtVoters) - Listar votantes

GET [/api/voters/obtDetVoter/:id](http://localhost:8090/voters/obtDetVoter/69055b1768f798c70c7e5461) - Detalles de votante

DELETE [/api/voters/deleteVoter/:id](http://localhost:8090/voters/deleteVoter/69055b1768f798c70c7e5461) - Eliminar votante

POST [/api/candidates/registerCandidate](http://localhost:8090/candidates/registerCandidate) - Registrar canditato

GET [/api/candidates/obtCandidates](http://localhost:8090/candidates/obtCandidates) - Listar canditatos

GET [/api/candidates/obtDetCandi/:id](http://localhost:8090/candidates/obtDetCandi/69056926e015213392de7ed0) - Detalles de canditato

DELETE [/api/candidates/deleteCandi/:id](http://localhost:8090/candidates/deleteCandi/690605329f7db07cfc6a4279) - Eliminar canditato

POST [/api/votes/votar](http://localhost:8090/votes/votar) - Registrar voto

GET [/api/votes/getVotes](http://localhost:8090/votes/getVotes) - Listar votos

GET [/api/votes/statistics](http://localhost:8090/votes/statistics) - Estadisticas

🧪 Uso en Postman
Obtener token:

text
GET http://localhost:8090/generate-token
Usar en endpoints:
text
GET http://localhost:8090/voters/obtVoters
Headers: Authorization: Bearer [token]

POST http://localhost:8090/voters/registerVoter
Headers: Authorization: Bearer [token]
Body: {
  "nombre": "Monti Alvarez",
  "email": "monti@email.com"
}

🛠️ Scripts
npm start      # Producción: node server
npm run dev    # Desarrollo: nodemon server
Servidor en: http://localhost:8090
