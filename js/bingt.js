 // 基于准备好的dom，初始化echarts实例
var datat1 = echarts.init(document.getElementById('main1'));
// 指定图表的配置项和数据
option1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        textStyle: {
            color: '#56D9D9',
            fontSize: '10'
        },
    },
    color: ["#56d9d9", "#4cc0c1", "#1eb7cc", "#109fa8", "#1e7e8e", "#146972", "#057c7a", "#41586e", "#25313e"],
    series: [{
        name: '协议分布',
        type: 'pie',
        data: [{"value":340,"name":"21"},{"value":324,"name":"3306"},{"value":260,"name":"8080"},{"value":209,"name":"22"},{"value":100,"name":"3389"}]
    }]
};
// 使用刚指定的配置项和数据显示图表。
datat1.setOption(option1);



 // 基于准备好的dom，初始化echarts实例
var datat2 = echarts.init(document.getElementById('main2'));
// 指定图表的配置项和数据
option2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        textStyle: {
            color: '#56D9D9',
            fontSize: '10'
        },
    },
    color: ["#56d9d9", "#4cc0c1", "#1eb7cc", "#109fa8", "#1e7e8e", "#146972", "#057c7a", "#41586e", "#25313e"],
    series: [{
        name: '端口分布',
        type: 'pie',
        data: [{"value":340,"name":"21"},{"value":324,"name":"3306"},{"value":260,"name":"8080"},{"value":209,"name":"22"},{"value":100,"name":"3389"}]
    }]
};
// 使用刚指定的配置项和数据显示图表。
datat2.setOption(option2);



 // 基于准备好的dom，初始化echarts实例
var datat3 = echarts.init(document.getElementById('main3'));
// 指定图表的配置项和数据
option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        textStyle: {
            color: '#56D9D9',
            fontSize: '10'
        },
    },
    color: ["#56d9d9", "#4cc0c1", "#1eb7cc", "#109fa8", "#1e7e8e", "#146972", "#057c7a", "#41586e", "#25313e"],
    series: [{
        name: '操作系统分布',
        type: 'pie',
        data: [{"value":340,"name":"21"},{"value":324,"name":"3306"},{"value":260,"name":"8080"},{"value":209,"name":"22"},{"value":100,"name":"3389"}]
    }]
};
// 使用刚指定的配置项和数据显示图表。
datat3.setOption(option3);


 // 基于准备好的dom，初始化echarts实例
var datat4 = echarts.init(document.getElementById('main4'));
// 指定图表的配置项和数据
option4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        textStyle: {
            color: '#56D9D9',
            fontSize: '10'
        },
    },
    color: ["#56d9d9", "#4cc0c1", "#1eb7cc", "#109fa8", "#1e7e8e", "#146972", "#057c7a", "#41586e", "#25313e"],
    series: [{
        name: '类型分布',
        type: 'pie',
        data: [{"value":340,"name":"21"},{"value":324,"name":"3306"},{"value":260,"name":"8080"},{"value":209,"name":"22"},{"value":100,"name":"3389"}]
    }]
};
// 使用刚指定的配置项和数据显示图表。
datat4.setOption(option4);


