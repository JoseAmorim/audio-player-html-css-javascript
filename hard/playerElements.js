import { parseSeconds } from './utils.js'

export default {
    get() {
        this.cover = document.querySelector('.card-image')
        this.title = document.querySelector('.card-content h5')
        this.artist = document.querySelector('.artist')
        this.playPause = document.querySelector('#play-pause')
        this.vol = document.querySelector('#vol')
        this.volControl = document.querySelector('#vol-control')
        this.seekBar = document.querySelector('#seekbar')
        this.totalDuration = document.querySelector('#total-duration')
        this.currentDuration = document.querySelector('#current-duration')
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio)
    },
    actions() {
        this.audio.onended = () => this.next()
        this.audio.ontimeupdate = () => this.timeUpdate()
        this.playPause.onclick = () => this.togglePlayPause()
        this.vol.onclick = () => this.toggleMute()
        this.volControl.oninput = () => this.setVolume(this.volControl.value)
        this.volControl.onchange = () => this.setVolume(this.volControl.value)
        this.seekBar.oninput = () => this.setSeek(this.seekBar.value)
        this.seekBar.onchange = () => this.setSeek(this.seekBar.value)

        this.seekBar.max = this.audio.duration
        this.totalDuration.innerText = parseSeconds(this.audio.duration)
    },
}
