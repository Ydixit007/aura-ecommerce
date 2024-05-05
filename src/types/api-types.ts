export interface User {
    name: string,
    photo: string,
    email: string,
    gender: string,
    dob: string,
    _id: string,
    role: string,
}

export type MessageResponse = {
    success: boolean,
    message: string,
}

export type UserResponse = {
    success: boolean,
    user: User,
}