// 初始化echarts实例
let chart1 = echarts.init(document.getElementById("chart1"));

// 圆环图color
let color = ['#5a83ea', '#b56dd7', '#ed81af', '#523af5', '#75f9bc', '#f8cb67'];

// 圆环图数据，按照百分比排列
let data = [{
    name: 'For early shareholders and to be released in 10 months, 1 billion tokens in total',
    value: 2
}, {
    name: 'For user incentives, 20 billion tokens in total',
    value: 40
}, {
    name: 'For team motivation and to be released in 2022. 7.5 billion tokens in total',
    value: 15
}, {
    name: 'For the operation of StakePool Foundation and to be released in 2022. 7.5 billion tokens in total',
    value: 15
}, {
    name: 'For partnerships, 5 billion tokens in tota',
    value: 10
}, {
    name: 'For market campaign, 9 billion tokens in total',
    value: 18
}
];

// 指定图表的配置项和数据
let option = {
    backgroundColor: '#fff',
    textStyle: {
        color: '#000'
    },
    title: [{
        text: 'Issuance & Allocation of SKP\t',
        top: '5%',
        left: '39%',
        textStyle: {
            color: '#000',
            fontSize: 18,
        }
    }],
    tooltip: {
        show: true,
        formatter: '{b}</br> Proportion{d}%'
    },
    graphic: {
        type: 'text',
        top: 'center',
        left: 'center',
        style: {
            text: 'Total Issuance \n \n 1 Billion',
            fill: '#000',
            fontSize: 16,
            fontWeight: 'bold'
        }
    },
    series: [{
        name: 'Issuance & Allocation of SKP',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['40%', '60%'],
        hoverAnimation: true,
        color: color,
        label: {
            normal: {
                show: true,
                position: 'outside',
                formatter: '{b} : {c}%'
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 15,
                length2: 10,
                lineStyle: {
                    color: '#000',
                    width: 1
                }
            }
        },
        data: data
    }]
};
window.onresize = chart1.resize;
chart1.setOption(option);
