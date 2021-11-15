function update_label() {
    let inp_val = document.getElementById("myInput").value
    var chartlbl = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    document.getElementById("myLabel").innerHTML = chartlbl[inp_val];
    update_chart(inp_val)
}




const ctx = document.getElementById('myChart').getContext('2d');
var data_chart = [12, 19, 3, 5, 2, 3];
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: data_chart,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// chart definition
function update_chart(index) {
    // let data_chart = [12, 19, 3, 5, 2, 3];
    data_chart[index] = data_chart[index] * 2;
    console.log(data_chart[index]);
    myChart.data[index] = data_chart[index] * 2;
    myChart.update();
}
//// end chart definition


function update_lbl() {
    myChart.chartlbl[index] = data_label[index]
    myChart.update();

}