import * as env from 'env-var';
import './dotenv';

const config = {
    server: {
        port: env.get('PORT').required().asPortNumber(),
        needAuth: env.get('NEED_AUTH').default('true').required().asBool(),
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asString(),
        collectionName: env.get('COLLECTION_NAME').required().asString(),
        userCollectionName: env.get('USER_COLLECTION_NAME').required().asString(),
    },
    keys: {
        initializationVector: env.get('VECTOR').example('length of 16 456').required().asString(),
        secretKey: env.get('SECRET_KEY').example('length of 36 45678901234567890123456').required().asString(),
        tokenKey: env.get('TOKEN_KEY').required().asString(),
    },
    rickAndMortyApi: {
        baseUrl: env.get('RICK_AND_MORTY_BASE_URL').required().asString(),
    },
};

export default config;
