class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter((observerFn) => {
            return observerFn !== fn;
        });
    }

    broadCast(data) {
        this.observers.forEach((observer) => {
            observer(data);
        });
    }
}

window.blogObserver = new EventObserver();

function writeToDOM(content) {
    let loggerEl = document.getElementById('wordCounter');
    loggerEl.innerText = content;
}

function mockFn(data) {
    writeToDOM(`Mock function called! with ${data}`);
}

function useBasicObserverPatternImplementation() {
    const observer = new EventObserver();
    observer.subscribe(mockFn);
    observer.broadCast('Foo');
}

function getText() {
    return 'This is a blog \\n\\n  post with a word count.     ';
}

function getWordCount(text) {
    return text ? text.trim().split(/\s+/).length : 0;
}

(() => {
    const blogPost = document.getElementById('blogPost');
    blogPost.addEventListener('keyup', () => {
        blogObserver.broadCast(blogPost.value);
    });
})();
