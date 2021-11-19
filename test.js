{
    var myChart = echarts.init(document.getElementById("main"));
    var otherChart = echarts.init(document.getElementById("other"));
    // 载入数据
    a = $.ajax({
        url: "data.json",
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
        }
    });
    full_data = $.parseJSON(a["responseText"]);
    b = $.ajax({
        url: "time_huji.json",
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
        }
    });
    time_data = $.parseJSON(b["responseText"])
    console.log(time_data);
    var option = {
            tooltip:
            {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        toolbox: {
            feature: {
                dataZoom: {
                      yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
              }  
        },
        xAxis: {
            type: 'category',
            triggerEvent: true,
            // boundaryGap: false
        },
        yAxis: {
            // type: 'value',
            gridIndex: 0,
            min: 0,
            max: 300
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                start: 0,
                end: 20
            }
        ],
            dataset: [
            {
                dimensions: ["ID", "年份", "姓名", "籍贯", "户籍", "科目", "年龄"],
                source: full_data
            },
            {
                dimensions: ["年份", "民籍", "军籍", "监籍", "官籍", "匠籍", "灶籍", "站籍"],       
                source: time_data
            }
            ],
            series: [
                {
                    type: 'line',
                    // smooth: true,
                    // symbolSize: 10,
                    // areaStyle: {},
                    datasetIndex: 1,
                    encode: {
                        x: "年份",
                        y: "民籍"
                    }
                },
                {
                    type: 'line',
                    // symbol: 'none',
                    datasetIndex: 1,
                    encode: {
                        x: "年份",
                        y: "军籍"
                    }
                },
                {
                    type: 'line',
                    // symbol: 'none',
                    datasetIndex: 1,
                    encode: {
                        x: "年份",
                        y: "官籍"
                    }
                },
                {
                    type: 'line',
                    // symbol: 'none',
                    datasetIndex: 1,
                    encode: {
                        x: "年份",
                        y: "匠籍"
                    }
                },
                {
                    type: 'line',
                    // symbol: 'none',
                    datasetIndex: 1,
                    encode: {
                        x: "年份",
                        y: "灶籍"
                    }
                },
                {
                    type: 'line',
                    // symbol: 'none',
                    datasetIndex: 1,
                    encode: {
                        x: "年份",
                        y: "监籍"
                    }
                },
                {
                    type: 'line',
                    // symbol: 'none',
                    datasetIndex: 1,
                    encode: {
                        x: "年份",
                        y: "站籍"
                    }
                },
                // {
                //     type: 'pie',
                //     id: 'pie',
                //     radius: '30%',
                //     datasetIndex: 1,
                //     center: ['50%', '25%'],
                //     label: {
                //         formatter: '{b}:{@[1]} ({d}%)'
                //     },
                //     encode: {
                //         itemName: '年份',
                //         value: '民籍',
                //         tooltip: '民籍'
                //     }
                // }
            ]
    }
    myChart.setOption(option)
    otherChart.setOption({
        dataset: [
            {
                // dimensions: ["年份", "民籍", "军籍", "监籍", "官籍", "匠籍", "灶籍", "站籍"],       
                source: time_data
            }
        ],
        series: [
            {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    datasetIndex: 0,
                    center: ['50%', '25%'],
                    seriesLayoutBy: 'row',
                    label: {
                        // formatter: '{b}:{@[9]} ({d}%)'
                        // formatter: '{@[0]}'
                    },
                    encode: {
                        itemName: 0,
                        value: "1586-01-01",
                        tooltip: "1586-01-01"
                    }
                }
        ]
    })
    myChart.on('mouseover', function (params) {
        if (params.componentType == "series" && params.seriesType == 'line')
        {
            var xAxisInfo = params.value[0];
            otherChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{@[0]}'
                    },
                    encode: {
                        value: xAxisInfo,
                        tooltip: xAxisInfo
                    }
                }
            })
            }
        console.log(params)
    });
}