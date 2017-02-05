class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
    	this._config = config;
    	this._initial = config.initial;
    	this._state = config.states;
    	this._previousStates = [];    	
    	this._nextStates = [];
    	if (!config) throw new Error("config isn\'t passed");  	
    }

    /**
     * Returns active state.
     * @returns {String}
     */   

    getState() {    
    	return this._initial;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {  
    	if (!this._config.states[state]) {
    		throw new Error("state isn\'t exist");
    	}
    	
    	this._nextStates.push(this._initial);
    	this._initial = state;	
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {
    	this._state = this._initial;
    		return this._state; 
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
    	
    	
    	    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
