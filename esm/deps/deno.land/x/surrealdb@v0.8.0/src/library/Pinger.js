export class Pinger {
    pinger;
    interval;
    constructor(interval = 30000) {
        this.interval = interval;
    }
    start(callback) {
        this.pinger = setInterval(callback, this.interval);
    }
    stop() {
        clearInterval(this.pinger);
    }
}
