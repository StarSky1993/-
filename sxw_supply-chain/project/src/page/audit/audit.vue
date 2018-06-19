<style scoped lang="less">
</style>

<template>
    <div id="audit" ref="audit" class="allContent">
        <!-- 商品审核管理标题 -->
        <h2 class="alltitle"><i></i>商品审核管理</h2>
        <!-- 一排搜索框 -->
        <div class="common-input flex">
            <div class="flex-l">
                <p class="flex mr">
                    <label>商品名称&nbsp;:&nbsp;</label>
                    <input type="text" v-model="searchData" class="sp">
                </p>
                <p class="flex mr">
                    <label>审核状态&nbsp;:&nbsp;</label>
                    <select>
                        <option v-for="(item,index) in slect">{{item.option}}</option>
                    </select>
                    <i class="common_down"></i>
                </p>
                <p class="flex mr">
                    <input type="text" v-model="searchData2" placeholder="请输入关键字进行搜索" onfocus="this.placeholder=''" onblur="this.placeholder='请输入关键字进行搜索'">
                    <button class="sh">搜索</button>
                </p>
            </div>
            <div class="flex-r pt">
                <p class="flex">
                    <button class="btn btn1 fl"></i>刷新</button>
                    <button class="btn btn2 fl" @click="addshop"><i class="common-i"></i>添加商品</button>
                </p>
            </div>
        </div>
        <!-- 商品审核表格 -->
       <table class="clearfix">
            <thead>
                <tr>
                    <th style="width:266px; text-indent:21px;">编号
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:367px;">商品名称
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:269px;">规格数
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:310px;">审核状态
                        <span class="sort_icon">
                            <span class="sort_ascending" @click="sort_ascending" :class="{black_up:black}"></span>
                            <span class="grade_down" @click="grade_down" :class="{black_down:black2}"></span>
                        </span>
                    </th>
                    <th style="width:408px;">审核时间
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
                    <td style="width:266px; text-indent:21px;">{{item.id}}</td>
                    <td style="width:367px;">{{item.shop_name}}</td>
                    <td style="width:269px;">{{item.number}}</td>
                    <td style="width:310px;" :class="{}">{{item.status}}</td>
                    <td style="width:408px;">{{item.datetime}}</td>
                    <td style="width:78px;">查看</td>
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
        name: 'audit',
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
                    id:'',
                    shop_name:'',
                    number:'',
                    status:'',
                    datetime:''
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
                    if(item.shop_name.search(_this.searchData) != -1) {
                        Newitems.push(item);
                    }
                });
                return Newitems;
            }
        },
        mounted() {

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
            this.$axios('https://www.easy-mock.com/mock/5b1b40b1496c9b36644e6494/demo/audit')
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