import express from 'express';
import { Server as httpServer } from 'http';
import { ApiRouter } from './routes/apiRouter.js';
import config from './config/index.js';
import { load } from './loader/index.js';
import { info, error } from './config/logger.js'
import cors from 'cors';

const app = express();
const http = new httpServer(app);

await load(http);
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'));
const apiRouter = new ApiRouter);
app.use('/api', apiRouter.start());


http.listen(config.port, () => {
    info(`Application on port ${config.port}`);
});
