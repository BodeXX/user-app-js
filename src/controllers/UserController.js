export class UserController {
    constructor(createUserUseCase, getAllUsersUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.getAllUsersUseCase = getAllUsersUseCase;
    }


    async create(req, res, next) {
        try {
        const result = await this.createUserUseCase.execute(req.body);
        res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await this.getAllUsersUseCase.execute();

            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
}
