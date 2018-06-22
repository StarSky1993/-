<style scoped lang="less">
	.entering {
		box-sizing: border-box;
	}
	.entering_header {
		line-height: 72px;
		height: 72px;
		margin: 0px 20px;
		.fanhui {
			font-size: 14px;
			color: #0099cc;
			white-space: nowrap;
			cursor: pointer;
		}
		.title {
			font-size: 14px;
			color: #333;
			position: relative;
			padding-left: 21px;
			white-space: nowrap;
			&:before {
				content: '';
				display: block;
				width: 2px;
				height: 16px;
				position: absolute;
				left: 11px;
				top:27px;
				background: url('../../assets/icon/rectangle1.png') no-repeat;
				background-size: 2px 16px;
			}
		}
	}
	@media (max-width: 1340px) {
    	.entering {
        	width: 1340px;

    	}
	}
	input::-webkit-input-placeholder {
  		color: #c8c8c8;
	}
	input:-moz-placeholder {
  		color: #c8c8c8;
	}
	input::-moz-placeholder {
  		color: #c8c8c8;
	}
	input:-ms-input-placeholder {
  		color: #c8c8c8;
	}
	textarea::-webkit-input-placeholder {
		color: #c8c8c8;
	}
	.essential {
		margin: 0px 20px;
		border: 1px solid #e1e6eb;
		.aside {
			width: 122px;
			justify-content: flex-start;
			justify-content: center;
			border-right: 1px solid #e1e6eb;
			background-color: #f5f6fa;
			div {
				display:flex;
    			align-items: center;
				margin: 0 auto;
				padding-left: 53px;
				width: 122px;
				font-size: 14px;
			}
		}
		.essential_from {
			margin: 0px 20px;
			white-space: nowrap;
			width: 100%;
			justify-content:flex-end;
			.from {
				width: 875px;
				p {
					height: 52px;
					font-size: 14px;
					margin-left: 74px;
					label{
						display: block;
						width: 76px;
						height: 52px;
						line-height: 62px;
						color: #777;
						&:nth-child(3) {
							display: block;
							width: 62px;
						}
					}
					select {
						width: 320px;
						height: 36px;
						margin-top: 16px;
						padding-left: 9px;
						color: #c8c8c8;
						border: 1px solid #e0e0e0;
						option {
							color: #000;
						}
					}
					input {
						width: 320px;
						height: 36px;
						padding-left: 9px;
						border: 1px solid #e0e0e0;
						margin-top: 16px;
						&:nth-child(2) {
							margin-right: 79px;
							color: #c8c8c8;
							border: 1px solid #e0e0e0;
						}
					}
				}
				p:nth-child(2) {
					label:nth-child(4) {
						width: 62px;
						height: 52px;
						line-height: 62px;
						text-indent: 12px;

					}
					select {
						margin-right: 79px;
					}
				}
				p:nth-child(3) {
					margin-top: 20px;
					height: 84px;
					position: relative;
					label {
						height: 84px;
						line-height: 30px;
					}
					textarea {
						width: 320px;
						height: 84px;
						padding-left: 9px;
						padding-top: 7px;
						border: 1px solid #e0e0e0;
					}
					span {
						position: absolute;
						color: #c8c8c8;
						left: 335px;bottom: 2px;
					}
				}
			}
			#upload {
				width: 875px;
				margin-left: 74px;
				font-size: 14px;
				line-height: 60px;
				.cover {
					height: 60px;
					h3 {
						color: #777;
					}
				}
				p {
					color: #d7d7d7;
					font {
						color: red;
					}
				}
				.upload_img {
					margin-left: 76px;
				}
				.album_title {
					margin-top: 24px;
					h3 {
						color: #777;
					}
				}
				.album {
					.base64 {
						margin-right: 40px;
					}
				}
				.details_title {
					h3 {
						color: #777;
					}
				}
				.details {
					flex-wrap: wrap;
					width: 480px;
					.base64 {
						margin-bottom: 20px;
						margin-right: 40px;
					}
				}
			}
		}
	}
	.marketing {
		height: 100%;
		margin: 0 20px;
		margin-top: 20px;
		border: 1px solid #e1e6eb;
		flex-wrap: wrap;
		position: relative;
		.aside {
			width: 122px;
			height: 100%;
			position: absolute;
			bottom: 0px;left: 0px;
			justify-content: flex-start;
			border-right: 1px solid #e1e6eb;
			background-color: #f5f6fa;
			div {
				display:flex;
    			justify-content: center;
    			position: absolute;
    			left: 0px;top: 50%;
				width: 122px;
				font-size: 14px;
			}
		}
		.sell {
			width: 100%;
			padding-left: 122px;
			justify-content: flex-end;
			.specification {
				float: left;
				width: 470px;
				p {
					margin-left: 74px;
					width: 418px;
					height: 52px;
					label {
						display: block;
						width: 76px;
						height: 52px;
						line-height: 62px;
						font-size: 14px;
						color: #777;
						text-indent: 20px;
					}
					input {
						width: 320px;
						height: 36px;
						padding-left: 9px;
						border: 1px solid #e0e0e0;
						margin-top: 16px;
					}
					span {
						font-size: 14px;
						line-height: 62px;
						color: #c8c8c8;
						font {
							color: red;
						}
					}
				}
				p:nth-child(4) {
					margin-left: 52px;
					label {
						width: 98px;
						text-indent: 0px;
					}

				}

			}
			.guigeimg {
				width: 382px;
				float: left;
				justify-content: flex-end;
				margin-left: 79px;
				p:nth-child(1){
					label {
						display: block;
						width: 62px;
						height: 44px;
						line-height: 62px;
						font-size: 14px;
						color: #777;
					}
					span {
						font-size: 14px;
						color: #c8c8c8;
						display: block;
						height: 44px;
						line-height: 62px;
						font {
							color: red;
						}
					}
				}
				p:nth-child(2) {
					margin-left: 62px;
				}
				p:nth-child(3) {
					label {
						display: block;
						width: 62px;
						height: 52px;
						line-height: 62px;
						font-size: 14px;
						color: #777;
						text-indent: 10px;
					}
					input {
						width: 320px;
						height: 36px;
						padding-left: 9px;
						border: 1px solid #e0e0e0;
						margin-top: 16px;
					}
				}
			}
		}
		.add_specification {
			width: 321px;
			height: 177px;
			margin: 10px 0px 29px 270px;
			background: url('./imgs/Addition_specification.png') no-repeat;
		}
	}
	.entering_footer {
		margin-top: 94px;
		height: 116px;
		background-color: #f9f8f8;
		position: relative;
		button {
			width: 150px;
			height: 60px;
			position: absolute;
			font-size: 18px;
		}
		.button {
			background-color: #0099cc;
			top: 37px; left: 40%;
			color: #fff;
		}
		.cancel {
			background-color: #f7f7f7;
			top: 37px; left: 50%;
			color: #000;
			border: 1px solid #ddd;
		}
	}
