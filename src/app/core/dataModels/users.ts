export interface IUserFeed {
    name: string,
    user_id: string,
    feed_id: string,
    likes: number,
    comments_count: number,
    feed_photo: string,
    date: string,
    photo: string,
    liked: boolean,
    followed: boolean
}

export interface IUserStory {
    name: string,
    photo: string
}

export interface IUser 
{
    name: string,
    photo: string,
    id: string,
    followed: boolean,
    email: string
}