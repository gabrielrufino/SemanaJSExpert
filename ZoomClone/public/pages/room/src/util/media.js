class Media {
  getCamera(audio = false, video = true) {
    return navigator.mediaDevices.getUserMedia({
      video,
      audio
    })
  }
}
