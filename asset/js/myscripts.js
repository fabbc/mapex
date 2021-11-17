function update_label() {
    let inp_val = document.getElementById("myInput").value
    var chartlbl = ["Africa", "Asia", "Europe", "Latin America", "North America"];
    document.getElementById("myLabel").innerHTML = chartlbl[inp_val];
    update_chart(inp_val)
}




const ctx = document.getElementById('myChart').getContext('2d');
var data_chart = [12, 19, 3, 5, 2];
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
            label: '# of Population (millions) ',
            data: data_chart,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
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

///pie chart

var myChart2 = new Chart(document.getElementById("piechart"), {
    type: 'pie',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
            label: "Population (millions)",
            data: data_chart,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
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
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});

// chart definition
function update_chart(index) {
    // let data_chart = [12, 19, 3, 5, 2, 3];
    data_chart[index] = data_chart[index] * 2;
    console.log(data_chart[index]);
    myChart.data[index] = data_chart[index] * 2;
    myChart2.data[index] = data_chart[index] * 2;
    myChart.update();
    myChart2.update();
}
//// end chart definition


////hidden element chart with toggle button///

function toggle() {
    let o1 = document.getElementById("option1")
    let o2 = document.getElementById("option2")
        // let o3 = document.getElementById("option3")

    let cn1 = document.getElementById("bar")
    let cn2 = document.getElementById("pie")

    let ch1 = o1.checked
    let ch2 = o2.checked
        // let ch3 = o3.checked

    if (ch1) {
        console.log("BAR")
        cn1.classList.value = "col d-flex justify-content-center mt-4"
        cn2.classList.value = "col d-none justify-content-center mt-4"
    }
    if (ch2) {
        console.log("PIE")
        cn1.classList.value = "col d-none justify-content-center mt-4"
        cn2.classList.value = "col d-flex justify-content-center mt-4"

    }
    // if (ch3) {
    //     console.log("BOTH")
    //     cn1.classList.value = "col-6 justify-content-center mt-4"
    //     cn2.classList.value = "col-6 justify-content-center mt-4"
    // }
}