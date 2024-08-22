//语音播报功能
import Speech from 'speak-tts'
let speech = new Speech();
const speechInit = (cn) => {
    console.log('cn---',cn);
    
    speech.setLanguage(cn ? cn : 'zh-cn');
    speech.init().then(() => {
        console.log('语音初始化')
    })
    return speech
}

//播放
export const speak = (text, cn) => {
    let speech = speechInit(cn)
    speech.speak({
        text: text
    }).then(() => {})
}

// 暂停
export const pauseVoice = () => {
    speech.pause()
}

//  ↩恢复
export const resumeVoice = () => {
    speech.resume()
}

//结束
export const stopVoice = () => {
    speech.cancel()
}

//语言切换
export const changeLanguage = (cn) => {
    speech.setLanguage(cn ? cn : 'zh-cn');
}