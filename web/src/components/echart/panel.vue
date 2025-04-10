<template>
    <div :id="obj.dom" style="height:250px;">
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
                    backgroundColor:'#ffffff',
                    title : {
                        text: this.obj.title,
                        left: 'center'
                    },
                    tooltip : {
                        formatter: "{a} <br/>{b} = {c}%"
                    },
                    series: [{
                        name: this.obj.name,
                        type: "gauge",
                        startAngle: 180,
                        endAngle: 0,
                        min: 0,
                        max: 100,
                        radius: "80%",
                        center: ["50%", "65%"],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 10,
                                shadowBlur: 0,
                                color: [[0.3, '#91c7a1'],[0.7, '#63869e'],[1,'#dd4f59']]
                            }
                        },
                
                    itemStyle: {
                            normal: {
                                shadowBlur: 10
                            }
                        },
                        detail: {formatter:'{value}%'},
                        data: [{value: this.obj.data, name: ''}]
                    }]
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
