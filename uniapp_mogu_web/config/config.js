export const appConfig = {

    tokenKey: 'Authorization',
	
	// 开发环境
	// WEB_API: 'http://localhost:8607/mogu-web',
	// PICTURE_API: 'http://localhost:8607/mogu-picture',
	
	// 演示环境
	// WEB_API: 'http://120.78.126.96:8607/mogu-web',
	// PICTURE_API: 'http://120.78.126.96:8607/mogu-picture',
	
	// 正式环境
	// WEB_API: 'https://apiweb.moguit.cn/mogu-web',
	// PICTURE_API: 'https://apiweb.moguit.cn/mogu-picture',
	//by ch:这里跟教程设置的有区别了，我这里不走网关了,直接走域名服务api了
		WEB_API: 'https://apiweb.godink.com',
		PICTURE_API: 'https://apipicture.godink.com'
}