export const path = (file) => {
    return `files/${file}`
}

export const parseSeconds = (totalSeconds) => {
    let hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Math.floor(totalSeconds % 60)

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`
}
