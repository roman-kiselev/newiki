import { ConfigService, registerAs } from '@nestjs/config';

const dataForJwt = (configService: ConfigService) => {
  return {
    secret: configService.get('JWT_SECRET'),
    audience: configService.get('JWT_AUDIENCE'),
    issuer: configService.get('JWT_ISSUER'),
    accessTtl: configService.get('JWT_ACCESS_TTL'),
    refreshTtl: configService.get('JWT_REFRESH_TTL'),
  };
};

export const jwtConfig = registerAs('jwt', () =>
  dataForJwt(new ConfigService()),
);

// export default registerAs('jwt', () => {
//   return {
//     secret: process.env.JWT_SECRET,
//     audience: process.env.JWT_AUDIENCE,
//     issuer: process.env.JWT_ISSUER,
//     accessTtl: process.env.JWT_ACCESS_TTL,
//     refreshTtl: process.env.JWT_REFRESH_TTL,
//   };
// });
