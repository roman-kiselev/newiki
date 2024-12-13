import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { IamModule } from './iam/iam.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    IamModule,
    ConfigModule.forRoot({
      validationSchema: {
        JWT_SECRET: Joi.string().required(),
        JWT_ACCESS_TTL: Joi.string().required(),
        JWT_REFRESH_TTL: Joi.string().required(),
        JWT_ISSUER: Joi.string().required(),
        JWT_AUDIENCE: Joi.string().required(),

        DB_TYPE: Joi.string().valid('postgres'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().integer().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),

        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().integer().required(),

        THROTTLE_TTL_SECONDS: Joi.number().integer().required(),
        THROTTLE_LIMIT: Joi.number().integer().required(),

        MAIL_SERVICE: Joi.string().required(),
        MAIL_USER: Joi.string().required(),
        MAIL_PASS: Joi.string().required(),
      },
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
