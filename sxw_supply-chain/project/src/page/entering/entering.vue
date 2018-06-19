<style scoped lang="less">
	.entering {
		padding: 0px 20px;
		box-sizing: border-box;
	}
	.entering_header {
		line-height: 72px;
		height: 72px;
		border-bottom: 1px solid #ddd;
		.fanhui {
			font-size: 14px;
			color: #0099cc;
		}
		.title {
			font-size: 14px;
			color: #333;
			position: relative;
			padding-left: 21px;
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
	.essential {
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
				text-align: center;
				width: 24px;
				font-size: 14px;
			}
		}
		.essential_from {
			width: 100%;
			justify-content:flex-end;
			.from {
				.fengongsi {
					height: 72px;
					font-size: 14px;
					margin-left: 74px;
					label {
						display: block;
						width: 76px;
						line-height: 72px;
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
	}
</style>

<template>
	<div class="entering">
		<div class="entering_header flex">
			<span @click="goback" class="fanhui">&lt; 返回</span>
			<h2 class="title">供应商信息管理 &gt; 商品信息管理</h2>
		</div>
		<div class="essential flex">
			<aside class="aside flex"><div>基本信息</div></aside>
			<div class="essential_from">
				<form class="from">
					<p class="fengongsi flex">
						<label>商品名称 :</label>
						<input placeholder="请输入商品名称" v-model="params.shop_name"/>
						<label>分公司 :</label>
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
						<Base64Upload v-for="(item,index) in params.album_img" :key="index" :objInfo="{index:index,obj:'album_img'}" @change="upload" :cover_img="params.album_img[index]">
						</Base64Upload>
					</div>
					<!-- 商品详情 -->
					<div class="details_title">
						<h3>商品详情&nbsp;&nbsp;:&nbsp;&nbsp;</h3>
						<p>可上传<font>&nbsp;6&nbsp;</font>个图片，建议大小为<font>&nbsp;2M</font>	，格式为.png，.jpg 等</p>
					</div>
					<div class="details">
						<Base64Upload v-for="(item,index) in params.details_img" :key="index" :objInfo="{index:index,obj:'details_img'}" @change="upload" :cover_img="params.details_img[index]">
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
			<button class="button" @click="entering_submit">提交审核</button>
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