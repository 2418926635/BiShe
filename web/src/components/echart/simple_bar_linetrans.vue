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
                        text: '',
                        // subtext:'',
                        x: 'center',
                        y: '7px',
                        textStyle: {
                            color: '#3A7BD5',
                            fontSize: 16
                        },
                        textAlign: 'left'
                    },
                    tooltip: {
                        trigger: 'axis',
                        show: false,
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    // legend: {
                    //     selectedMode: false,
                    // },
                    grid: {
                        left: '3%',
                        right: '10%',
                        bottom: '1%',
                        containLabel: true
                    },
                    xAxis: [{
                        splitLine: {
                            show: false
                        },
                        type: 'value',
                        show: false,
                    }],
                    yAxis: [{
                        splitLine: {
                            show: false
                        },
                        axisLine: { //y轴
                            show: false
                        },
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        data: ['昭通', '曲靖', '文山', '怒江', '普洱', '昆明'],
                        axisLabel: {

                        }
                    }],
                    series: [{
                        name: '标准化',
                        type: 'bar',
                        barWidth: 10, // 柱子宽度
                        label: {
                            show: true,
                            position: 'right', // 位置
                            color: '#1CD8A8',
                            fontSize: 14,
                            fontWeight: 'bold', // 加粗
                            distance: 5 // 距离
                        }, // 柱子上方的数值
                        itemStyle: {
                            barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                '#2FAEF2', '#1CD8A8'
                            ].map((color, offset) => ({
                                color,
                                offset
                            }))), // 渐变
                        },
                        data: [32, 30, 34, 37, 39, 65]
                    },]
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
