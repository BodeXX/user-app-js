export class CreateUser {
    constructor (userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        const { name, email } = userData;

        if (!name || !email) {
            throw new Error("Name and email are required");
        }

        const newUser = await this.userRepository.save({ name, email });

        return newUser;
    }
}
