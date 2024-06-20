class Ring {
    constructor(number, parent, height) {
      this.height = height;
      this.number = number; 
      this.parent = parent; 
      this.element = null; 
      this.genColor= this.getRandomColor();
      this.genHeight =   10 ;
      this.genWidth = number/height *60 + 30;
    }

    
    draw(pattern) {
        this.element = document.createElement('div');
        this.element.classList.add('ring');
        this.element.style.width = `${this.genWidth}%`;
        this.element.style.height = `${2 + 0.3*this.number}vh`;
        this.element.style.background = this.genColor; 
        const firstChild = this.parent.firstChild;
        this.parent.appendChild(this.element);
        if(pattern == "contrast" ){
          this.element.style.backgroundImage = `url('content/patern${this.number}.png')`;
        }  
        if(pattern == "wood"){
          this.element.style.backgroundImage = `url('content/drewno2.png')`;
          this.element.style.backgroundSize = "cover";
        }     
      }


    remove() {
      if (this.element && this.parent) {
        this.parent.removeChild(this.element);
      }
    }

    getRandomColor() {
      const r = Math.floor(Math.random() * 150 + 106);
      const g = Math.floor(Math.random() * 150 + 106);
      const b = Math.floor(Math.random() * 150 + 106);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }