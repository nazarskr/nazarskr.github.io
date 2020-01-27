let body, num, array, width, context, logo, myElements, analyser, src, height, dest, analysers, gainNode, gainElem;
body = document.querySelector('body');
num = 32;
array = new Uint8Array(num*2);
width = 10;
function start (){
    if(context) return;
    for(var i = 0 ; i < num ; i++){
       logo = document.createElement('div');
       logo.className = 'logo';
       logo.style.background = 'red';
       logo.style.minWidth = width+'px';
       analysers = document.getElementById('analysers')
       analysers.appendChild(logo);
     }
    myElements = document.getElementsByClassName('logo');
    context = new AudioContext();
    gainNode = context.createGain();
    analyser = context.createAnalyser();
    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        src = context.createMediaStreamSource(stream);
        src.connect(gainNode);
        src.connect(analyser);
        dest = context.destination;
        gainNode.connect(dest);
        loop();
    }).catch(error => {
        alert(error);
        location.reload();
    });
    document.getElementById('start').setAttribute('style', 'opacity: 0.3');
    document.getElementById('stop').setAttribute('style', 'opacity: 1');
}
function loop() {
    window.requestAnimationFrame(loop);
    analyser.getByteFrequencyData(array);
    for(var i = 0 ; i < num ; i++){
        height = array[i+num];
        myElements[i].style.minHeight = height+'px';
        myElements[i].style.opacity = 0.008*height;
    }
}
function mute() {
    gainElem.value = 0;
    gainNode.gain.value = 0;
    console.log(gainNode.gain.value);
};
function stop() {
    location.reload();
}
gainElem = document.getElementById('gain');
gainElem.addEventListener('change', ()=> {
    if(context) {
        gainNode.gain.value = gainElem.value / 128;
        console.log(gainNode.gain.value);
    }
});