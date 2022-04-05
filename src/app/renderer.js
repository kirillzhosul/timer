let tickTimer = undefined;
let isRunning = false;

const onTick = () => {
    /// @description Ticks timer by one seconds.
    if (!isRunning) return; // Guard.
    _timerTick();
    _updateInterface();
}

const onReset = () => {
    /// @description Resets timer to start state.
    _timerReset();
    _pauseTimer();
    _resetTickTimer();
    _updateInterface();
}

const onSwitch = () => {
    if (isRunning){
        _pauseTimer();
    }else{
        _startTimer();
    }

    _updateInterface();
}

const _updateInterface = () =>{
    /// @description Updates text representation of the counter.
    document.getElementById("timer").innerText = _timerToString();
    document.getElementById("button_switch").value = isRunning ? "Pause" : (_timerWasStarted() ? "Continue" : "Start");
}

const _startTimer = () => {
    isRunning = true;
    _resetTickTimer();
    _updateInterface();
}

const _pauseTimer = () => {
    isRunning = false;
    _resetTickTimer();
    _updateInterface();
}

const _resetTickTimer = () => {
    /// @description Resets tick timer for start or resetting.
    onTick();
    
    if (tickTimer) clearInterval(tickTimer);
    tickTimer = setInterval(onTick, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    /// @description Start tick timer when app is loaden.
    _updateInterface();
});
