window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: "BY M.bekzodbek"
        },
        subtitles: [{
            text: "Ozbekistan Kingdom, 2023",
            fontSize: 16
        }],
        data: [{
            type: "pie",
            indexLabelFontSize: 18,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0\"%\"",
            click: explodePie,
            dataPoints: [
                { y: 42, label: "HTML" },
                { y: 21, label: "Nuclear"},
                { y: 24.5, label: "CSS" },
                { y: 9, label: "VYU" },
                { y: 3.1, label: "React" }
            ]
        }]
    });
    chart.render();
    
    function explodePie(e) {
        for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
            if(i !== e.dataPointIndex)
                e.dataSeries.dataPoints[i].exploded = false;
        }
    }
     
    }