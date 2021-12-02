// import "echarts";

{
    var kemu_div = document.getElementById("kemu")
    kemu_div.style.height = "{0}px".format(_height / 2-10);
    kemu_div.style.width = "{0}px".format(_width / 2 - 10);
    kemu_div.style.top = "{0}px".format(_height / 2 + 20);
    var kemu_graph = echarts.init(kemu_div)
    var option = {
        animation: true,
        animationThreshold: 2000,
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDelay: 0,
        animationDurationUpdate: 300,
        animationEasingUpdate: "cubicOut",
        animationDelayUpdate: 0,
        color: [
            "#c23531",
            "#2f4554",
            "#61a0a8",
            "#d48265",
            "#749f83",
            "#ca8622",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3",
            "#f05b72",
            "#ef5b9c",
            "#f47920",
            "#905a3d",
            "#fab27b",
            "#2a5caa",
            "#444693",
            "#726930",
            "#b2d235",
            "#6d8346",
            "#ac6767",
            "#1d953f",
            "#6950a1",
            "#918597"
        ],
        legend: [{
            show: true,
            padding: 15,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14
        }],
        title: [{
            text: "明朝1371~1610年进士科目",
            padding: 5,
            itemGap: 10,
            textStyle: {
                fontSize: 15
            }
        }],
        tooltip: {
            show: true,
            trigger: "axis",
            triggerOn: "mousemove|click",
            axisPointer: {
                type: "cross"
            },
            showContent: true,
            alwaysShowContent: false,
            showDelay: 1,
            hideDelay: 100,
            textStyle: {
                fontSize: 14
            },
            borderWidth: 0,
            padding: 5,
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: [{
            name: "年份",
            type: "category",
            show: true,
            scale: false,
            nameLocation: "end",
            nameGap: 15,
            gridIndex: 0,
            inverse: false,
            offset: 0,
            splitNumber: 5,
            boundaryGap: false,
            minInterval: 0,
            splitLine: {
                show: false,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                }
            },
        }],
        yAxis: [{
            name: "进士数量",
            type: "value",
            show: true,
            scale: false,
            nameLocation: "end",
            nameGap: 15,
            gridIndex: 0,
            axisTick: {
                show: true,
                alignWithLabel: false,
                inside: false
            },
            inverse: false,
            offset: 0,
            splitNumber: 5,
            minInterval: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                }
            }
        }],
        dataZoom: [{
            start: 0,
            end: 100,
            show: true
        }, ],
        dataset: [{
            source: kemu
        }],
        series: [{
                type: 'line',
                name: "诗经",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "年份",
                    y: "诗经"
                }
            },
            {
                type: 'line',
                name: "书经",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "年份",
                    y: "书经"
                }
            },
            {
                type: 'line',
                name: "易经",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "年份",
                    y: "易经"
                }
            },
            {
                type: 'line',
                name: "礼记",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "年份",
                    y: "礼记"
                }
            },
            {
                type: 'line',
                name: "春秋",
                datasetIndex: 0,
                lineStyle: {
                    show: true,
                    width: 1,
                    opacity: 1,
                    curveness: 0,
                    type: "solid"
                },
                encode: {
                    x: "年份",
                    y: "春秋"
                }
            },
        ]
    }
    kemu_graph.setOption(option)

    kemu_graph.on('dataZoom', function (params) {
        myChart.dispatchAction({
            type: 'dataZoom',
            start: params.start,
            end: params.end
        })
    })
    let x = 0
    kemu_graph.getZr().on('mousemove', function (params) {
        const pointInPixel = [params.offsetX, params.offsetY];
        if (kemu_graph.containPixel('grid', pointInPixel)) {
            let pointInGrid = kemu_graph.convertFromPixel({
                seriesIndex: 0
            }, pointInPixel)
            let xIndex = pointInGrid[0];
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: xIndex
            })
            kemu_graph.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: xIndex
            })
        } else {
            if (!kemu_graph.containPixel('grid', pointInPixel)) {
                myChart.dispatchAction({
                    type: 'hideTip'
                });
                myChart.dispatchAction({
                    type: 'updateAxisPointer',
                    currTrigger: 'leave'
                })
            }
        }
    })

    kemu_graph.on('legendselectchanged', function (params) {
        let name = params.name;
        if (!(filter_condition['科目'].includes(name))) {
            filter_condition['科目'].push(name);
        } else {
            filter_condition['科目'].forEach(function (item, index, arr) {
                if (item == name)
                    arr.splice(index, 1);
            })
        }
        let dataZoom = kemu_graph.getModel().option.dataZoom[0];
        let dataset = kemu_graph.getModel().option.dataset[0]['source'];
        let starttime =  dataZoom.startValue+1;
        let endtime = dataZoom.endValue+1;
        filter_condition["年份"] = [parseInt(dataset[starttime][0]), parseInt(dataset[endtime][0])];
        
        let left_data = filter_data(data, filter_condition);
        let filter_1 = filter_condition;
        filter_1['年份'] = [1371, 1610];
        let left_data_1 = filter_data(data, filter_1);
        pie_graph_2.setOption({
            series: [{
                data: construct_pie_data(left_data, "科目"),
            }]
        })
        pie_graph_1.setOption({
            series: [{
                data: construct_pie_data(left_data, "户籍"),
            }]
        })
        squarified_chart.setOption({
            series: [{
                type: "treemap",
                data: construct_si_data(left_data),
            }]
        })
        myChart.setOption({
            dataset: {
                source: construct_dataset(left_data_1, "户籍"),
            }
        })
        kemu_graph.setOption({
            dataset: {
                source: construct_dataset(left_data_1, "科目"),
            }
        })
    })

    kemu_graph.on("dataZoom", function (params) {
        let dataZoom = kemu_graph.getModel().option.dataZoom[0];
        let dataset = kemu_graph.getModel().option.dataset[0]['source'];
        let starttime =  dataZoom.startValue+1;
        let endtime = dataZoom.endValue+1;
        filter_condition["年份"] = [parseInt(dataset[starttime][0]), parseInt(dataset[endtime][0])];
        let left_data = filter_data(data, filter_condition);
        squarified_chart.setOption({
            series: [{
                type: "treemap",
                data: construct_si_data(left_data),
            }]
        })
        pie_graph_1.setOption({
            series: [{
                data: construct_pie_data(left_data, "户籍"),
            }]
        })
        pie_graph_2.setOption({
            series: [{
                data: construct_pie_data(left_data, "科目")
            }]
        })
    })
}