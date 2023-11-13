import {NestFactory} from '@nestjs/core';
import session from 'express-session';
import {AppModule} from './app.module';
import MongoStore from 'connect-mongo';

const OneYear = 365 * 24 * 60 * 60 * 1000; // One year in milliseconds
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(session({
        secret: process.env.SESSION_SECRET,
        store: MongoStore.create({mongoUrl: process.env.MONGO_URL}),
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: OneYear,
            expires: new Date(Date.now() + OneYear),
            secure: process.env.NODE_ENV === 'production', // set to true if you're serving your site over HTTPS
            httpOnly: process.env.NODE_ENV === 'production' // helps prevent client-side script from accessing the data
        }
    }));
    await app.listen(process.env.PORT);
}

bootstrap();