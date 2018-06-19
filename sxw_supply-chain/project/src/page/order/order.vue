<style scoped lang="less">
    /* 搜索框 */
    .order-input {
        height: 66px;
        justify-content:space-between;
        .input-l {
            justify-content: flex-start;
            p {
                font-size: 14px;
                padding-top: 15px;
                label {
                    color: #999;
                    display: block;
                    width: 68px;
                    height: 34px;
                    line-height: 36px;
                }
                input, select {
                    width: 148px;
                    height: 34px;
                    border: 1px solid #ccc;
                    padding-left: 9px;
                }
            }
            p:nth-child(4) {
                position: relative;
                span {
                    display:block;
                    width:27px;
                    height:34px;
                    background:url('../../assets/icon/down2.png') no-repeat;
                    background-size: 27px 32px;
                    pointer-events:none;
                }
                .i1 {
                    position:absolute;
                    top:16px;left:188px;
                }
                .i2 {
                    position:absolute;
                    top:16px;right:79px;
                }
            }
        }
        .input-r {
            padding-top: 15px;
        }
    }
    .sbtn {
        margin-left: 14px;
        width:64px;
        height:34px;
        background:#0099cc;
        color:#fff;
        cursor:pointer
    }
    .hengxian {
        display: block;
        width: 33px;
        height: 36px;
        background: url('imgs/hengxian.png') no-repeat;
        background-size: 33px 36px;
    }

</style>

<template>
    <div class="order allContent">
        <!-- 商品审核管理标题 -->
        <h2 class="alltitle"><i></i>订单管理</h2>
        <!-- 一排搜索框 -->
        <div class="order-input flex">
            <div class="input-l flex">
                <p class="mr flex">
                    <label>订单编号&nbsp;:&nbsp;</label>
                    <input type="text" v-model="searchData" class="sp">
                </p>
                <p class="mr flex">
                    <label>订单状态&nbsp;:&nbsp;</label>
                    <select>
                        <option v-for="(item,index) in slect">{{item.option}}</option>
                    </select>
                    <i class="common_down"></i>
                </p>
                 <p class="mr flex">
                    <label>收件人&nbsp;:&nbsp;</label>
                    <input type="text" v-model="searchData" class="sp">
                </p>
                <p class="mr flex">
                    <label>下单时间&nbsp;:&nbsp;</label>
                        <select class="select-l">
                            <option value=""></option>
                        </select>
                        <span class="i1"></span>
                        <i class="hengxian"></i><select class="select-r">
                            <option value=""></option>
                        </select>
                        <span class="i2"></span>
                        <button class="sbtn">搜索</button>
                </p>
            </div>
            <p class="input-r flex">
                <button class="btn btn1" style="margin-right:0px;"></i>刷新</button>
            </p>
        </div>
        <!-- 商品审核表格 -->
       <table class="clearfix">
            <thead>
                <tr>
                    <th style="width:226px; text-indent:21px;">下单时间
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:265px;">订单编号
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:250px;">收件人
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:340px;">收货地址
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:191px;">订单金额
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:199px;">订单状态
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:78px;">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in Newitems" :key="index">
                    <td style="width:226px; text-indent:21px;">{{item.datetime}}</td>
                    <td style="width:265px;">{{item.regexp}}</td>
                    <td style="width:250px;">{{item.cname}}{{item.phone}}</td>
                    <td style="width:340px;text-overflow:ellipsis;">{{item.county}}</td>
                    <td style="width:191px;cursor:pointer;">{{item.number}}</td>
                    <td style="width:199px;">{{item.status}}</td>
                    <td style="width:78px;"><span style="margin-right:19px; color:#0099cc;">发货</span></td>
                </tr>
            </tbody>
       </table>
       <!-- 分页 -->
        <div class="table_footer clearfix">
            <div class="pagination_box">
                <p>共有20条数据，每页显示&nbsp;:&nbsp;20条</p>
                <div class="pagination clearfix">
                    <button class="home_page"></button>
                    <button class="pre_page"></button>
                    <span class="current_page">1</span>
                    <button class="next_page"></button>
                    <button class="last_page"></button>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'order',
        data() {
            return {
                searchData: '',
                slect:[{
                    id:1,
                    option: '全部'
                },{
                    id:2,
                    option: '待审核'
                },{
                    id:3,
                    option: '审核通过',
                },{
                    id:4,
                    option: '审核不通过'
                }],
                searchData2: '',
                //表格旧数据
                tdList: [{
                    datetime: '',
                    regexp: '',
                    cname: '',
                    phone: '',
                    county: '',
                    number: '',
                    status: ''

                }],
                black: false,
                black2:false
            }
        },
        //计算属性
        computed: {
            //商品搜索
            Newitems() {
                var _this = this;
                //定义一个空数组
                var Newitems = [];
                _this.tdList.map( item => {
                    if(item.regexp.search(_this.searchData) != -1) {
                        Newitems.push(item);
                    }
                });
                return Newitems;
            }
        },
        methods: {
            //点击升序按钮
            sort_ascending() {
                this.black = true;
                this.black2 = false;
                // var date =new Date();
                // let arr = this.Newitems.sort(function(a,b) {

                //     a.datetime=date.getTime(a.datetime)
                //     b.datetime=date.getTime(a.datetime)

                //     return  a.datetime - b.datetime

                // })
                // console.log(arr)
            },
            //点击降序按钮
            grade_down() {
                this.black = false;
                this.black2 = true;
            },
            addshop() {
                this.$router.push('/index/entering')
            }
        },
        filters:{
            //时间戳转换成时间
            filter_time(oldV){

                function add0(m){return m<10?'0'+m:m };
                var time = new Date(Number(oldV));
                var y = time.getFullYear();
                var m = time.getMonth()+1;
                var d = time.getDate();
                var hour=time.getHours(); 
                var minute=time.getMinutes(); 
                var second=time.getSeconds(); 
                return y+'-'+add0(m)+'-'+add0(d)+' '+add0(hour)+':'+add0(minute)+':'+add0(second);
           }

        },
        created() {
            this.$axios('https://www.easy-mock.com/mock/5b1b40b1496c9b36644e6494/demo/order')
            .then(res => {
                //旧表格数据
                this.tdList = res.data.data.array;
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
</script>