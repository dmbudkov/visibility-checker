class VisibilityChecker {
    constructor(callback, options = {}) {
        this.callback = callback;
        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
            root: options.root || null,
            rootMargin: options.rootMargin || '0px',
            threshold: options.threshold || 0.1,
        });
    }

    observe(element) {
        if (!element) return;
        this.observer.observe(element);
    }

    unobserve(element) {
        if (!element) return;
        this.observer.unobserve(element);
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            if (this.callback) {
                this.callback(entry.target, entry.isIntersecting);
            }
        });
    }

    disconnect() {
        this.observer.disconnect();
    }
}

module.exports = VisibilityChecker;
export default VisibilityChecker;