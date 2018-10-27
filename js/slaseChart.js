google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);
var chartSalesBar;

var optionSales = {
    isStacked: true,
    colors: ['#FF8D07', '#FFE083'],
    legend: {
        position: 'top',
        alignment: 'end'
    },
    animation: {
        duration: 500,
        easing: 'in'
    }


};

function drawStacked() {
    var dataSales = new google.visualization.DataTable();
    dataSales.addColumn('string', 'Week');
    dataSales.addColumn('number', 'Sales');
    dataSales.addColumn('number', 'Abandoned Cart');
    dataSales.addRows([
        ['Jan', 11, 42],
        ['Feb', 10, 28],
        ['Mar', 8, 43],
        ['Apr', 11, 34],
        ['May', 8, 20],
        ['Jun', 10, 25],
        ['Jul', 17, 22],
        ['Aug', 11, 42],
        ['Sep', 10, 28],
        ['Oct', 8, 43],
        ['Nov', 11, 34],
        ['Dec', 8, 20]
    ]);

    chartSalesBar = new google.visualization.ColumnChart(document.getElementById('salesChart'));
    chartSalesBar.draw(dataSales, optionSales);
}
//On button click, load new data

/**
 * Created by ZIRUHEL on 4/26/2017.
 */
