<style scoped>
	.router-link-active {
		width: 180px;
		height: 59px;
		color: #fff;
		display: block;
		background-color: #0099cc;
		padding-left: 50px;
		box-sizing: border-box;
	}
	.aside {
		float: left;
		width: 180px;
		position: fixed;
		top: 0px;
		bottom: 0px;
		z-index: 999;
		background-color: #293038;
	}
	.aside .list {
		width: 180px;
	}
	.list div {
		float: left;
		font-size: 16px;
		color: #fff;
		font-family: "Microsoft YaHei";
		line-height: 59px;
		position: relative;
		background-color: #22282e;
		width: 180px;
		height: 59px;
		color: #fff;
		display: block;
	}
	.list .logo {
		color: #fff;
		font-size: 30px;
		text-align: center;
		line-height: 70px;
		height: 70px;
		border-bottom: 1px solid #595e62;
	}
	.list div a {
		display: block;
		width: 180px;
		height: 59px;
		line-height: 59px;
		padding-left: 50px;
		color: #fff;
		box-sizing: border-box;
	}
	.home,.audit,.repertory,.order,.accounts,.refund {
		border-bottom: 1px solid #595e62;
		position: relative;
	}
	.list div i {
		position: absolute;
		top: 20px;
		left: 16px;
		display: block;
		width: 19px;
		height: 21px;
	}
	.audit {
		padding: 0px;
	}
	.home_icon {
		background: url('./imgs/home.png') no-repeat;
	}
	.audit_icon {
		background: url('./imgs/audit.png') no-repeat;
	}
	.repertory_icon {
		background: url('./imgs/repertory.png') no-repeat;
	}
	.order_icon {
		background: url('./imgs/order.png') no-repeat;
	}
	.accounts_icon {
		background: url('./imgs/accounts.png') no-repeat;
	}
	.refund_icon {
		background: url('./imgs/return.png') no-repeat;
	}
</style>

<template>
<div class="aside">
	<div class="list">
		<div class="logo"></div>
		<div class="home">
			<i class="home_icon"></i>
			<router-link exact to="/index/home">主界面</router-link>
		</div>
		<div class="audit">
			<i class="audit_icon"></i>
			<router-link exact to="/index/audit">商品审核管理</router-link>
		</div>
		<div class="repertory">
			<i class="repertory_icon"></i>
			<router-link exact to="/index/repertory">商品库存管理</router-link>
		</div>
		<div class="order">
			<i class="order_icon"></i>
			<router-link exact to="/index/order">订单 管理</router-link>
		</div>
		<div class="accounts">
			<i class="accounts_icon"></i>
			<router-link exact to="/index/accounts">结算管理</router-link>
		</div>
		<div class="refund">
			<i class="refund_icon"></i>
			<router-link exact to="/index/refund">退货管理</router-link>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		name:'Aside',
		data() {
			return {

			}
		}
	}
</script>