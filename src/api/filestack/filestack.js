//const API_KEY = 'Anj637BlDTyMhOXjonqruz';
//const processAPI = 'https://process.filestackapi.com';

export const getUrlScreenShot = (url) => {

    if(url.startsWith("www.")){
        url = "http://" + url;
    }
    if(!url.startsWith("http://")){
        url = "http://" + url;
    }

    console.log(url);

    //https://process.filestackapi.com/AWdLLpMAFSGo8szRqg1dAz/urlscreenshot=mode:window,height:1080,width:1080/
    //https://process.filestackapi.com/AWdLLpMAFSGo8szRqg1dAz/urlscreenshot=mode:window,height:1080,width:1080,delay:2000/crop=dim:[385,430,620,620]/resize=width:300/https://twitter.com/Filestack/";
    return "https://process.filestackapi.com/AWdLLpMAFSGo8szRqg1dAz/urlscreenshot=mode:window,height:1080,width:1080,delay:2000/crop=dim:[0,0,1080,1080]/resize=width:600/" + url;
    //https://process.filestackapi.com/AWdLLpMAFSGo8szRqg1dAz/urlscreenshot=mode:window,height:1036/crop=dim:[192,524,512,620]/resize=width:300/https://www.facebook.com/filepickerio
    //https://process.filestackapi.com/AWdLLpMAFSGo8szRqg1dAz/urlscreenshot=agent:mobile,mode:window,height:540,width:680/https://www.twitter.com/FileStack
    //return processAPI + '/' + API_KEY + '/urlscreenshot=mode:window,height:1080,width:1080/' + url;
}


export default {
    getUrlScreenShot,
}
