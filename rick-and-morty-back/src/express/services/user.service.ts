import { generateToken } from '../../auth/token';
import * as userRepo from '../../mongo/repo/user.repo';
import User from '../../types/user.type';
import { encrypt } from '../../utils/encrypt';

// get a user by name and password
export const getUserByNameAndPassword = async (name: string, password: string) => {
    const user = await userRepo.getUserByNameAndPassword(name, encrypt(password));
    return user;
};

// sign in
export const login = async (name: string, password: string) => {
    const user = await getUserByNameAndPassword(name, password);

    if (!user) return null;

    const token = generateToken(user._id!.toString());
    return { user, token };
};

// create a new user
export const createUser = async (user: User) => {
    const newUser = await userRepo.createUser({
        name: user.name,
        password: encrypt(user.password),
        role: user.role,
    });

    return newUser;
};

// get a user
export const getUserById = async (userId: string) => {
    const user = await userRepo.getUserById(userId);
    return user;
};
