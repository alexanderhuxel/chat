export class Chat {
    public Users: string[] = [];
    public Messages: string[] = [];

    constructor() {
        this.Users = ["test", "grad", "dasd"]
    }

    toJson() {
        return {
            Users: this.Users,
            Messages: this.Messages
        }
    }
}