import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";


interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean,
    password: string
}

class CreateUserService {
    async execute({ name, email, admin, password }: IUserRequest) {
        const usersRepositoriy = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Email incorrect!");
        }

        const userAlreadExists = await usersRepositoriy.findOne({ email });

        if (userAlreadExists) {
            throw new Error("User alread exists!");
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepositoriy.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await usersRepositoriy.save(user);

        return user;
    }
}

export { CreateUserService }