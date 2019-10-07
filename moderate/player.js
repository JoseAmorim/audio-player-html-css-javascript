window.player = {
    cover: document.querySelector('.card-image'),
    title: document.querySelector('.card-content h5'),
    artist: document.querySelector('.artist'),
    audio: document.querySelector('audio'),
    currentAudioIndex: 0,
    audioData: audios,
    currentAudio: {},
    start() {
        this.update()

        this.audio.onended = () => this.next()
    },
    next() {
        this.currentAudioIndex += 1
        if (this.currentAudioIndex === this.audioData.length) this.restart()

        this.update()
    },
    update() {
        this.currentAudio = this.audioData[this.currentAudioIndex]

        this.cover.style.background = `url(${path(
            this.currentAudio.cover,
        )}) no-repeat center center / cover`
        this.title.innerText = this.currentAudio.title
        this.artist.innerText = this.currentAudio.artist
        this.audio.src = path(this.currentAudio.file)
    },
    restart() {
        this.currentAudioIndex = 0
    },
}
