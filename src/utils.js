export const row = (content, styles = '') => {
    return `<div class="row" style="${styles}">${content}</div>`
};

export const colSm = content => {
    return `<div class="col-sm">${content}</div>`
};

export const css = (styles = {}) => {
    if(typeof styles === 'string') return styles;
    return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')
};

export const block = type => {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input type="text" class="form-control form-control-sm" name="value" placeholder="value" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control form-control-sm" name="styles" placeholder="styles" />
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Insert block</button>
        </form>
        <hr />
    `
}