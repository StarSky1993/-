<template>
	<div class="entering">
		<div class="entering_header">
			<span @click="goback" class="fanhui">&lt; 返回</span>
			<h2 class="title">供应商信息管理 &gt; 商品信息管理</h2>
		</div>
        <div class="status">商品审核不通过：议价空间不足</div>
		<div class="essential">
			<aside><div>基本信息</div></aside>
			<div class="essential_from">
				<form>
					<p class="fengongsi">
						<label>商品名称 :</label>
						<input placeholder="请输入商品名称" v-model="params.shop_name"/>
						<label class="fen">分公司 :</label>
						<select v-model="params.brand_office">
							<option value="">请选择</option>
 							<option v-for="item in params.company" :value="item.id">{{item.company}}</option>
						</select>
						<i></i>
					</p>
					<p class="A">
						<label>一级分类 :</label>
						<select v-model="params.first_class">
 							<option value="">请选择</option>
 							<option :value="item.id" v-for="item in params.classify">{{item.classify}}</option>
						</select>
						<i></i>
						<label class="ren">认证 :</label>
						<input v-model="params.authentication" type="text" placeholder="请输入认证">
					</p>
					<p class="text1">
						<label>商品描述 :</label>
						<textarea maxlength="120" @input="descInput" v-model="params.desc" placeholder="有效文字不超过120。"></textarea>
						<span>{{params.remnant}}/120</span>
					</p>
				</form>
				<!-- 上传附件 -->
				<div id="upload">
					<!-- 封面 -->
					<div class="cover">
						<h3>商品封面图&nbsp;&nbsp;:&nbsp;&nbsp;</h3>
						<p>建议大小为<font>&nbsp;2M，</font>格式为.png，.jpg 等</p>
					</div>
					<div class="upload_img">
						<Base64Upload @change="upload" objInfo="cover_img" :cover_img="params.cover_img">
						</Base64Upload>
					</div>
					<!-- 商品相册 -->
					<div class="album_title">
						<h3>商品相册&nbsp;&nbsp;:&nbsp;&nbsp;</h3>
						<p>可上传<font>&nbsp;3&nbsp;</font>个图片，建议大小为<font>&nbsp;2M</font>	，格式为.png，.jpg 等</p>
					</div>
					<div class="album">
						<Base64Upload v-for="(item,index) in params.album_img" style="float:left;" :key="index" :objInfo="{index:index,obj:'album_img'}" @change="upload" :cover_img="params.album_img[index]">
						</Base64Upload>
					</div>
					<!-- 商品详情 -->
					<div class="details_title">
						<h3>商品详情&nbsp;&nbsp;:&nbsp;&nbsp;</h3>
						<p>可上传<font>&nbsp;6&nbsp;</font>个图片，建议大小为<font>&nbsp;2M</font>	，格式为.png，.jpg 等</p>
					</div>
					<div class="details">
						<Base64Upload v-for="(item,index) in params.details_img" style="float:left;" :key="index" :objInfo="{index:index,obj:'details_img'}" @change="upload" :cover_img="params.details_img[index]">
						</Base64Upload>
					</div>
				</div>
			</div>
		</div>
		<div class="marketing">
			<el-container>
  			<el-aside width="121px"><div>销<br>售<br>信<br>息</div></el-aside>
  			<el-main>
  				<div class="sell" v-for="item,index in params.sell">
  					<div class="specification" >
  						<p class="guige" style="padding-left:39px;">
  							<label>规范&nbsp;{{index+1}}&nbsp;:&nbsp;</label>
  							<input type="text" v-model="item.sku" placeholder="请输入产品规格">
  						</p>
  						<p class="guige" style="padding-left:38px;">
  							<label>供应价&nbsp;:&nbsp;</label>
  							<input type="text" v-model="item.price" placeholder="请输入供应价">
  						</p>
  						<p class="guige" style="padding-left:52px;">
							<label>售价&nbsp;:&nbsp;</label>
							<input type="text"v-model="item.const" placeholder="请输入售价">
						</p>
						<p class="guige">
							<label>售价（积分）:&nbsp;</label>
							<input type="text"v-model="item.inter" placeholder="请输入积分">
						</p>
					</div>
					<div class="guigeimg">
						<p class="guigetu" style="margin-bottom:0px;">
  							<label>规格图&nbsp;:&nbsp;</label>
  							<span>建议大小为<font>2M</font>，格式为.png，.jpg 等</span>
  						</p>
  						<p class="shangchuan" style="margin-left:62px;">
  							<Base64Upload @change="upload" objInfo="cover_img" :cover_img="params.cover_img">
  							</Base64Upload>
						</p>
						<p class="kucun" style="margin-left:13px;">
							<label>库存&nbsp;:&nbsp;
							&nbsp;</label>
							<input type="text" v-model="item.const1" placeholder="请输库存">
						</p>
					</div>
				</div>
				<div class="add_specification" @click="add_specification"></div>

  			</el-main>
			</el-container>
		</div>
		<footer class="entering_footer">
			<button class="button" @click="entering_submit">重新提交审核</button>
			<button class="cancel" @click="cancel">取消提交审核</button>
		</footer>
	</div>
