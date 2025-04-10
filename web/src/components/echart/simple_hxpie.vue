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
                        bottom: 0
                    },
                    series: [
                        {
                            name: '评分',
                            type: 'pie',
                            radius: ['40%', '60%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                borderRadius: 10,
                                borderColor: '#fff',
                                borderWidth: 2
                            },
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '15',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: this.obj.data
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
