(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.g.importScripts&&(e=t.g.location+"");var e,i=t.g.document;if(e||!i||(e=i.currentScript?i.currentScript.src:e)||(i=i.getElementsByTagName("script")).length&&(e=i[i.length-1].src),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e;const s=new class{_callbacks=[];next({action:e}){this._callbacks.forEach(t=>{t({action:e})})}subscribe(t){this._callbacks.push(t)}};class o{constructor({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n}){this.name=t,this.type=e,this.mainColor=i,this.mainVideo=o,this.videoOutput=n,this.communicationTool=s,this._enabled=!1,this._createElement()}_createElement(){this.parentContainer=document.getElementById("filters"),this.element=document.createElement("div"),this.element.classList.add("filter-control"),this.element.setAttribute("style","--main-color:"+this.mainColor),this.element.classList.add(this.type),this.element.innerHTML=`
            <label>
                <input type="checkbox" class="filled-in" id="${this.name}"/>
                <span>${this.name}</span>
            </label>
        `,this.checkbox=this.element.querySelector("#"+this.name),this.parentContainer.appendChild(this.element),this.checkbox&&this.checkbox.addEventListener("change",t=>{this._setState(t)})}isEnabled(){return this._enabled}_setState(t){this._enabled=t.target.checked,this.communicationTool.next({action:u.filterChanged}),this._onSetState()}_onSetState(){}}function n(e){return new Promise(t=>{setTimeout(()=>{t()},e)})}const c=1;function a({url:s,fadeIn:a,loop:l}){const r={},t=document.querySelector(".fake-button");return t.addEventListener("click",async()=>{const t=window.AudioContext||window.webkitAudioContext,e=new t,i=e.createGain(),o=(i.gain.value=c,await fetch(s).then(t=>t.arrayBuffer()).then(t=>e.decodeAudioData(t)));let n;r.play=()=>{a&&h(i),"suspended"===e.state?e.resume().then(()=>console.log("Audio resumed")):((n=e.createBufferSource()).buffer=o,n.loop=!!l,n.connect(i).connect(e.destination),n.start())},r.stop=()=>{n.stop()},r.pause=()=>{e.suspend().then(()=>console.log("Audio suspended"))},r.resume=()=>{a&&h(i),e.resume().then(()=>console.log("Audio resumed"))}}),t.click(),new Promise(t=>{t(r)})}async function h(t){for(t.gain.value=0;t.gain.value<c;)await n(50),t.gain.value+=.01}const l=t.p+"media/audio/Air-alarm-in-Lviv.mp3";const r=Object.freeze({siren:"siren",explosions:"explosions",audioDistortion:"audio-distortion",videoDistortion:"video-distortion",face:"face"});i=Object.freeze({video:"video",audio:"audio",independent:"independent"});const d=[{name:"Siren",type:r.siren,effectType:i.independent,controllerClass:class extends o{constructor({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s}){super({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s}),a({url:l,fadeIn:!0,loop:!0}).then(t=>{this.audioPlayer=t,console.log("Audio Player initialized (Siren)")})}_onSetState(){this.audioPlayer&&(this._enabled?this.audioPlayer.play():this.audioPlayer.pause())}},mainColor:"#ff0000"},{name:"Explosions",type:r.explosions,effectType:i.independent,controllerClass:class extends o{constructor({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s}){super({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s}),this.element=document.getElementById("video-explosions")}_onSetState(){this._enabled?this._showVideo():this._hideVideo()}_showVideo(){this.element.play(),this.element.classList.add("playing")}_hideVideo(){this.element.classList.contains("playing")&&this.element.classList.remove("playing"),this.element.pause()}},mainColor:"#ef6101"},{name:"Audio Distortion",type:r.audioDistortion,effectType:i.audio,controllerClass:class extends o{constructor({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s}){super({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s})}},mainColor:"#e55b7e"},{name:"Video Distortion",type:r.videoDistortion,effectType:i.video,controllerClass:class extends o{constructor({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s}){super({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s})}},mainColor:"#555555"},{name:"Face",type:r.face,effectType:i.video,controllerClass:class extends o{constructor({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s}){super({name:t,type:e,mainColor:i,mainVideo:o,videoOutput:n,communicationTool:s})}},mainColor:"#304b29"}],u={introFinished:"Intro Finished",filterChanged:"Filter Changed"},m=t.p+"media/audio/typewriter.mp3";const p=new class{constructor(){this._init().then(()=>{console.log("Audio Player initialized (TypeMachine)")})}async _init(){this.isPlaying=!1,this.audioPlayer=await a({url:m,fadeIn:!1})}async play({element:e,text:i}){this.isPlaying=!0;for(let t=0;t<i.length;t++){if(await n(Math.floor(278*Math.random()+55)),!this.isPlaying)return;this.playSample(i[t],e)}}stop(){this.isPlaying=!1}playSample(t,e){e.innerHTML+=t," "!==t&&this.audioPlayer.play()}};class y{constructor(){this.communicationTool=s,this.element=document.getElementById("intro"),this.initialSymbol=document.querySelector(".initial-symbol"),this.piotr=this.element.querySelector(".piotr"),this.piotrText="Pyotr Tchaikovsky - June",this.nazar=this.element.querySelector(".nazar"),this.nazarText="Nazar Skrypnyk - Still February",this.rights=this.element.querySelector(".rights"),this.rightsText="All rights ignored",this.continueButton=this.element.querySelector(".continue-button"),this.typeMachine=p}start(){this.initialSymbol.style.display="none",this.playPiotr()}end(){this.communicationTool.next({action:u.introFinished}),this.element.style.display="none"}playPiotr(){this.typeMachine.play({element:this.piotr,text:this.piotrText}).then(()=>{this.animatePiotr()})}animatePiotr(){this.piotr.onanimationend=this.playNazar.bind(this),this.piotr.classList.add("cancelled")}playNazar(){this.typeMachine.play({element:this.nazar,text:this.nazarText}).then(()=>{this.playRights()})}playRights(){this.typeMachine.play({element:this.rights,text:this.rightsText}).then(()=>{this.animateButton()})}animateButton(){this.continueButton.addEventListener("click",()=>{this.end()}),this.continueButton.classList.add("animated")}}class g{constructor({filters:t,videoSource:e,videoOutput:i}){this.filters=t,this.videoSource=e,this.videoOutput=i,this._defineSize()}doLoad(){this.videoOutputCtx=this.videoOutput.getContext("2d"),this.videoSource.addEventListener("play",this._timerCallback.bind(this),!1)}_defineSize(){var t=this.videoSource.getBoundingClientRect();this.width=t.width,this.height=t.height}_timerCallback(){this.videoSource.paused||this.videoSource.ended||(this._computeFrame(),setTimeout(this._timerCallback.bind(this),32))}_computeFrame(){this.videoOutputCtx.drawImage(this.videoSource,0,0,this.width,this.height);var t=this.videoOutputCtx.getImageData(0,0,this.width,this.height);this._setGrey({frame:t}),this.videoOutputCtx.putImageData(t,0,0)}_setGrey({frame:e}){var i=e.data.length/4;for(let t=0;t<i;t++){var o=(e.data[4*t]+e.data[4*t+1]+e.data[4*t+2])/3;e.data[4*t]=o,e.data[4*t+1]=o,e.data[4*t+2]=o}}}const v=t.p+"media/images/play-button.png",f=t.p+"media/images/pause-button.png";class b{constructor({videoSource:t,filters:e}){this.element=document.getElementById("play-button"),this.videoSource=t,this.filters=e,this.enabledFilters=[],this.communicationTool=s,this.isPlaying=!1,this._init()}_init(){this.element.style.backgroundImage=this._createUrl(v),this.element.addEventListener("click",this._togglePlaying.bind(this)),this._initCommunication()}_initCommunication(){this.communicationTool.subscribe(({action:t})=>{t===u.filterChanged&&this._updateEnabledFilters()})}_updateEnabledFilters(){console.log(Object.keys(this.filters)),this.enabledFilters=Object.keys(this.filters).map(t=>({type:t,isEnabled:this.filters[t].isEnabled()})).filter(t=>t.isEnabled),console.log("play",this.enabledFilters)}_togglePlaying(){this.isPlaying?this._pause():this._play()}_play(){this.videoSource.play(),this.isPlaying=!0,this.element.style.backgroundImage=this._createUrl(f)}_pause(){this.videoSource.pause(),this.isPlaying=!1,this.element.style.backgroundImage=this._createUrl(v)}_createUrl(t){return`url(${t})`}}class _{constructor({allowWebcam:t}){this._initProperties(t),this._initFilters(),this._initVideoProcessor(),this._initPlayButton(),this._initCommunication(),this._start()}_initProperties(t){this.allowWebcam=t,this.intro=new y,this.communicationTool=s,this.mainVideo=document.getElementById("video-source"),this.videoOutput=document.getElementById("video-output")}_initFilters(){this.filters={},d.forEach(t=>{if(this.allowWebcam||t.type!==r.face){const{name:e,type:i,mainColor:o,controllerClass:n}=t;this.filters[i]=new n({name:e,type:i,mainColor:o,mainVideo:this.mainVideo,videoOutput:this.videoOutput})}else console.log("using camera is not allowed")})}_initVideoProcessor(){this.videoProcessor=new g({filters:this.filters,videoSource:this.mainVideo,videoOutput:this.videoOutput})}_initPlayButton(){this.playButton=new b({videoSource:this.mainVideo,filters:this.filters})}_initCommunication(){this.communicationTool.subscribe(({action:t})=>{switch(t){case u.introFinished:this._onIntroFinished();break;case u.filterChanged:this._onFilterChanged()}})}_start(){this.intro.start()}_onIntroFinished(){this.videoProcessor.doLoad()}_onFilterChanged(){}}if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const C=document.getElementById("video-webcam");navigator.mediaDevices.getUserMedia({video:!0}).then(function(t){C.srcObject=t,setTimeout(()=>{new _({allowWebcam:!0})},2e3)}).catch(()=>{setTimeout(()=>{new _({allowWebcam:!1})},2e3)})}})();