class Hanoi {
    constructor(parent) {
        this.parent = parent;
        this.moves_count = 0;
        this.startTime = null;
        this.intervalId = null;
    }
    
    build(pattern, help_move, canBeAdded, autoMove, help_map, height){
        this.pattern = pattern;
        this.help_move = help_move;
        this.help_canBeAdded = canBeAdded;
        this.help_autoMove = autoMove;
        this.help_map = help_map;
        this.stackHeight = height;
        this.auto_move_active = false;

        this.parent.classList.add('hanoi-container');
        
        //div przetrzymujący trójkąt Sierpińskiego
        this.divMapContainer = document.createElement('div');
        this.divMapContainer.classList.add('map-container');
        if(this.help_map){
            this.parent.appendChild(this.divMapContainer);
        }
        
        // dodajemy Bufor wraz z buforami dla każdego stosu
        this.divBuffor = document.createElement('div');
        this.divBuffor.classList.add("buffers-container");
        this.parent.appendChild(this.divBuffor);
        
        this.divBufforA = document.createElement('div');
        this.divBufforA.classList.add('buffer');
        this.divBuffor.appendChild(this.divBufforA);
        
        this.divBufforB = document.createElement('div');
        this.divBufforB.classList.add('buffer');
        this.divBuffor.appendChild(this.divBufforB);
        
        this.divBufforC = document.createElement('div');
        this.divBufforC.classList.add('buffer');
        this.divBuffor.appendChild(this.divBufforC);
        
        this.buffer = new Buffer();
        
        // dodajemy stosy
        this.divParentStack = document.createElement('div');
        this.divParentStack.classList.add('stacks-container');
        this.parent.appendChild(this.divParentStack);
        
        
        this.divA = document.createElement('div');
        this.divA.classList.add('stackDiv');
        this.divParentStack.appendChild(this.divA);

        this.s = document.createElement('div');
        this.s.classList.add('stick');
        this.divA.appendChild(this.s);
        
        this.divB = document.createElement('div');
        this.divB.classList.add('stackDiv');
        this.divParentStack.appendChild(this.divB);
        
        this.divC = document.createElement('div');
        this.divC.classList.add('stackDiv');
        this.divParentStack.appendChild(this.divC);

        var baseA = document.createElement('div');
        baseA.classList.add("base");
        this.divA.appendChild(baseA);
        var baseB = document.createElement('div');
        baseB.classList.add("base");
        this.divB.appendChild(baseB);
        var baseC = document.createElement('div');
        baseC.classList.add("base");
        this.divC.appendChild(baseC);
        
        this.A = new RingStack(this.divA);
        this.B = new RingStack(this.divB);
        this.C = new RingStack(this.divC);
        
        
        //gui licznik ruchów, czasu
        this.divInfo = document.createElement('div');
        this.divInfo.classList.add('gui_info');
        this.parent.appendChild(this.divInfo);
        
        this.map_center_button = document.createElement('button');
        this.map_center_button.setAttribute('content-data', 'mapcenter-button-text');
        
        
        
        //gui przyciski
        this.divGui = document.createElement('div');
        this.divGui.classList.add('gui_buttons');
        this.parent.appendChild(this.divGui);
 

        
        if(this.help_map || this.help_autoMove || this.help_move){
            this.divMap = document.createElement('div');
            this.divMap.classList.add('main');
            // this.divMap.style.position = "relative";
            this.divMapContainer.appendChild(this.divMap);
            
            
            this.map_center_button.addEventListener('click', function(){
                const divToScroll = hanoi.actual_node.parentDiv;
                divToScroll.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
            });
        };

        const hanoi = this;
        //div hanoi complete
        this.divComplete = document.createElement('div');
        this.divComplete.classList.add('complete');

        this.complete_moves = document.createElement('a');
        this.divComplete.appendChild(this.complete_moves);

        this.complete_clock = document.createElement('a');
        this.divComplete.appendChild(this.complete_clock);
        
        this.renew_button = document.createElement('button');
        this.renew_button.textContent = 'Renew';
        this.renew_button.addEventListener('click', function(){
            hanoi.parent.removeChild(hanoi.divComplete);
            hanoi.divComplete.classList.remove("active");
            hanoi.moves_count = 0;
            if(hanoi.auto_button){
                hanoi.auto_move_active = false;
                hanoi.auto_button.classList.remove("active");
            }
            if(hanoi.hint_button){
                hanoi.hint_button.disabled = false;
            }
            hanoi.fill();
           });
        this.divComplete.appendChild(this.renew_button);
        
        this.new_hanoi_button = document.createElement('button');
        this.new_hanoi_button.setAttribute("content-data", "new-text");
        this.new_hanoi_button.addEventListener('click', function(){
            window.location.href = 'application.html';
           });
        this.divComplete.appendChild(this.new_hanoi_button);
         
        this.back_button = document.createElement('button');
        this.back_button.setAttribute("content-data", "back-text");
        this.back_button.addEventListener('click', function(){
            window.location.href = 'index.html';
           });
        this.divComplete.appendChild(this.back_button);
        
        //auto
        if(this.help_autoMove){
            this.auto_button = document.createElement('button');
            this.auto_button.setAttribute('content-data', 'auto-button-text');
            
            this.auto_button.addEventListener('click', function(){
               if(hanoi.auto_move_active == true){
                    hanoi.auto_move_active = false;
               }
               if(hanoi.auto_move_active == false && !hanoi.auto_button.classList.contains("active")){
                    hanoi.auto_move_active = true;
                    hanoi.auto_button.classList.add("active");
                    hanoi.autoMove();
               }
            });

            this.divGui.appendChild(this.auto_button);
        }
        //hint
        if(this.help_move){
            this.hint_button = document.createElement('button');
            this.hint_button.setAttribute('content-data', 'hint-button-text');
            this.hint_button.addEventListener('click', function(){
                hanoi.helpMoveVisualization();
               });

               this.divGui.appendChild(this.hint_button);
           }
           
           
           
           
           //moves_count
           this.moves = document.createElement('a');
           this.moves.textContent = this.moves_count;
           this.divInfo.appendChild(this.moves);
           
           
           this.clock = document.createElement('a');
           this.divInfo.appendChild(this.clock);
           this.clock.textContent = "00:00";

           if(this.help_map){
               this.divGui.appendChild(this.map_center_button);

               this.expand_map_button = document.createElement('button');
               this.expand_map_button.setAttribute('content-data', 'map-button-text');
               this.expand_map_button.classList.add('expand-map');
               this.expand_map_button.addEventListener('click', function(){
                   if(hanoi.divMapContainer.classList.contains("expanded")){
                       hanoi.divMapContainer.classList.remove("expanded");
                   }else{
                       hanoi.divMapContainer.classList.add('expanded');
                   }
               });
       
               hanoi.parent.appendChild(this.expand_map_button);
               
           }

           if(! this.help_map){
               this.divBuffor.classList.add("without-map");
               this.divParentStack.classList.add("without-map");
               this.divInfo.classList.add("without-map");
               this.divGui.classList.add("without-map");
           }

           this.divA.addEventListener('click', function(){
               if(!hanoi.auto_move_active){
                   hanoi.stackClick(hanoi.A, hanoi.divBufforA);
               }
               });
           this.divB.addEventListener('click', function(){
               if(!hanoi.auto_move_active){
                   hanoi.stackClick(hanoi.B, hanoi.divBufforB);
               }
               });
           this.divC.addEventListener('click', function(){
               if(!hanoi.auto_move_active){
                   hanoi.stackClick(hanoi.C, hanoi.divBufforC);
               }
                });
        }
        

