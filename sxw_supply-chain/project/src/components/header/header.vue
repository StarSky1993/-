<template>
	<div id="header">
		<div class="header_box">
			<h1 class="logo">
				<a href="">LOGO</a>
			</h1>
			<div class="carte">
				<div class="inform" @mouseleave="leave" @mouseenter="remind">
					<i class="remind" :class="{'animated':animated,'swing':swing}"></i>
				</div>
				<div class="dispose" style="cursor:not-allowed;"></div>
				<div class="header_map">欢迎，浙江仙居聚贤庄杨梅小明</div>
				<!-- <div class="quit" @click="quit"></div> -->
				<button class="quit" @click="bus"></button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.header_box {
		z-index: 1000;
		position: fixed;
		width: 100%;
		height: 70px;

		background-color: #09c;
		overflow: hidden;
	}
	.logo a {
		display: block;
		width: 180px;
		height: 70px;
		text-align: center;
		line-height: 70px;
		font-size: 18px;
		color: #fff;
		background-color: #0087b4;
		float: left;
	}
	.carte {
		width: 458px;
		height: 70px;
		float: right;
	}
	.inform, .dispose {
		width: 79px;
		height: 70px;
		border-left: 1px solid #0087b4;
		border-right: 1px solid #0087b4;
		float: left;
	}
	.inform {
		cursor: pointer;
		position: relative;
	}
	.inform .remind {
		position: absolute;
		top:35%;
		left: 35%;

		display: block;
		width: 21px;
		height: 23px;
		background: url('./imgs/remind.png') no-repeat;
	}
	.dispose {
		border-left: none;
		background: url('./imgs/Tinme.png') no-repeat;
		background-position: 50%;
		cursor: pointer;
	}
	.header_map {
		width: 210px;
		height: 70px;
		margin-left: 20px;
		font-family: "Microsoft YaHei";
		font-size: 16px;
		color: #fff;
		text-align: center;
		line-height: 70px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		float: left;
		cursor: pointer;
	}
	.quit {
		width: 61px;
		height: 70px;
		background: url('./imgs/quit.png') no-repeat;
		background-position: 50%;
		float: left;
		cursor: pointer;

	}
</style>

<script>
import Bus from '../../assets/js/bus'
	export default {
		name: 'Header',
		mounted(){

		},
		data() {
			return {
				animated: false,
				swing:false,
			}
		},
		components: {

		},
		methods: {
			//点击退出登录
			bus() {
				Bus.$emit('hidden',true)
			},
			remind() {
				this.animated = true;
				this.swing = true;
			},
			leave(){
				this.animated = false;
				this.swing = false;
			}
		}
	}
</script>