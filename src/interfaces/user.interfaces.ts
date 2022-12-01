export interface IUser {
    id?: string
    userId: string,
    username: string,
    email: string
}

export interface IUserItem extends IUser {
    list?: number
}