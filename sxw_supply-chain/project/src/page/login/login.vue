<template>
	<div id="login">
		<!-- 登录模板 -->
		<div class="login_box">
			<h2 class="login_title">上下网供应链发货平台</h2>
			<div class="form">
				<p class="user_name">
					<input type="text" placeholder="用户名" v-model="user" />
					<span class="user_icon"></span>
				</p>
				<p class="user_password">
					<input type="password" placeholder="密码" v-model="login_password" />
					<span class="password_icon"></span>
				</p>
				<p class="code">
					<input type="text" placeholder="验证码" v-model="code" />
					<img :src="getVerification" height="46px;" @click="refresh">
					<!-- 二维码图标 -->
					<span class="code_icon" @click="refresh"></span>
				</p>
				<!-- 单选框 -->
				<div class="rember" @click="click">
					<input type="radio" class="radio"/>
					<i class="block" v-show="downIcon"></i>
					<i class="hidden" v-show="!downIcon"></i>
					<span >记住密码</span>
				</div>
				<!-- 提交 -->
				<div class="submit" >
					<el-button  class="loading1" style="width:270px; height:48px;" type="primary"  @click="login">登录</el-button>
				</div>
			</div>
			<span class="showtip" v-show="showtip">{{tip}}</span>
		</div>
	</div>
</template>

<style scoped>
	html,body,#login {
		height: 100%;
		overflow: hidden;
	}
	body {
		margin: 0;
	}
	#login {
		width:100%;
		position: fixed;
		display: flex;
		background: url('./imgs/login_bg.png') no-repeat;
		background-size: 100% 100%;
	}
	.login_box {
		width: 400px;
		height: 400px;
		background-color: #fff;
		margin: auto;
		
		border-radius: 9px 9px 9px 9px;

	}
	.login_title {
		width: 270px;
		height: 24px;
		font-size: 23px;
		color: #333;
		font-weight: bold;
		line-height: 24px;
		text-align: center;
		margin-left: 65px;
		margin-top: 46px;
	}
	.form {
		width: 281px;
		height: 295px;
		margin-top: 33px;
		margin-left: 65px;
		position: relative;
	}
	.form p {
		width: 268px;
		height: 48px;
		border: 1px solid #e6e6e6;
		margin-bottom: 10px;
		padding-left: 12px;
	}
	.form p input {
		width: 216px;
		height: 46px;
		float: left;
	}
	.form p input::-webkit-input-placeholder{
		font-size: 14px;
		color: #b3b3b3;
		font-weight: bold;
	}
	.user_icon, .password_icon {
		width: 16px;
		height: 18px;
	}
	.user_icon {
		background: url('./imgs/user.png') no-repeat;
		position: absolute;
		top: 15px;
		right: 24px;
	}
	.password_icon {
		background: url('./imgs/password.png') no-repeat;
		position: absolute;
		top: 72px;
		right: 24px;
	}
	.code_icon {
		display: block;
		width: 20px;
		height: 18px;
		background: url('./imgs/refresh.png') no-repeat;
		position: absolute;
		top: 132px;
		right: 23px;
	}
	.code img {
		position: absolute;
		left: 132px;
		bottom: 132px;
	}
	.rember {
		width: 270px;
		height: 41px;
		line-height: 28px;
		position: relative;
	}
	.rember input {
		position: relative;
		top: 2px;
		background-color: #999;
		color: #999;
	}
	.rember span {
		position: absolute;
		top: 1px;
		left: 18px;
	}
	.radio {
		opacity: 0;
	}
	.block {
		width: 12px;
		height: 12px;
		display: block;
		background: url('./imgs/squareness.png') no-repeat;
		position: absolute;
		top: 10px;
		left: 0px;
	}
	.hidden {
		width: 12px;
		height: 12px;
		display: block;
		background: url('./imgs/Tick.png') no-repeat;
		position: absolute;
		top: 10px;
		left: 0px;
	}
	.rember span {
		font-size: 12px;
		color: #999999;
	}
	.submit {
		float: left;
	}
	.submit input {
		width: 270px;
		height: 48px;
		background-color: #3693b3;
		font-size: 18px;
		font-weight: bold;
		float: left;
		color: #fff;
	}
	.showtip {
		display: block;
		width: 230px;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #db3a42;
		text-indent: 32px;
		position: absolute;
		top: 72px;
		left: 85px;
		background: url('./imgs/wrong.png') no-repeat;
		background-position: 10px 6px;
	}
</style>

<script>
	export default {
		name: 'login',
		mounted(){
		},
		data() {
			return {
				downIcon: true,
				user: '',
				login_password: '',
				code:'',
				getVerification: '',
				showtip: false,
				tip: '',
				loading: true
			}
		},
		components: {

		},
		methods: {
			//点击切换勾选记住密码
			click() {
				this.downIcon = !this.downIcon
			},//点击刷新验证码
			refresh() {
				const _self=this;
				this.$axios.post(this.$api + 'user/getVerification')
				.then(res=>{
					_self.getVerification = res.data;
				})
				.catch(error=>{
					console.log('获取验证码错误')
				})
			},
			login() {
    			//点击记住密码，进行本地存储
				if(!this.downIcon){
					localStorage.user = this.user;
					localStorage.password = this.login_password;
				}
				//账号或密码不能为空
				var flag=true;
				if(!this.user) {
					this.tip = "用户名不能为空!";
					this.showtip = true;
					flag=false;
				}
				if(!this.login_password){
					this.tip = "密码不能为空!";
					this.showtip = true;
					flag=false;
				}
				if(!this.code){
					this.tip = "验证码不能为空";
					this.showtip = true;
					flag=false;
				}else if(this.code.length!==4){
					this.tip = "请输入四位数验证码";
					this.showtip = true;
					flag=false;
				}

				var url = this.$api + "/user/login";
				//发送axios登录请求
				if(flag){
					const loading = this.$loading({
	  					lock: true,
	  					text: 'loading',
	  					spinner: 'el-icon-loading',
	  					background: '#66b1ff',
	  					target: document.querySelector('.loading1')
					});
					this.$axios.post(url, {
						userName: this.user,
						password: this.login_password,
						code: this.code
					})
					.then(res => {
						//登录加载的loading组件函数
						loading.close();
						if(res.data.status==='1001'){
							localStorage.isLogin = true;
							this.$router.push('/index/home');
						}else{
							this.tip = res.data.tips;
							this.showtip = true;
						}
					})
				}
			}
		},
		created() {
			const _self=this;
			this.$axios.post(this.$api+'user/getVerification')
			.then(res=>{
				_self.getVerification=res.data;
			})
			.catch(error=>{
				console.log('获取验证码错误')
			})

			//如果是，那就勾选，账号密码显示在input框中
			if(localStorage.user && localStorage.password){
				this.downIcon = !this.downIcon;
				this.user=localStorage.user;
				this.login_password=localStorage.password;
			}
		}
	}
</script>