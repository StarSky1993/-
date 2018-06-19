<template>
	<div class="lookstatus">
		<div class="header">
			<span @click="goback" class="fanhui">&lt; 返回</span>
			<h2 class="title">供应商信息管理 &gt; 聚贤庄杨梅酒500ml</h2>
		</div>
		<div class="status">商品审核通过</div>
		<h2 class="status_title">基础信息</h2>
		<div class="informstion">
			<div class="content">
				<div v-for="item in informstion">
					<p class="fl">商品名称：&nbsp;&nbsp;{{item.shop_name}}</p>
					<p class="fr">分公司：&nbsp;&nbsp;{{item.filiale}}</p>
				</div>
				<div v-for="item in die">
					<p class="fl">一级分类：&nbsp;&nbsp;{{item.shop_name}}</p>
					<p class="fr">认证：&nbsp;&nbsp;{{item.filiale}}</p>
				</div>
				<div>
					<p>商品描述：&nbsp;&nbsp;{{beschreibung}}</p>
				</div>
				<div>
					<font>商品封面：</font>
					<img :src="'./static/imgs/' + deckblatter " alt="" >
				</div>
				<div>
					<font>商品相册：</font>
					<img  v-for="item in 3" :src="'./static/imgs/' + deckblatter " alt="" >
				</div>
				<div>
					<font>商品详情：</font>
					<img  v-for="item in 9" :src="'./static/imgs/' + deckblatter " alt="" >
					
				</div>		
			</div>
		</div>
		<div class="sales">
				<h2 class="sale_title">销售信息</h2>
				<div class="norms">
					<div class="norms_l">
						<p><font>规格：&nbsp;&nbsp;</font>红色/1.2</p>
						<p><font>售价：&nbsp;&nbsp;</font>300元</p>
						<p><font>售价（积分）：&nbsp;</font>1000元</p>
						<p><font>库存：&nbsp;&nbsp;</font>999件</p>
					</div>
					<div class="norms_r">
						<font>规格图：</font>
						<img :src="'../static/imgs/' + deckblatter" alt="">
					</div>
				</div>			
			</div>	
	</div>
</template>

<style scoped lang="less">
	html,body,.lookstatus {
		width: 100%;
		height: 100%;
	}
	.lookstatus {
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
	}
	.header {
		overflow: hidden;
	}
	.header .fanhui {
		cursor: pointer;
	}
	.header span {
		font-size: 15px;
		color: #0099cc;
		position: absolute;
		top: 24px;left: 18px;
	}
	.title {
		width: 100%;
		height: 71px;
		float: left;
		padding-left: 52px;
		line-height: 71px;
		font-size: 14px;
		color: #333;
		background: url('./imgs/rectangle2.png') no-repeat;
		background-size: 2px 18px;
		background-position: 48px 25px;
		border-bottom: 1px solid #e1e6eb;
		text-indent: 5px;
	}
	.status {
		margin-top: 15px;
		height: 85px;
		line-height: 85px;
		background-color: #f5f6fa;
		border-left: 4px solid #4caf50;
		text-indent: 118px;
		font-family: MicrosoftYaHei;
		font-size: 16px;
		font-weight: bold;
		color: #4caf50;
	}
	.status_title {
		height: 75px;
		line-height: 75px;
		font-size: 18px;
	}
	.informstion {
		width: 100%;
		border: 1px solid #c8c8c8;
	}
	.content {
		width: 100%;
		padding-top: 10px;
		padding-left: 39px;
		color:#777;
	}
	.content div {
		width: 1020px;
		line-height: 31px;
		overflow: hidden;
		&:nth-child(4) {
			height: 127px;
			font {
				position: relative;
				bottom: 100px;
			}
		}
		&:nth-child(5) {
			margin-top: 40px;
			height: 127px;
			font {
				position: relative;
				bottom: 100px;
			}
		}
		&:nth-child(6) {
			width: 700px;
			margin-top: 40px;
			
			font {
				position: relative;
				bottom: 100px;
			}
			img {
				margin-bottom: 9px;;
				&:nth-child(5) {
					margin-left: 85px;
				}
				&:nth-child(8) {
					margin-left: 85px;
				}
			}
		}
	}
	.content div .fl {
		float: left;
	}
	.content div .fr {
		float: right;
	}
	.content div img {
		position: relative;
		top: 7px;
		display: inline-block;
		margin-right: 40px;
		width: 120px;
		height: 120px;
	}
	.sale {
		overflow: hidden;
	}
	.sale_title {
		height: 84px;
		font-size: 18px;
		line-height: 84px;
	}
	.norms {
		overflow: hidden;
		border: 1px solid #c8c8c8;
		padding-left: 40px;
		line-height: 31px;
		padding-top: 11px;
		margin-bottom: 20px;
	}
	.norms_l{
		width:850px;
		float: left;
	}
	.norms_r {
		width: 217px;
		float: left;
		font {
			display: block;
			float: left;
			width: 97px;
			color: #777;
		}
		img {
			width: 120px;
			height: 120px;;
		}
	}
	.norms p {
		width:850px;
		float: left;
	}
	.norms p font {
		display: block;
		float: left;
		width: 118px;
		color: #777777;
		&:nth-child(5) {

		}
	}
</style>

<script>
	export default {
		name: 'lookstatus',
		mounted(){

		},
		data() {
			return {
				//信息
				informstion: [{					
					shop_name: "杨百利",
					filiale: "仙居分公司"
				}],
				//一级分类
				die: [{
					shop_name: "酒水",
					filiale: "云南农科院"	
				}],
				//商品描述
				beschreibung: "杨梅酒是用杨梅发酵酿制而成",
				deckblatter: "cover.png"
			}
		},
		components: {
			
		},
		methods: {
			goback() {
				this.$router.go(-1);
			}

		},
		created() {

		}

	}
</script>