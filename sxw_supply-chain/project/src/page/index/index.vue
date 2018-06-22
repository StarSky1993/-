<template>
	<div class="index">
		<Header></Header>
		<Aside></Aside>
		<div class="section">
			<router-view></router-view>
		</div>
	</div>
</template>

<style scoped lang="less">
.section {
	padding-top: 70px;
	padding-left: 180px;
	background-color: #fff;
}

</style>

<script>
	//主页面头部
	import Header from '../../components/header/header'
	//主页侧边栏
	import Aside from '../../components/aside/aside'
	export default {
		name: 'index',
		data() {
			return {

			}
		},
		mounted(){

		},
		data() {
			return {

			}
		},
		components: {
			Header,
			Aside
		},
		methods: {

		}
	}
</script>