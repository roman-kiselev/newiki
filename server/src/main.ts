import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

function createDocumentation(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .setExternalDoc('Схема API', '/docs-yaml')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config, {
    deepScanRoutes: true,
  });

  return documentFactory;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  const openDocument = createDocumentation(app);
  SwaggerModule.setup('/docs', app, openDocument);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
