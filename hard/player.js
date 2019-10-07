import { path, parseSeconds } from './utils.js'
import audios from './data.js'
import elements from './playerElements.js'

const player = {
    currentAudioIndex: 0,
    audioData: audios,
    currentAudio: {},
    isMuted: false,
    isPlaying: false,
    start() {
        elements.get.call(this)

        this.update()
    },
    play() {
        this.isPlaying = true
        this.audio.play()
        this.playPause.innerText = 'pause'
    },
    pause() {
        this.isPlaying = false
        this.audio.pause()
        this.playPause.innerText = 'play_arrow'
    },
    togglePlayPause() {
        if (this.isPlaying) this.pause()
        else this.play()
    },
    toggleMute() {
        this.audio.muted = !this.audio.muted
        if (this.audio.muted) {
            this.volControl.value = 0
        } else {
            this.volControl.value = 100
        }
        this.vol.innerText = this.audio.muted ? 'volume_mute' : 'volume_up'
    },
    setVolume(value) {
        this.audio.volume = value / 100
    },
    setSeek(value) {
        this.audio.currentTime = value

        this.currentDuration.innerText = parseSeconds(value)
    },
    timeUpdate() {
        this.currentDuration.innerText = parseSeconds(this.audio.currentTime)

        this.seekBar.value = this.audio.currentTime
    },
    next() {
        this.currentAudioIndex += 1
        if (this.currentAudioIndex === this.audioData.length) this.restart()

        this.update()
        this.play()
    },
    update() {
        this.currentAudio = this.audioData[this.currentAudioIndex]

        this.cover.style.background = `url(${path(
            this.currentAudio.cover,
        )}) no-repeat center center / cover`
        this.title.innerText = this.currentAudio.title
        this.artist.innerText = this.currentAudio.artist
        elements.createAudioElement.call(this, path(this.currentAudio.file))
        this.audio.onloadeddata = () => {
            elements.actions.call(this)
        }
    },
    restart() {
        this.currentAudioIndex = 0
    },
}

export default player
