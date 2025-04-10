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
                        x: 'center',
                        y: '7px',
                        textStyle: {
                            color: '#3A7BD5',
                            fontSize: 12
                        },
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'horizontal',
                        x: 'center',
                        bottom:0
                    },
                    grid: {
                        right: 5
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '50%',
                            data: this.obj.data,
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
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
