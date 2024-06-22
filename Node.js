class Node {
    constructor(parentDiv, deep, lineDiv) {
        this.lineDiv = lineDiv;
        this.deep = deep;
        this.parentDiv = parentDiv;
        this.top = null;
        this.left = null;
        this.right = null;
        this.join_top = 0;
        this.join_left = 0;
        this.join_right = 0;
        this.hanoi = [];
    };

    getHanoiLength(){
        return this.hanoi.length;
    }
    
    step(from, to){
        
        if(this.left != null){
            if(this.hanoi[this.join_left] == from && (this.left.hanoi[this.left.join_top] == to || this.left.hanoi[this.left.join_right] == to)){
            if(this.parentDiv){
                this.parentDiv.firstChild.style.background = `rgb(${255}, ${255}, ${255})`;
                this.left.parentDiv.firstChild.style.background = `rgb(${255}, ${215}, ${10})`;
            }
            return this.left;
            }   
        }
        if(this.right != null){
            if(this.hanoi[this.join_right] == from && (this.right.hanoi[this.right.join_top] == to || this.right.hanoi[this.right.join_left] == to )){
            if(this.parentDiv){
                this.parentDiv.firstChild.style.background = `rgb(${255}, ${255}, ${255})`;
                this.right.parentDiv.firstChild.style.background = `rgb(${255}, ${215}, ${10})`;
            }
                return this.right;
            }
        }
        if(this.top != null){
            if(this.hanoi[this.join_top] == from && (this.top.hanoi[this.top.join_left] == to || this.top.hanoi[this.top.join_right] == to)){
            if(this.parentDiv){
               this.parentDiv.firstChild.style.background = `rgb(${255}, ${255}, ${255})`;
               this.top.parentDiv.firstChild.style.background = `rgb(${255}, ${215}, ${10})`;             
            }
                return this.top;
            }
        }
        return this;
    }

    help_from(){
        if(this.getHanoiLength() % 2 == 0){
            return this.hanoi[this.join_left];
        }else {
            return this.hanoi[this.join_right];
        }
    }

    help_to(){
        if(this.getHanoiLength() % 2 == 0){
            if(this.left !== null){
                return this.left.hanoi[this.join_left];
            }
            else return null;
            
        }else {
            if(this.right !== null){
                return this.right.hanoi[this.join_right];
            }
            else return null;
        }
    }

    show() {

            let mai = document.createElement("div");
            mai.classList.add("node");
            this.parentDiv.appendChild(mai);

            let A = document.createElement("div");
            A.classList.add('smallStackDiv');

            let B = document.createElement("div");
            B.classList.add('smallStackDiv');

            let C = document.createElement("div");
            C.classList.add('smallStackDiv');

            mai.appendChild(A);
            mai.appendChild(B);
            mai.appendChild(C);

            this.mai = mai;
            for (let i = this.hanoi.length; i >= 0; i--) {
                let ring = document.createElement("div");
                ring.classList.add('smallRing');
                ring.style.width = `${i/this.hanoi.length * 60 + 20}%`;
                ring.style.background = `rgb(${i/this.hanoi.length * 100 + 150}, ${255 - i/this.hanoi.length * 200}, ${i/this.hanoi.length * 255})`;
                // ring.style.paddingBottom = "5px";
                ring.style.height = `${1/(this.hanoi.length + 2)}%`;
                // ring.textContent = this.hanoi[i];
                
                if(this.hanoi[i] === "a"){
                    A.appendChild(ring);
                }
                if(this.hanoi[i] === "b"){
                    B.appendChild(ring);
                }
                if(this.hanoi[i] === "c"){
                    C.appendChild(ring);
                }
              }

              if(this.left !== null){
                drawLine(this.lineDiv, this.mai, this.left.mai, this.join_left, this.hanoi.length);
              }
              if(this.right != null){
                drawLine(this.lineDiv, this.right.mai,this.mai, this.join_right, this.hanoi.length);
              }
    };

    move(from, to, value){
        if(from instanceof Node && to instanceof Node && to.getHanoiLength() === 0 && from.getHanoiLength() > 0){
            // console.log(from.hanoi);
            let x = value;


            from.hanoi.forEach(element =>{
                to.hanoi.push(element)
            })

            if(from.hanoi[value] === "a"){
                if(from.hanoi[value - 1] === "b"){
                    to.hanoi[x] = "c";
                    // console.log(to.hanoi);
                }else{
                    to.hanoi[value] = "b";
                }
                
            }else if(from.hanoi[value] === "b"){
                if(from.hanoi[value - 1] === "c"){
                    to.hanoi[x] = "a";
                    // console.log(to.hanoi);
                }else{
                    to.hanoi[value] = "c";
                }
            }else if(from.hanoi[value] === "c"){
                if(from.hanoi[value - 1] === "a"){
                    to.hanoi[x] = "b";
                    // console.log(to.hanoi);
                }else{
                    to.hanoi[value] = "a";
                }
            }
            if(this.parentDiv){
                to.show();
            }
    }
}
    
// generowanie poszczególnych Nodów od góry do dołu ** do zrobienia
    go(){
        this.move(this, this.left, this.join_left);
        this.move(this.left, this.right, this.left.join_right);


        if(this.left.left instanceof Node && this.right.right instanceof Node){
            this.move(this.left, this.left.left, this.left.join_left);
            this.move(this.right, this.right.right, this.right.join_right);
            
            if( this. left.left.top == this.left){
                this.left.left.go();
            }
            if( this.right.right.top == this.right){
                this.right.right.go();
            }
            
        }
   
    }

    draw(need_visualization) {
        if(need_visualization){
            let mai = document.createElement("div");

            mai.style.display = "flex";
            mai.style.flexDirection = "column";
            mai.style.alignItems = "center";
            this.mai = mai;

            this.parentDiv.appendChild(mai);

            if(this.deep === 0){
                mai.style.height = `60px`;
                mai.style.width = `60px`;
                mai.style.marginRight = `10px`;
                mai.style.flexDirection = "row";
                mai.style.overflow = "hidden";
                this.parentDiv = mai;
            }
        }
        if( this.deep > 0){
            if(need_visualization){
                let firstRowDiv = document.createElement("div");
                let secondRowDiv = document.createElement("div");
                
                firstRowDiv = document.createElement('div'); 
                firstRowDiv.style.display = "flex";
                firstRowDiv.style.textAlign = "center";
    
                secondRowDiv = document.createElement('div'); 
                secondRowDiv.style.display = "flex";
                secondRowDiv.style.textAlign = "center";

                this.mai.appendChild(firstRowDiv);
                this.mai.appendChild(secondRowDiv);

                this.top = new Node(firstRowDiv, this.deep -1, this.lineDiv);
                this.left = new Node(secondRowDiv, this.deep -1, this.lineDiv);
                this.right = new Node(secondRowDiv, this.deep -1, this.lineDiv);
            }else{
                this.top = new Node(null, this.deep -1, this.lineDiv);
                this.left = new Node(null, this.deep -1, this.lineDiv);
                this.right = new Node(null, this.deep -1, this.lineDiv);
            }
            

        


            // kalibracja
            this.top.left = this.left;
            this.top.right = this.right;

            this.left.right = this.right;
            this.left.top = this.top;

            this.right.left = this.left;
            this.right.top = this.top;


            this.top.draw(need_visualization);
            this.left.draw(need_visualization);
            this.right.draw(need_visualization);
        }
      };
    

    connect(){
        if(this.deep > 1){
            let top_left = this.getLeft(this.top);
            let left_top = this.getTop(this.left);
            top_left.left = left_top;
            left_top.top = top_left;

            top_left.join_left = this.deep - 1;
            left_top.join_top = this.deep - 1;


            let top_right = this.getRight(this.top);
            let right_top = this.getTop(this.right);
            top_right.right = right_top;
            right_top.top = top_right;

            top_right.join_right = this.deep -1;
            right_top.join_top = this.deep -1;


            let left_right = this.getRight(this.left);
            let right_left = this.getLeft(this.right);
            left_right.right = right_left;
            right_left.left = left_right;

            left_right.join_right = this.deep -1;
            right_left.join_left = this.deep -1;

            this.top.connect();
            this.left.connect();
            this.right.connect();
           
        };
    }

    getTop(nod){
        if(nod.top){
            let temp = nod.top;
            while (temp.deep !== 0) {
                temp = temp.top;
            }
            return temp;
        }
    };  
      
    getLeft(nod){
        if(nod.left){
            let temp = nod.left;
            while (temp.deep !== 0) {
                temp = temp.left;
            }
            return temp;
        }
    };

    getRight(nod){
        if(nod.right){
            let temp = nod.right;
            while (temp.deep !== 0) {
                temp = temp.right;
            }
            return temp;
        }
    };
}

function drawLine(container, divStart, divEnd, join, height) {
    if(container !== null){
        const line = document.createElement('div');
        line.classList.add("line");
        line.style.background = `rgb(${join/height * 100 + 150}, ${255 - join/height * 200}, ${join/height * 255})`;
        container.appendChild(line);

        const rect1 = divStart.getBoundingClientRect();
        const rect2 = divEnd.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const x1 = rect1.left + rect1.width / 2 - containerRect.left;
        const y1 = rect1.top + rect1.height / 2 - containerRect.top;
        const x2 = rect2.left + rect2.width / 2 - containerRect.left;
        const y2 = rect2.top + rect2.height / 2 - containerRect.top;

        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

        line.style.width = `${distance}px`;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = '0 0';
        line.style.top = `${y1}px`;
        line.style.left = `${x1}px`;
    }
    
}