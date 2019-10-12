const path=require("path");

module.exports={
	mode:"production",
	entry:{
		Vector2D:"./src/Vector2D.ts"
	},
	module:{
		rules:[{
			test:/\.ts?$/,
			use:'ts-loader',
			exclude:/node_modules/
		}]
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'dist'),
		library:'root',
		libraryTarget:'umd'
	}
}
