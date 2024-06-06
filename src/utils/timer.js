export const timer = (time) => {
    let min = "0" + Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec > 10) { sec =  + sec};
    return `${min}:${sec}`
}