# Tiya-Tabris

用Tabris开发的app雏形。  
[Tabris](https://tabrisjs.com/)是一个移动开发框架，可以完全用Javascript开发iOS、Android 和 Windows app。  
对该框架的感受如下：  
优点
- 文档清晰，非常适合前端开发人员的开发思路
- 支持线上打包，不需要做复杂的本地环境配置，只需要安装一个开发者app就可以调试应用了
- 不需要webview
- 支持npm包，支持cordova插件（内置摄像头调用，扫码，陀螺仪，消息提醒等）
- 支持fs，支持es6、ts和jsx，支持WebSocket等W3C API
- 对于ui定制性不太强的应用，几乎只需花点时间浏览文档，就可以撸起袖子开干了

体验不太好的地方
- 框架提供的组件可定制性不强，如果业务场景稍复杂，还是需要自己介入原生代码开发组件（从另一个角度说，这也省去了很多设计的工作，反正我是不会设计）

总的来说，个人认为，在不需要webview的js app开发框架中（如React Native、NativeScript、weex等），该框架是最易上手的，调试、打包、发布一条龙。
