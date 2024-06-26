class Stack {
    constructor(parent) {
        this.stack = [];
        this.parent = parent;
    }

    

    canBeAdded(number){
        if(this.stack.length > 0){
            if(this.stack[this.stack.length - 1].number >= number){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }

    addRing(ring, patern) {
      ring.parent = this.parent;
      ring.draw(patern);
      this.stack.push(ring);
    }

    testStack() {
      if(this.stack.length > 0){
        if(this.stack.length == this.stack[0].height){
          console.log("WIN!");
          return true;
        }else return false;
      }

    }

    clear(){
        this.stack.forEach(element => {
          element.remove();
        });
        this.stack = []
    }

    removeRing() {
      const ring = this.stack.pop();
      if (ring) {
        ring.remove();
      }
    }

    getTopRing() {
      if(this.stack.length > 0){
        return this.stack[this.stack.length - 1];
      }else return false;
      
    }

    getLength() {
        return this.stack.length;
    }
  }