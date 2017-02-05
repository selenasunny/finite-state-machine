class FSM {
    constructor(config) {
        if (!config){
            throw new error("config isn\'t passed");
        }
        this._initial = config.initial;
        this.state = this._initial;
        this.previousStates = null;
        this.nextStates = null;
        this.states = config.states;
    }

    getState() {
        return this.state;
    }

    
    changeState(state) {
        this.previousStates = this.state;

        if (!this.states[state]){
            throw new error("state isn\'t exist"); 
        }else {
            this.state = state;
        }
    }

    trigger(event) {
        this.previousStates = this.state;

        if(!this.states[this.state].transitions[event]){
           throw new error("state isn\'t exist");
        } else {
           this.changeState(this.states[this.state].transitions[event]); 
        }
    }

    
    reset() {        
        this.state = this._initial;
    }

    getStates(event) {
        if (!event){
            return Object.keys(this.states);
        } else {
            var states = [];
            for(var key in this.states){
                if (this.states[key].transitions[event]){
                    states.push(key);
                }
            }

            return states;
        }
    }

    
    undo() {
        if(!this.previousStates){
            return false;

        } else {
            this.nextStates = this.state;
            this.state = this.previousStates;
            this.previousStates = null;
            return true;
        }
    }

    
    redo() {
        if (!this.nextStates){
            return false;
        } else {
            this.previousStates = this.state;
            this.state = this.nextStates;
            this.nextStates = null;
            return true;
        }
    }

    clearHistory() {
        this.previousStates = null;
    }
}

module.exports = FSM;