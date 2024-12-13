import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
    private readonly logger = new Logger(AuthenticationService.name);

    constructor() {}

    async signUp(signUpDto: SignUp) {}
}
