import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const usersRepositoriy = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadExists = await usersRepositoriy.findOne({ email });

        if (userAlreadExists) {
            throw new Error("User alread exists");
        }

        const user = usersRepositoriy.create({
            name,
            email,
            admin
        });

        await usersRepositoriy.save(user);

        return user;
    }
}

export { CreateUserService }