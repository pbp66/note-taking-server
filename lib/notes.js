import { v4 as uuidV4 } from "uuid";

export default class Note {
    constructor(title, text) {
        this.id = uuidV4();
        this.title = title;
        this.text = text;
    }

    setID(id) {
        this.id = id;
    }
}