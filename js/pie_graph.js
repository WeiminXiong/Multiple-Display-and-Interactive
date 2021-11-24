// import "echarts"
{
    var pie_div_1 = document.getElementById("pie1");
    var pie_div_2 = document.getElementById("pie2");
    pie_div_1.style.width = "{0}px".format(_width / 4 - 10);
    pie_div_1.style.height = "{0}px".format(_height / 2);
    pie_div_1.style.left = "{0}px".format(_width / 2);
    pie_div_2.style.width = "{0}px".format(_width / 4);
    pie_div_2.style.height = "{0}px".format(_height / 2);
    pie_div_2.style.left = "{0}px".format(_width / 4 * 3);

    pie_graph_1 = echarts.init(pie_div_1);
    pie_graph_2 = echarts.init(pie_div_2);
    pie_graph_1.setOption({
        title: [{
            text: "明朝1371~1610年进士户籍饼图",
            padding: 5,
            itemGap: 10,
            textStyle: {
                fontSize: 15
            }
        }],
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
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        tooltip: {
            trigger: 'item',
            confine: true,
        },
        legend: {
            show:false,
        },
        series: [
            {
                type: 'pie',
                data: construct_pie_data(data, "户籍"),
                radius: '65%',
                selectedMode: 'single',
            }
        ]
    });
    pie_graph_2.setOption({
        title: [{
            text: "明朝1371~1610年进士科目饼图",
            padding: 5,
            itemGap: 10,
            textStyle: {
                fontSize: 15
            }
        }],
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
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        tooltip: {
            trigger: 'item',
            confine: true
        },
        legend: {
            show:false,
        },
        series:[
            {
                type: 'pie',
                data: construct_pie_data(data, "科目"),
                radius: '65%',
                selectedMode: 'single',
            }
        ]
    })
}