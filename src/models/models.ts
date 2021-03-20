import { TOUCH_BUFFER_MS } from "@angular/cdk/a11y";

export class Chat {
    public Users: string[] = [];
    public Messages: string[] = [];

    constructor() {
        this.Users = ["test", "grad", "dasd"]
        this.Messages = [];
    }



}
