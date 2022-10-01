export interface IImage {
    url: string;
    public_id: string;
}

export interface IPost {
    _id?: string;
    title: string;
    description: string;
    image?: IImage | null;
}
