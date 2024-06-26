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
        this.mainBufferDiv = document.createElement('div');
        this.mainBufferDiv.classList.add("buffers-container");
        this.parent.appendChild(this.mainBufferDiv);
        
        this.buffersDict = {
            "a" : document.createElement('div'),
            "b" : document.createElement('div'),
            "c" : document.createElement('div'),
        }
        
        for(let key in this.buffersDict){
            let element = this.buffersDict[key];
            element.classList.add('buffer');
            this.mainBufferDiv.appendChild(element);
        }
        
        this.mainBuffer = new Buffer();
        
        // dodajemy stosy
        this.divParentStack = document.createElement('div');
        this.divParentStack.classList.add('stacks-container');
        this.parent.appendChild(this.divParentStack);
        
        
        this.StackDivsDict = {
            "a": document.createElement('div'),
            "b": document.createElement('div'),
            "c": document.createElement('div'),
        }
        for(let key in this.StackDivsDict){
            var element = this.StackDivsDict[key];
            element.classList.add('stackDiv');
            this.divParentStack.appendChild(element);
        }

        var baseA = document.createElement('div');
        baseA.classList.add("base");
        this.StackDivsDict['a'].appendChild(baseA);
        var baseB = document.createElement('div');
        baseB.classList.add("base");
        this.StackDivsDict['b'].appendChild(baseB);
        var baseC = document.createElement('div');
        baseC.classList.add("base");
        this.StackDivsDict['c'].appendChild(baseC);

        this.StacksDict = {
            "a" : new Stack(this.StackDivsDict['a']),
            "b" : new Stack(this.StackDivsDict['b']),
            "c" : new Stack(this.StackDivsDict['c']),
        }
        
        //gui licznik ruchów, czasu
        this.divInfo = document.createElement('div');
        this.divInfo.classList.add('gui_info');
        this.parent.appendChild(this.divInfo);
        
        this.map_center_button = document.createElement('button');
        this.map_center_button.setAttribute('content', 'mapcenter-button-text');
        
        
        
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
        this.renew_button.setAttribute("content", "renew-text");
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
        this.new_hanoi_button.setAttribute("content", "new-text");
        this.new_hanoi_button.addEventListener('click', function(){
            window.location.href = 'application.html';
           });
        this.divComplete.appendChild(this.new_hanoi_button);
         
        this.back_button = document.createElement('button');
        this.back_button.setAttribute("content", "back-text");
        this.back_button.addEventListener('click', function(){
            window.location.href = 'index.html';
           });
        this.divComplete.appendChild(this.back_button);
        
        //auto
        if(this.help_autoMove){
            this.auto_button = document.createElement('button');
            this.auto_button.setAttribute('content', 'auto-button-text');
            
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
            this.hint_button.setAttribute('content', 'hint-button-text');
            this.hint_button.addEventListener('click', function(){
                hanoi.helpHint();
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
               this.expand_map_button.setAttribute('content', 'map-button-text');
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
               this.mainBufferDiv.classList.add("without-map");
               this.divParentStack.classList.add("without-map");
               this.divInfo.classList.add("without-map");
               this.divGui.classList.add("without-map");
           }

           this.StackDivsDict['a'].addEventListener('click', function(){
               if(!hanoi.auto_move_active){
                   hanoi.stackClick(hanoi.StacksDict['a'], hanoi.buffersDict['a']);
               }
               });
           this.StackDivsDict['b'].addEventListener('click', function(){
               if(!hanoi.auto_move_active){
                   hanoi.stackClick(hanoi.StacksDict['b'], hanoi.buffersDict['b']);
               }
               });
           this.StackDivsDict['c'].addEventListener('click', function(){
               if(!hanoi.auto_move_active){
                   hanoi.stackClick(hanoi.StacksDict['c'], hanoi.buffersDict['c']);
               }
                });
        }
        

    fill(){
        translateTo(null);
        this.solved = false;
        this.divInfo.classList.remove("solv");
        this.moves.textContent = `${this.moves_count}/${2**this.stackHeight - 1}`;
        if(this.stackHeight<2){this.stackHeight = 2};
        if(this.stackHeight>8){this.stackHeight = 8};
        
        this.StacksDict['a'].clear();
        this.StacksDict['b'].clear();
        this.StacksDict['c'].clear();
        this.mainBuffer.clear();
        
        for (let i = this.stackHeight; i > 0; i--) { 
            this.StacksDict['a'].addRing(new Ring(i, this.StackDivsDict['a'], this.stackHeight), this.pattern);
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
            top_node.getTop(nodes).fill();
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
        if(this.mainBuffer.hasRing()){
            const bufferedRing = this.mainBuffer.getRing();
                
            if(stack.canBeAdded(bufferedRing.number)){
                if((this.help_move || this.help_map|| this.help_autoMove)){
                    var temp = this.actual_node.step(this.translate(bufferedRing.parent), this.translate(stack));
                    if(temp !== null && temp !== this.actual_node){
                            this.actual_node = temp;
                    }
                }
                
                if(this.help_map){
                    this.map_center_button.click();
                }
                if(this.translate(stack) != this.translate(bufferedRing.parent)){
                    this.moves_count += 1;
                }
                this.mainBuffer.clear();
                this.possibleMoves(null);
                stack.addRing(bufferedRing, this.pattern);
                this.moves.textContent = `${this.moves_count}/${2**this.stackHeight - 1}`;
                if(stack == this.StacksDict['c'] && stack.testStack() && !this.solved){
                    this.stop();
                    this.hanoiComplete();
                    var temp = this.moves.textContent;
                    this.complete_moves.textContent = temp;
                    this.solved = true;
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
                this.possibleMoves(topRing);
                this.mainBuffer.setRing(topRing);
                stack.removeRing();
                this.mainBuffer.displayNumber(buffor, this.pattern);
                if(!this.auto_move_active && this.help_autoMove){
                    this.auto_button.disabled = true;
                }
            }
        }
    }

    possibleMoves(ring){
        if(ring && this.help_canBeAdded){
            for(let key in this.StacksDict){
                if(this.StacksDict[key].canBeAdded(ring.number)){
                    this.StackDivsDict[key].classList.add("canBeAdded");
                }
            }
        }else{
            for(let key in this.StacksDict){
                this.StackDivsDict[key].classList.remove("canBeAdded");
                this.StackDivsDict[key].classList.remove("wrong");
            }
        }
    }

    helpHint(){
        if(this.help_move){
            var from = this.actual_node.help_from();
            var to = this.actual_node.help_to();
            this.hint_button.disabled = true;
            if(from !== null && to !== null){
                var fromDiv = this.StackDivsDict[from];
                var toDiv = this.StackDivsDict[to];
                
                const hanoi = this;
                fromDiv.classList.add("hint");
                setTimeout(function() {
                    fromDiv.classList.remove("hint");
                    toDiv.classList.add("hint");
                    setTimeout(function() {
                        toDiv.classList.remove("hint");
                        hanoi.hint_button.disabled = false;
                    }, 500); 
                }, 500); 
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
                let fromStack = this.StacksDict[from];
                let fromDivBuffer = this.buffersDict[from];
                let toStack =  this.StacksDict[to];
                let toDivBuffer = this.buffersDict[to];

                this.help_canBeAdded = false;
    
                const hanoi = this;
                this.stackClick(fromStack, fromDivBuffer);
                setTimeout(function() {
                    setTimeout(function() {
                        hanoi.stackClick(toStack, toDivBuffer);
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

    hanoiComplete(){
        this.complete_clock.textContent = this.clock.textContent;
        this.divInfo.classList.add("solv");
        this.divMapContainer.classList.remove("expanded");
        const hanoi = this;
        setTimeout(function() {
            hanoi.parent.appendChild(hanoi.divComplete);
            hanoi.divComplete.classList.add("active");
            translateTo(null);
        }, 2000);
    }

    translate(value){
        const dictionaries = [this.StackDivsDict, this.StacksDict, this.buffersDict];
    
        for (let i = 0; i < dictionaries.length; i++) {
            for (let key in dictionaries[i]) {
                if (dictionaries[i][key] === value) {
                    return key;
                }
            }
        }
        return null;
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
    
    