
//   chart js
  var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
		// Information about the dataset
    datasets: [{
			// label: "Rainfall",
			backgroundColor: '#FFF2E8',
			borderColor: '#FF7F18',
			data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 0,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Business Growth',
			fontSize: 16,
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: false,
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: false,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});


var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx2, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
		// Information about the dataset
    datasets: [{
			// label: "Rainfall",
			backgroundColor: '#FFF2E8',
			borderColor: '#FF7F18',
			data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 0,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Business Growth',
			fontSize: 16,
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: false,
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: false,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});
