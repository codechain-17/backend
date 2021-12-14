import { error, info } from './config/logger.js'

import { ApiRouter } from './routes/apiRouter.js';
import MongoStore from 'connect-mongo';
import config from './config/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { Server as httpServer } from 'http';
import { load } from './loader/index.js';
import passport from 'passport';
import passportLocal from './middlewares/passportLocal.js';
import path from 'path';
import session from 'express-session';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const http = new httpServer(app);

load(http);

app.use(cors({
    origin: '*'
}));

app.use(
    session({
      store: MongoStore.create({
        mongoUrl:
          config.mongo_uri,
        ttl: 60
      }),
      secret: "123-456-789",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 600 },
      rolling: true,
    })
  );

app.use(cookieParser("secret"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passportLocal(passport);

const apiRouter = new ApiRouter();
app.use('/api', apiRouter.start());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

http.listen(config.port, () => {
    info(`Application on port ${config.port}`);
});
