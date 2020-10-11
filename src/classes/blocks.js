import {colSm, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options
    }

    toHTML() {
        throw new Error('toHTML method must been init')
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {imageStyles: imgS, alt = '', styles} = this.options;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imgS)}" />`, css(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const html = this.value.map(colSm).join('');
        return row(html, css(this.options.styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return row(colSm(`<p>${this.value}</p>`), css(this.options.styles));
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options;
        return row(colSm(`<${tag}>${this.value}</${tag}>`), css(this.options.styles));
    }
}