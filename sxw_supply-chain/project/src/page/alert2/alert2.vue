<template>
    <div id="alert2" v-show="isShow">
        <div class="alert_content">
            <div class="alert_title">添加商品库存</div>
            <div class="alert_body">
                <div>
                    <p>商品编号：234</p>
                    <p class="mn">商品名称：聚贤庄杨梅酒500ml</p>
                    <p>库存总量：176件</p>
                </div>
                <div>
                    <h4>单规格商品数量</h4>
                    <p><span>红色：</span><input type="text" value="118"></p>
                    <p><span>预警量：</span><input type="text" value="118"></p>
                    <p><span>绿色：</span><input type="text" value="118"></p>
                    <p><span>预警量：</span><input type="text" value="118"></p>
                    <p><span>白色：</span><input type="text" value="118"></p>
                    <p><span>预警量：</span><input type="text" value="118"></p>
                </div>                   
            </div>
            <div class="alert_footer">
                <button @click="isShow=!isShow">确认</button>
                <button @click="isShow=!isShow">取消</button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    #alert2 {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0px;
        top: 0px;
        z-index:20;
        display: flex;
    }
    #alert2 .alert_content {
        width: 478px;
        height: 478px;
        background: #fff;
        border-radius: 3px;
        margin: auto;
    }
    #alert2 .alert_title {
        height: 60px;
        line-height: 60px;       
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        background: #0099cc;
        text-indent: 42px;
        color: #fff;
    }
    #alert2 .alert_body {
        height: 338px;
        padding-left: 49px;
        padding-top: 14px;;
        border-bottom: 1px solid #a4a4a4;
    }
    #alert2 .alert_body div {
        overflow: hidden;
        line-height: 48px;
        font-size: 14px;   
    }
    #alert2 .alert_body div p {
        float: left;
        margin-right: 90px;
        color: #555;
    }
    #alert2 .alert_body div .mn {
        margin-right: 0px;
    }
    #alert2 .alert_body div:nth-child(2) {
        h4 {
            font-family: MicrosoftYaHei;
	        font-size: 14px;
	        font-weight: bold;
	        color: #555;
        }
        p {
            height: 34px;
            margin-right: 44px;
            float: left;
            margin-bottom: 15px;
            span {
                float: left;
                height: 34px;
                line-height: 34px;
            }
            input {
                display: block;
                width: 118px;
                padding-left: 10px;;
                height: 34px;
                float: left;
                border: 1px solid #e0e0e0;
            }
        }
    } 
    #alert2 .alert_footer button {
        float: left;
        width:100px;
        height: 36px;
        margin-top: 20px; 
        outline: none;      
        &:first-child {
            margin-left: 246px;
            margin-right: 12px;
            background-color: #0099cc;
            border: none;
            color: #fff;
        }
        &:last-child {
            background-color: #f7f7f7;
            color: #000;
            border: 1px solid #ddd;
        }
    }
</style>

<script>
    export default {
        name: 'alert2',
        data() {
            return {
                isShow:false
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>

