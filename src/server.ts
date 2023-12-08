import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Conexão com o servidor
// servidor 1
const runServer = (port: number, server: http.Server) => {
    server.listen(port, () => {
        console.log(`🚀 Running at POR ${port}`);
    });
}

// servidor 2 (produção)
const regularServer = http.createServer(app);
if (process.env.NODE_ENV === 'production' ) {
    // TODO: configurar SSL
    // TODO: rodar server na porta 80 e na 443
} else {
    const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 9000;
    runServer(serverPort, regularServer);
}
