export interface IPerson {
    _id: {
        "$oid": string
    };
    name: string;
    email: string;
    phone: string;
}