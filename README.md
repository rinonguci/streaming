Live Video Streaming
---
___
This is demo app for **live video streaming**. Only for basic idea how we can stream live video using **WebSocket**. 

Install steps
---
___
* Download the [code as zip](https://codeload.github.com/rish7/live-video-streaming/zip/master) or [clone](https://github.com/rish7/live-video-streaming.git) it.
* run ```npm install``` on root directory
* run ```npm start``` to start the application (or use VS Code debug to launch with debug)

Preview image
---
___
Preview of WebSocket data as it is
![Preview](preview.png)
Preview of WebSocket data and modify using ffmpeg
![Preview](ffmpeg-preview.png)


To use ffmpeg
---
___
Comment below lines of code in **[server.js](https://github.com/rish7/live-video-streaming/blob/master/server.js#L46-L48)**
```javascript
/*
for (var client in clients){
    clients[client].write(data); // Sending ws data back
}
*/
```

Uncomment the code below line of code in **[server.js](https://github.com/rish7/live-video-streaming/blob/master/server.js#L51)**
```javascript
ffmpeg.stdin.write(data);
```

**Note:- This is just a demo application, did not handle socket connections. And also there is a delay of stream video. If we use ffmpeg to modify video it will take bit more delay. If we go for WebRTC or RTMP media servers will give low latency.** 
