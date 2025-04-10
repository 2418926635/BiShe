<template>
    <div :id="obj.dom">
    </div>

</template>

<script>

import * as echarts from 'echarts';
export default {
    props: {
        obj: Object
    },
    created() {

    },
    mounted() {
        this.init()
    },
    data() {
        return {

        }
    },
    methods: {
        init() {
            this.$nextTick(() => {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById(this.obj.dom));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: this.obj.title,
                        // subtext:'',
                        x: 'center',
                        y: '7px',
                        textStyle: {
                            color: '#3A7BD5',
                            fontSize: 16
                        },
                        textAlign: 'left'
                    },
                    tooltip: { // 鼠标悬浮提示框显示 X和Y 轴数据
                        trigger: 'axis'
                    },
                    grid: {
                        bottom: '2%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            magicType: { type: ['line', 'bar'] },
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        data: this.obj.xAxis
                    },
                    yAxis: {},
                    series: [
                        {
                            name: this.obj.series,
                            type: this.obj.type,
                            data: this.obj.dataArr,
                            itemStyle: {
                                normal: {
                                    //这里是重点
                                    color: function (params) {
                                        //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                        var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622'];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }

                        }
                    ]
                });
            })

        }
    },
    watch: {
        obj: {
            handler(val) {
                this.init()
            },
            deep: true
        }
    }


};

</script>

<style scoped>
</style>
