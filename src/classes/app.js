import {Site} from "./site";
import {Sidebar} from "./sidebar";

export class App {
    constructor(model) {
        this.model = model;
        this.init();
    }

    init() {
        const mainContent = new Site('#main');
        mainContent.render(this.model);

        const updateHTML = newBlock => {
            this.model.push(newBlock)
            mainContent.render(this.model)
        };

        new Sidebar('#panel', updateHTML);
    }
}