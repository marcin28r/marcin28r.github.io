class Buffer {
    constructor() {
        this.ring = null;
    }

    displayNumber(buffer, high_contrast) {
        if(this.ring){
            this.ring.parent = buffer;
            this.ring.genHeight = 5 * this.ring.genHeight;
            this.ring.draw(high_contrast);
        }
    }

    setRing(ring) {
        this.ring = ring;
    }

    hasRing() {
        if (this.ring == null){
            return false;
        }else{
            return true;
        }
    }

    getRing() {
        this.ring.parentId = null;
        return this.ring;
    }

    clear() {
        if(this.ring){
            this.ring.remove();
            this.ring = null;
        }
    }
    }