</template>

<style scoped>
	html,body,.entering {
		width: 100%;
		height: 100%;
	}
	input {
		outline: none;
		border: 1px solid #c8c8c8;
	}
	.entering select {
		border: 1px solid #c8c8c8;
		color: #c8c8c8;
		outline: none;
		appearance:none;
	}
	input::-webkit-input-placeholder {
		color: #c8c8c8;
	}
	.entering {
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
	}
	.title {
		width: 100%;
		height: 71px;
		float: left;
		padding-left: 52px;
		line-height: 71px;
		font-size: 14px;
		color: #333;
		background: url('../../assets/icon/rectangle2.png') no-repeat;
		background-size: 2px 18px;
		background-position: 48px 28px;
		border-bottom: 1px solid #e1e6eb;
		text-indent: 5px;
		margin-bottom: 15px;
	}
    .status {
		height: 85px;
		line-height: 85px;
		background-color: #f5f6fa;
		border-left: 4px solid #f95252;
		text-indent: 118px;
		font-family: MicrosoftYaHei;
		font-size: 16px;
		font-weight: bold;
		color: #f95252;
	}
	.entering_header {
		overflow: hidden;
	}
	.entering_header .fanhui {
		cursor: pointer;
	}
	.entering_header span {
		font-size: 15px;
		color: #0099cc;
		position: absolute;
		top: 25px;left: 18px;
	}
	.essential {
        margin-top: 15px;
		overflow: hidden;
		height: 972px;
		border: 1px solid #e1e6eb;
	}
	.essential aside {
		width: 121px;
		height: 953px;
		background-color: #f5f6fa;
		font-family: HiraginoSansGB;
		font-size: 14px;
		color: #333;
		line-height: 955px;
		letter-spacing: 20px;
		word-wrap: break-word;
		padding-top: 445px;
		float: left;
	}
	.essential aside div {
		margin:0 auto;
		width:20px;
		line-height:24px;
		text-align: center;
	}
	.essential_from {
		overflow: hidden;
	}
	.essential_from form {
		margin-top: 16px;
		height: 218px;
		overflow: hidden;
	}
	.essential_from form label {
		width: 77px;
		height: 34px;
		font-size: 14px;
		color: #777;
		float: left;
		margin-left: 74px;
		line-height: 34px;
	}
	.essential_from form input {
		float: left;
	}
	.essential_from form input, .essential_from form select {
		display: block;
		width: 320px;
		padding-left: 9px;
		height: 36px;
		float: left;
		font-size: 14px;
	}
	.essential_from form .fen {
		width: 62px;
	}
	.essential_from form p {
		position: relative;
		width: 950px;
		height: 36px;
		overflow: hidden;
		float: left;
		margin-bottom: 20px;
	}
	.essential_from form .ren {
		width: 62px;
		text-indent: 15px;
	}
	.essential_from form  p select {
		width: 320px;
		height: 36px;
		font-size: 14px;
	}
	option {
		color: #333;
	}
	.essential_from form p textarea {
		display: block;
		float: left;
		width: 320px;
		height: 73px;
		resize: none;
		border: 1px solid #c8c8c8;
		outline: none;
		padding-top: 7px;
		padding-left: 9px;
		font-size: 14px;
	}
	textarea::-webkit-input-placeholder {
		color: #c8c8c8;
	}
	.text1 span {
		position: absolute;
		display: block;
		width: 50px;
		height: 25px;
		color: #ccc;
		font-size: 12px;
		bottom: 0px;
		left: 420px;
	}
	.essential_from form .text1 {
		height: 82px;
	}
	.fengongsi {
		position: relative;
	}
	.fengongsi i {
		width: 27px;
		height: 34px;
		position: absolute;
		top: 1px;
		right: 24px;
		background: url('../../assets/icon/down2.png') no-repeat;
		background-size: 27px 34px;
	}
	.A {
		position: relative;
	}
	.A i {
		width: 27px;
		height: 34px;
		position: absolute;
		top: 1px;
		left: 443px;
		background: url('../../assets/icon/down2.png') no-repeat;
		background-size: 27px 34px;
	}
	#upload {
		overflow: hidden;
	}
	.upload_img .upload{
		margin-left: 150px;
	}
	#upload .cover {
		width: 100%;
		height: 20px;
		float: left;
		margin-left: 60px;
	}
	#upload .cover h3, #upload .cover p{
		float: left;
		font-size: 14px;
		line-height: 20px;
		color: #777;
	}
	#upload .cover h3 {
		font-size: 14px;
		color: #777;
	}
	#upload .cover p {
		font-size: 14px;
		color: #c8c8c8;
	}
	#upload .cover p font {
		color: #f00;
	}
	.upload_img {
		width: 100%;
		padding-top: 15px;
		float: left;
		margin-bottom: 50px;
	}
	.album {
		float: left;
		padding-top: 15px;
		padding-left: 150px;
		width: 100%;
		overflow: hidden;
	}
	.album .upload, .details .upload {
		float: left;
		overflow: hidden;
		margin-right: 40px;
	}
	.album_title, .details_title {
		width: 100%;
		height: 20px;
		float: left;
		margin-left: 74px;
		font-size: 14px;
	}
	#upload h3 {
		float: left;
		font-size: 14px;
		color: #838383;
		line-height: 20px;
	}
	#upload p {
		float: left;
		line-height: 20px;
		font-size: 14px;
		color: #c8c8c8;
	}
	#upload .album_title p font, .details_title p font {
		color: #f00;
	}
	.album_box {
		float: left;
	}
	.details_title p, .details_title h3 {
		margin-top: 25px;
		margin-left: ;
	}
	.details {
		float: left;
		padding-top: 40px;
		padding-left: 150px;
		width: 100%;
		overflow: hidden;
	}
	#upload .details {
		width: 630px;
	}
	#upload .details .upload {
		margin-bottom: 20px;
	}
	.marketing {
		width: 100%;
		margin-top: 20px;
		overflow: hidden;
		border: 1px solid #e1e6eb;
		box-sizing: border-box;
	}
	.el-aside {
		background-color: #f5f6fa;
		display: flex;
		align-items:center;
		justify-content:center;
		line-height: 23px;
		font-family: HiraginoSansGB;
		font-size: 14px;
		color: #333;
	}
	.el-main {
		padding-top: 16px;
		padding-left: 52px;
	}
	.sell {
		overflow: hidden;
		margin-bottom: 50px;
	}
	.specification, .guigeimg {
		width: 419px;
		height: 228px;
		float: left;
	}
	.guigeimg {
		margin-left: 79px;
	}
	.specification .guige, .guigetu {
		width: 419px;
		height: 36px;
		float: left;
		margin-bottom: 24px;
	}
	.guigetu h4 {
		float: left;
		width: 419px;
	}
	.specification p label, .specification p label {
		line-height: 36px;
		height: 36px;
		font-size: 14px;
		color: #777;
	}
	.specification p  input {
		height: 36px;
		width: 320px;
		padding-left: 7px;
	}
	.guigetu span {
		font-size: 14px;
		color: #c8c8c8;
		line-height: 36px;
		height: 36px;
	}
	.guigetu span font {
		color: #f00;
	}
	.shangchuan {
		width: 356px;
		height: 120px;
		float: left;
	}
	.kucun {
		float: left;
		margin-top: 27px;
	}
	.guigetu label, .kucun label {
		height: 36px;
		line-height: 36px;
		float: left;
		font-size: 14px;
		color: #777;
	}
	.kucun input {
		height: 36px;
		width: 320px;
		padding-left: 7px;

	}
	.add_specification {
		width: 320px;
		height: 177px;
		background: url('./imgs/Addition_specification.png') no-repeat;
		background-size: 320px 177px;
		cursor: pointer;
		margin-left: 97px;
	}
	.entering_footer {
		width: 100%;
		height: 116px;
		display: flex;
		align-items: center;
  		justify-content: center;
		line-height: 116px;
		margin-top: 100px;

		background-color: #f9f8f8;
		-webkit-box-shadow: inset 0 1px rgba(221,221,221,.35);
		-moz-box-shadow: inset 0 1px rgba(221,221,221,.35);
		box-shadow: inset 0 1px rgba(221,221,221,.35);
  	}
  	.button {
  		width: 170px;
  		height: 60px;
  		outline: none;
  		border: none;
  		cursor: pointer;
  		background-color: #09c;
		font-size: 16px;
		color: #fff;
		margin-right: 80px;
  	}
  	.cancel {
  		width: 170px;
  		height: 60px;
  		outline: none;
  		cursor: pointer;
  		border: none;
		font-size: 16px;
		color: #333;
  	}

