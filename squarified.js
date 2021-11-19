{
    // myChart.on('mouseover', function (params) {
    //     if (params.componentType == "series" && params.seriesType == 'line')
    //     {
    //         var xAxisInfo = params.value[0];
    //         otherChart.setOption({
    //             series: {
    //                 id: 'pie',
    //                 label: {
    //                     formatter: '{@[0]}'
    //                 },
    //                 encode: {
    //                     value: xAxisInfo,
    //                     tooltip: xAxisInfo
    //                 }
    //             }
    //         })
    //         }
    //     console.log(params)
    // });
    let squarified_chart = echarts.init(document.getElementById("squarified"))
    let a = $.ajax({
        url: "./squarified_data.json",
        type: "GET",
        dataType: "json",
        success: function(data){},
        async: false
    })
    let data = $.parseJSON(a["responseText"])
    let option = {
        series: [
            {
                type: "treemap",
                data: data
            }
        ]
    }
    squarified_chart.setOption(option)
}