    fill(){
        translateTo(null);
        this.moves.textContent = `${this.moves_count}/${2**this.stackHeight - 1}`;
        if(this.stackHeight<2){this.stackHeight = 2};
        
        this.A.clear();
        this.B.clear();
        this.C.clear();
        this.buffer.clear();

        for (let i = this.stackHeight; i > 0; i--) { 
            this.A.addRing(new Ring(i, this.divA, this.stackHeight), this.pattern);
        }
        
        if(this.start_node){
            this.actual_node = this.start_node;
        }else if(this.help_move || this.help_map || this.help_autoMove ){
            var nodes = new Node(this.divMap, this.stackHeight, this.divMap);
            this.divMap.style.width = `${(2**this.stackHeight)*80}px`;
            nodes.draw(this.help_map);
            nodes.connect();
            var top_node = nodes.getTop(nodes);

            for (let i = 0; i < this.stackHeight; i++) {
                top_node.hanoi.push("a");
            }
            if(this.help_map){
                top_node.show();
            }
            top_node.getTop(nodes).go();
            this.actual_node = top_node; 
            this.start_node = this.actual_node;
            
        }
        if(this.help_map){
            this.actual_node.parentDiv.firstChild.style.background = `rgb(${255}, ${215}, ${10})`;
            this.map_center_button.click();
        }
        this.start();
        };

    stackClick(stack, buffor){
            if(this.buffer.hasRing()){
                const bufferedRing = this.buffer.getRing();
                
                if(stack.canBeAdded(bufferedRing.number)){
                    if((this.help_move || this.help_map|| this.help_autoMove)
                        && this.actual_node.step(this.translate(bufferedRing.parent), this.translate(stack)) !== null
                        && this.actual_node.step(this.translate(bufferedRing.parent), this.translate(stack)) !== this.actual_node){
                        this.actual_node = this.actual_node.step(this.translate(bufferedRing.parent), this.translate(stack));
                    }
                    if(this.help_map){
                        this.map_center_button.click();
                    }
                    this.buffer.clear();
                    this.canBeAddedVisualization(null);
                    stack.addRing(bufferedRing, this.pattern);
                    this.moves_count += 1;
                    this.moves.textContent = `${this.moves_count}/${2**this.stackHeight - 1}`;
                    if(stack == this.C){
                        if(stack.testStack()){
                            this.stop();
                            this.hanoi_complete();
                        }
                    }
                    
                }else{
                    stack.parent.classList.add("wrong");
                }

                if(!this.auto_move_active && this.help_autoMove){
                    this.auto_button.disabled = false;
                }
            } else {
                if(stack.getLength() > 0){
                    const topRing = stack.getTopRing();
                    this.canBeAddedVisualization(topRing);
                    this.buffer.setRing(topRing);
                    stack.removeRing();
                    this.buffer.displayNumber(buffor, this.pattern);
                    if(!this.auto_move_active && this.help_autoMove){
                        this.auto_button.disabled = true;
                    }
                }
            }
    }

