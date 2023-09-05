export class AudioRecorder {
    /** @type {String} */
    audioExt = null

    preferredMimeTypes = {
        webm: 'audio/webm',
        mp4: 'audio/mp4;codecs=mp4a',
    }

    constructor(init) { Object.assign(this, init) }

    /** @type {Blob[]} */
    audioPartBlobs = []
    /** @type {Blob} */
    audioBlob = null
    /** @type {Audio} */
    audio = null
    /** @type {MediaRecorder} */
    mediaRecorder = null
    /** @type {MediaStream} */
    streamBeingCaptured = null

    hasAudio() {
        return !!this.audio
    }

    start() {
        if (!navigator.mediaDevices?.getUserMedia) {
            return Promise.reject(new Error('mediaDevices API or getUserMedia method is not supported in this browser.'));
        } else {
            this.audioPartBlobs = []
            this.audioBlob = null
            this.audio = null
            this.audioExt = null
            return navigator.mediaDevices.getUserMedia({
                audio: {
                    advanced: [
                        {
                            channelCount: 1,
                            sampleRate: 16000,
                        },
                    ],
                },
            })
                .then(stream => {
                    try {
                        this.streamBeingCaptured = stream

                        const exts = Object.keys(this.preferredMimeTypes)
                        for (let i = 0; i < exts.length; i++) {
                            const ext = exts[i]
                            const mimeType = this.preferredMimeTypes[ext]
                            try {
                                this.mediaRecorder = new MediaRecorder(stream, { mimeType })
                                this.audioExt = ext
                                break
                            } catch (e) {
                                console.warn(`MediaRecorder: ignoring unsupported mimeType: ${mimeType}`)
                            }
                        }

                        if (this.mediaRecorder) {
                            this.mediaRecorder.addEventListener("dataavailable", event => {
                                this.audioPartBlobs.push(event.data)
                            })
                            this.mediaRecorder.start()
                        }
                    } catch (e) {
                        console.log('error start()', e)
                        throw e
                    }
                    if (!this.mediaRecorder)
                        throw new Error("No supported MediaRecorder mimeTypes found")
                })
        }
    }

    stop() {
        return new Promise(resolve => {
            let type = this.mediaRecorder.mimeType
            this.mediaRecorder.addEventListener("stop", () => {
                try {
                    this.audioBlob = new Blob(this.audioPartBlobs, { type })

                    let reader = new FileReader()
                    reader.onload = e => {
                        let base64URL = e.target.result
                        this.audio = new Audio(base64URL)
                        this.audio.load()
                        resolve(this.audio)
                    }
                    reader.readAsDataURL(this.audioBlob)
                } catch (e) {
                    console.log('error stop()', e)
                    throw e
                }
            })
            this.cancel()
        })
    }

    cancel() {
        this.mediaRecorder.stop()
        this.stopStream()
        this.resetRecordingProperties()
    }

    stopStream() {
        this.streamBeingCaptured.getTracks()
            .forEach(track => track.stop()) //MediaStreamTrack
    }

    resetRecordingProperties() {
        this.mediaRecorder = null
        this.streamBeingCaptured = null
    }
}