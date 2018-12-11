console.log('加载成功');

//配置引入的js文件，的路径（可省略）
/*
	如果你配置了路径，你可以直接使用模块
	如果你不配置路径，引入模块的时候需要把路径补齐。
	【注】要求大家配置路径。
 */
require.config({
	paths: {
		//自己起的引入模块的名字:引入模块的路径
		jquery: "jquery-1.10.1.min",
		index: "index",
		cela:"cela",
	},
})
// require.config({
	
// })
//通过AMD规范引入模块，使用模块
//第一个参数必须是数组。
require(["index","cela"], function(index,cela){
	//参数的部分，拿到，前面引入的模块
	index.index()
	cela.cela()
})