</style>

<template>
	<div class="entering">
		<div class="entering_header flex">
			<span @click="goback" class="fanhui">&lt; 返回</span>
			<h2 class="title">供应商信息管理 &gt; 商品信息管理</h2>
		</div>
		<div class="essential flex">
			<div class="aside flex"><div>基<br>本<br>信<br>息</div></div>
			<div class="essential_from">
				<form class="from">
					<p class="flex">
						<label>商品名称 :</label>
						<input placeholder="请输入商品名称" v-model="params.shop_name"/>
						<label>分公司 :</label>
						<select v-model="params.brand_office">
							<option value="" disabled>请选择</option>
 							<option v-for="item in params.company" :value="item.id">{{item.company}}</option>
						</select>
						<i></i>
					</p>
					<p class="flex">
						<label>一级分类 :</label>
						<select v-model="params.first_class">
 							<option value="" disabled>请选择</option>
 							<option :value="item.id" v-for="item in params.classify">{{item.classify}}</option>
						</select>
						<i></i>
						<label class="ren">认证 :</label>
						<input v-model="params.authentication" type="text" placeholder="请输入认证">
					</p>
					<p class="flex">
						<label>商品描述 :</label>
						<textarea maxlength="120" @input="descInput" v-model="params.desc" placeholder="有效文字不超过120。"></textarea>
						<span>{{params.remnant}}/120</span>
					</p>
				</form>
				<!-- 上传附件 -->
				<div id="upload">
					<!-- 封面 -->
					<div class="cover flex">
						<h3>商品封面图&nbsp;&nbsp;:&nbsp;&nbsp;</h3>
						<p>建议大小为<font>&nbsp;2M，</font>格式为.png，.jpg 等</p>
					</div>
					<div class="upload_img">
						<Base64Upload @change="upload" objInfo="cover_img" :cover_img="params.cover_img">
						</Base64Upload>
					</div>
					<!-- 商品相册 -->
					<div class="album_title flex">
						<h3>商品相册&nbsp;&nbsp;:&nbsp;&nbsp;</h3>
						<p>可上传<font>&nbsp;3&nbsp;</font>个图片，建议大小为<font>&nbsp;2M</font>	，格式为.png，.jpg 等</p>
					</div>
					<div class="album flex">
						<Base64Upload class="base64" v-for="(item,index) in params.album_img" :key="index" :objInfo="{index:index,obj:'album_img'}" @change="upload" :cover_img="params.album_img[index]">
						</Base64Upload>
					</div>
					<!-- 商品详情 -->
					<div class="details_title flex">
						<h3>商品详情&nbsp;&nbsp;:&nbsp;&nbsp;</h3>
						<p>可上传<font>&nbsp;6&nbsp;</font>个图片，建议大小为<font>&nbsp;2M</font>	，格式为.png，.jpg 等</p>
					</div>
					<div class="details flex">
						<Base64Upload class="base64" v-for="(item,index) in params.details_img" :key="index" :objInfo="{index:index,obj:'details_img'}" @change="upload" :cover_img="params.details_img[index]">
						</Base64Upload>
					</div>
				</div>
			</div>
		</div>
		<div class="marketing flex">
			<div class="aside"><div>销<br>售<br>信<br>息</div></div>
  				<div class="sell" v-for="item,index in params.sell">
  					<div class="specification">
  						<p class="flex">
  							<label>规格&nbsp;{{index+1}}&nbsp;:&nbsp;</label>
  							<input type="text" v-model="item.sku" placeholder="请输入产品规格">
  						</p>
  						<p class="flex">
							<label>供应价&nbsp;:&nbsp;</label>
  							<input type="text" v-model="item.price" placeholder="请输入供应价">
						</p>
						<p class="flex">
							<label>售价&nbsp;:&nbsp;</label>
							<input type="text"v-model="item.const" placeholder="请输入售价">
  						</p>
  						<p class="flex">
  						<label>售价（积分）:&nbsp;</label>
							<input type="text"v-model="item.inter" placeholder="请输入积分">
						</p>
					</div>
					<div class="guigeimg">
						<p class="flex">
  							<label>规格图&nbsp;:&nbsp;</label>
  							<span>建议大小为<font>2M</font>，格式为.png，.jpg 等</span>
  						</p>
  						<p class="flex">
							<Base64Upload @change="upload" objInfo="cover_img" :cover_img="params.cover_img">
  							</Base64Upload>
						</p>
						<p class="flex">
							<label>库存&nbsp;:&nbsp;
							&nbsp;</label>
							<input type="text" v-model="item.const1" placeholder="请输库存">
						</p>
					</div>
				</div>
				<p class="add_specification flex" @click="add_specification"></p>
		</div>
		<footer class="entering_footer">
			<button class="button" >提交审核</button>
			<button class="cancel" @click="cancel">取消</button>
		</footer>
	</div>
</template>

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
			//返回到表格页
			goback() {
				this.$router.go(-1);
			},
			//图片上传
    		upload(params,objInfo) {
    			var _self = this;
    			this.$axios.post('http://192.168.9.71:8091/fileUpload',qs.stringify({base64Data:params.base64})).then( (res)=> {
    				if(objInfo instanceof Object){
    					_self.params[objInfo.obj].splice(objInfo.index,1,'http://img.sxwvc.com/'+res.data.data)
    					return ;
    				}
    				_self.params[objInfo] = 'http://img.sxwvc.com/'+res.data.data;
    			}).catch(error => {

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
			//取消提交
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