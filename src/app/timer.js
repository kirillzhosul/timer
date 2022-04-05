// Timer state.
_timer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

const _timerToString = () => {
    /// @description Returns timer as string.
    let hours = _timer.hours.toString();
    if (_timer.hours < 10) hours = "0" + hours;

    let minutes = _timer.minutes.toString();
    if (_timer.minutes < 10) minutes = "0" + minutes;

    let seconds = _timer.seconds.toString();
    if (_timer.seconds < 10) seconds = "0" + seconds;

    return `${hours}:${minutes}:${seconds}`;
}

const _timerWasStarted = () => {
    /// @description Returns is timer was started (not null) or yes.
    if (_timer.hours !== 0) return true;
    if (_timer.minutes !== 0) return true;
    if (_timer.seconds !== 0) return true;
    return false;
}

const _timerReset = () => {
    /// @description Resets timer to base state.
    _timer.hours = 0;
    _timer.minutes = 0;
    _timer.seconds = 0;
}

const _timerTick = () => {
    /// @description Ticks timer by increasing value by one second.
    _timer.seconds++;
    if (_timer.seconds > 60){
        _timer.seconds = 0;
        _timer.minutes++;
        if (_timer.minutes > 60){
            _timer.minutes = 0;
            _timer.hours++;
        }
        if (_timer.minutes > 60){
            _timer.hours = 0;
        }
    }
}