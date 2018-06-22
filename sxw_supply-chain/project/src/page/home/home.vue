<style scoped lang="less">
    #home {
        width: 100%;
        height: 100%;
    }
    #home {
        padding: 60px 43px 160px 43px;
        box-sizing: border-box;
    }
    .home_nav1 {
        width: 100%;
        box-sizing: border-box;
        li {
            width: 532px;
            height: 360px;
            margin-right: 30px;
            margin-bottom: 30px;
            cursor: pointer;
            &:nth-child(1) {
                background: url('./imgs/Delivered.png') no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(2) {
                background: url('./imgs/Received_goods.png') no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(3) {
                background: url('./imgs/Settlement_amount.png') no-repeat;
                background-size: 100% 100%;
                margin-right: 0px;
            }
        }
    }
    .home_nav2 {
        width: 100%;
        box-sizing: border-box;
        li {
            width: 532px;
            height: 360px;
            margin-right: 30px;
            margin-bottom: 30px;
            cursor: pointer;
            &:nth-child(1) {
                background: url('./imgs/low_stocks.png') no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(2) {
                background: url('./imgs/Unsettled.png') no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(3) {
                background: url('./imgs/withdraw_deposit.png') no-repeat;
                background-size: 100% 100%;
                margin-right: 0px;
            }
        }
    }
</style>

 <template>
	<div id="home">
        <ul class="home_nav1 flex">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="home_nav2 flex">
            <li></li>
            <li></li>
            <li></li>
        </ul>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
                //发货
                delive: '2293',
                take_delivery: '82',
                Settled: '58323.82',
                Lack_of_stock: '85',
                Outstanding: '5409.21',
                withdraw_cash: '239812.82'
			}
		},
		components: {

		},
        mounted() {

        },
		methods: {
            click(){
               this.$router.push('/index/repertory')
            }
        },
        created() {
           setTimeout(() => {
               this.loading=false
            }, 500);
        }
	}
</script>