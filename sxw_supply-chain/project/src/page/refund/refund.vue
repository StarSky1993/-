<style scoped lang="less">
    .common-input {
        p:nth-child(3) {
            width: 274px;
            margin-right: 29px;
        }
        p:nth-child(4) {
            width: 251px;
            margin-right: 29px;
            label {
                width: 46px;
            }
            input {
                width: 205px;
            }
        }
        p:nth-child(5) {
            position: relative;
            button {
                width: 64px;
                height: 36px;
                background-color: #0099cc;
                color: #fff;
            }
            span {
                display: block;
                width: 27px;
                height: 32px;
                position: absolute;
                background: url('../../assets/icon/down2.png') no-repeat;
                background-size: 27px 32px;
            }
            .i1 {
                left: 186px;top: 1px;
            }
            .i2 {
                right: 92px;top: 1px;
            }
        }
        .flex-r {
            button {
                 margin-right: 0px;
            }
        }
    }
    .mr {
        margin-right: 30px;
    }
</style>

<template>
    <div class="order allContent">
        <!-- 商品审核管理标题 -->
        <h2 class="alltitle"><i></i>退货管理</h2>
        <!-- 一排搜索框 -->
                <div class="common-input flex">
            <div class="flex-l">
                <p class="flex mr">
                    <label>订单编号&nbsp;:&nbsp;</label>
                    <input type="text" v-model="searchData" class="sp">
                </p>
                <p class="flex mr">
                    <label>签收状态&nbsp;:&nbsp;</label>
                    <select>
                        <option v-for="(item,index) in slect">{{item.option}}</option>
                    </select>
                    <i class="common_down"></i>
                </p>
                <p class="flex mr">
                    <label>物流公司&nbsp;:&nbsp;</label>
                    <select style="width:200px;">
                        <option v-for="(item,index) in slect">{{item.option}}</option>
                    </select>
                    <i class="common_down"></i>
                </p>
                <p class="flex mr" style="width:252px;">
                    <label>单号&nbsp;:&nbsp;</label>
                    <input type="text" v-model="searchData" class="sp">
                </p>
                <p class="mr flex" style="width:480px;">
                    <label>申请时间&nbsp;:&nbsp;</label>
                        <select class="select-l" style="margin-right:33px;">
                            <option value=""></option>
                        </select>
                        <span class="i1 common_down"></span>
                        <select class="mr">
                            <option value=""></option>
                        </select>
                        <span class="i2 common_down"></span>
                        <button class="sbtn">搜索</button>
                </p>
            </div>
            <div class="flex-r pt">
                <p class="flex">
                    <button class="btn btn1 fl"></i>刷新</button>
                </p>
            </div>
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
                    <td style="width:340px;">{{item.county}}</td>
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