function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        result = `${this.title} by ${this.author}, ${this.pages} pages, `;
        if (this.read) {
            result += "read";
        } else {
            result += "not read yet";
        }
        return result;
    }
}