</style>

<script>
import Base64Upload from '../../components/upload/upload'
import qs from "qs"
	export default {
		name: 'entering',
		mounted(){

		},
		data() {
			return {
				//存放上传图片
				// imageUrl: ''
				params:{
					goods_name:'',
					cover_img: '',
					album_img:['','',''],
					details_img: ['','','','','',''],
					sell:[
					{
						sku:'',
						price:'',
						const:'',
						inter:'',
						const1:''
					}],
					//商品名称
					shop_name:'',
					//绑定分公司
					brand_office:'',
					//绑定一级分类
					first_class:'',
					//分公司数组
					company:[{
						company:'总部',
						id:1
					},{
						company:'仙居分公司',
						id:2
					}],
					//一级分类数组
					classify:[{
						classify:'美食',
						id:1,
					},{
						classify:'旅游',
						id:2
					},{
						classify:'住宿',
						id:3
					},{
						classify:'酒水',
						id:4
					}],
					//认证
				authentication: '',
				//文本域初始化
				remnant: 120,
				//绑定文本域
				desc: ''
				}
			}
		},
		components: {
			Base64Upload
		},
		methods: {
			goback() {
				this.$router.go(-1);
			},
			onChangeImage(file) {
    		},
    		upload(params,objInfo) {

    			var _self = this;
    			this.$axios.post('http://192.168.9.71:8091/fileUpload',qs.stringify({base64Data:params.base64})).then( (res)=> {
    				if(objInfo instanceof Object){
    					_self.params[objInfo.obj].splice(objInfo.index,1,'http://img.sxwvc.com/'+res.data.data)
    					return ;
    				}
    				// console.log(2)
    				_self.params[objInfo] = 'http://img.sxwvc.com/'+res.data.data;
    			}).catch(error => {
    				// console.log(error);

    			});
    		},
    		//添加规格数
    		add_specification() {
    			if(this.params.sell.length<20){
	    			this.params.sell.push({
	    				sku:'',
						price:'',
						const:'',
						inter:'',
						const1:''
	    			})
    			}
    		},
    		//提交审核
    		entering_submit() {
    			const h = this.$createElement;
    			this.$msgbox({
					title: '提示',
					message: h('p', null, [
            			h('span', null, '确定'),
            			h('font',{ style: 'color: red', },'提交审核？')
          			]),
          			showCancelButton: true,
          			confirmButtonText: '确定',
          			cancelButtonText: '取消',
          			beforeClose: (action, instance, done) => {
            			if (action === 'confirm') {
              				instance.confirmButtonLoading = true;
              				localStorage.isLogin=false;
							this.$router.go(-1);
                				done();
                				setTimeout(() => {
                  					instance.confirmButtonLoading = false;
                				}, 300);
            			} else {
              				done();
            			}
          			}
				})
    		},//取消提交
    		cancel() {
    			this.$router.go(-1);
    		},//文本域剩余输入数
    		descInput(){
 				var txtVal = this.params.desc.length;
 				this.params.remnant = 120 - txtVal;
 			},

		},
		created() {
		}

	}
</script>
