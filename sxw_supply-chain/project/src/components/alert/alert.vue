<style scoped lang="less">
	#alert {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0px;bottom: 0px;
		z-index: 1001;
		background: rgba(0,0,0,0.7);
		.box {
			width: 372px;
			height: 232px;
			background-color: #fff;
			position: absolute;
			left:0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            border-radius: 5px;
            h2 {
            	height: 60px;
            	background-color: #0099cc;
            	border-top-left-radius:5px;
				border-top-right-radius:5px;
            	color: #fff;
            	font-size: 18px;
            	line-height: 60px;
            	padding-left: 20px;
            }
            p {
            	height: 82px;
            	line-height: 102px;
            	font-size: 20px;
				text-align: center;
            }
            .click {
				height: 36px;
				overflow: hidden;
				button {
					width: 120px;
					height: 36px;
					float: left;
					font-size: 16px;
					cursor: pointer;
				}
				.confirm {
					background-color: #0099cc;
					color: #fff;
					margin-left: 60px;
				}
				.cancel {
					margin-left: 12px;
					background-color: #f7f7f7;
					color: #000;
					border: 1px solid #ddd;
				}
            }
		}
	}
</style>

<template>
	<div id="alert" v-show="hidden">
		<div class="box">
			<h2>确认</h2>
			<p>确认退出登录？</p>
			<div class="click">
				<button class="confirm" @click="confirm">确定</button>
				<button class="cancel" @click="cancel">取消</button>
			</div>
		</div>
	</div>
</template>

<script>
import Bus from '../../assets/js/bus'
	export default {
		name: 'alert',
		data() {
			return {
				hidden: false
			}
		},
		mounted() {
			//显示v-show
			Bus.$on('hidden',() => {
				this.hidden = true;
			})
		},
		methods: {
			confirm() {
				this.$router.replace('/login');
				this.hidden = false;
			},
			cancel() {
				this.hidden = false;
			}
		}
	}
</script>