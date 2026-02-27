import { User } from '../domain/Users.js';

export class CreateUser {
    constructor (userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        const user = new User (userData.name, userData.email);

        return await this.userRepository.save(user);
    }
}