    canBeAddedVisualization(ring){
            if(ring && this.help_canBeAdded){
                if(this.A.canBeAdded(ring.number)){
                    this.divA.classList.add("canBeAdded");
                }
                if(this.B.canBeAdded(ring.number)){
                    this.divB.classList.add("canBeAdded");
                }
                if(this.C.canBeAdded(ring.number)){
                    this.divC.classList.add("canBeAdded");
                }
            }else{
                this.divA.classList.remove("canBeAdded");
                this.divB.classList.remove("canBeAdded");
                this.divC.classList.remove("canBeAdded");
                this.divA.classList.remove("wrong");
                this.divB.classList.remove("wrong");
                this.divC.classList.remove("wrong");
            }
    }

    helpMoveVisualization(){
        if(this.help_move){
            var from = this.actual_node.help_from();
            var to = this.actual_node.help_to();
            this.hint_button.disabled = true;
            if(from !== null && to !== null){
                if(from == "a"){
                    var fromDiv = this.divA;
                }
                if(from == "b"){
                    var fromDiv = this.divB;
                }
                if(from == "c"){
                    var fromDiv = this.divC;
                }

                if(to == "a"){
                    var toDiv = this.divA;
                }
                if(to == "b"){
                    var toDiv = this.divB;
                }
                if(to == "c"){
                    var toDiv = this.divC;
                }
                
                
                const hanoi = this;
                console.log(from + " " + to)
                fromDiv.classList.add("hint");
                setTimeout(function() {
                    fromDiv.classList.remove("hint");
                    toDiv.classList.add("hint");
                setTimeout(function() {
                    toDiv.classList.remove("hint");
                    hanoi.hint_button.disabled = false;
                }, 500); // 2000 milliseconds = 2 seconds
            }, 500); // 2000 milliseconds = 2 seconds

            }
        }
    }

    autoMove(){
        if(this.auto_move_active){
            if(this.hint_button){
                this.hint_button.disabled = true;
            }
            var from = this.actual_node.help_from();
            var to = this.actual_node.help_to();
            // this.auto_button.disabled = true;
            if(from !== null && to !== null){
                if(from == "a"){
                    var from = this.A;
                    var fromDivBuffor = this.divBufforA;
                }
                if(from == "b"){
                    var from = this.B;
                    var fromDivBuffor = this.divBufforB;
                }
                if(from == "c"){
                    var from = this.C;
                    var fromDivBuffor = this.divBufforC;
                }
    
                if(to == "a"){
                    var to = this.A;
                    var toDivBuffor = this.divBufforA;
                }
                if(to == "b"){
                    var to = this.B;
                    var toDivBuffor = this.divBufforB;
                }
                if(to == "c"){
                    var to = this.C;
                    var toDivBuffor = this.divBufforC;
                }
    
                this.help_canBeAdded = false;
    
                const hanoi = this;
                this.stackClick(from, fromDivBuffor);
                setTimeout(function() {
                    setTimeout(function() {
                        hanoi.stackClick(to, toDivBuffor);
                        setTimeout(function() {
                            hanoi.autoMove();
                            // hanoi.auto_button.disabled = false;
                        }, 400);
                    }, 300); 
                }, 400); 
                this.help_canBeAdded = true;
            }
        }else{
            this.auto_button.classList.remove("active");
            if(this.hint_button){
                this.hint_button.disabled = false;
            }
        }
    }

    hanoi_complete(){
        this.complete_clock.textContent = this.clock.textContent;
        this.complete_moves.textContent = this.moves.textContent;
        this.parent.appendChild(this.divComplete);
        this.divComplete.classList.add("active");
    }

    translate(value){
        if(value == this.A || value == this.divA || value == this.divBufforA){
            return "a"
        }
        if(value == this.B || value == this.divB || value == this.divBufforB){
            return "b"
        }
        if(value == this.C || value == this.divC || value == this.divBufforC){
            return "c"
        }
    }

  
    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        if(formattedMinutes > 60){
            return "!!:!!";
        }else{
            return `${formattedMinutes}:${formattedSeconds}`;
        }
    }

    updateTimer() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - this.startTime;
        this.clock.textContent = this.formatTime(elapsedTime);
    }

    start() {
        this.startTime = Date.now();
        this.intervalId = setInterval(() => this.updateTimer(), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset() {
        this.stop();
        this.clock.textContent = '00:00';
    }
    };
    
    