	document.getElementById("skillGeneral").style.fontWeight = "bold";
	document.getElementById("skillProgramming").style.fontWeight = "400";
	document.getElementById("skillData").style.fontWeight = "400";
	document.getElementById("skillWeb").style.fontWeight = "400";
	document.getElementById("skillOther").style.fontWeight = "400";


	var marksCanvas = document.getElementById("marksChart");
	var marksData = {
		labels: ["Teamwork", "Communication", "Microsoft Word", "Microsoft Excel", "Microsoft PowePoint"],
		datasets: [{
			label: "GENERAL",
			backgroundColor: "rgba(20, 255, 226,.5)",
			borderColor: "rgba(0, 0, 0,1)",
			borderWidth: 4,
			radius: 4,
			data: [90, 80, 85, 50, 95]
				}]

	};

	var chartOptions = {
		scale: {
			ticks: {
				beginAtZero: true,
				min: 0,
				max: 100,
				display: false

			},
			pointLabels: {
				fontSize: 14
			},
			gridLines: {
				display: true
			}

		}
	};


	var radarChart = new Chart(marksCanvas, {
		type: 'radar',
		data: marksData,
		options: chartOptions
	});
	radarChart.options.legend.display = false; // This one does it!


	// ********************* General

	document.getElementById("skillGeneral").addEventListener("click", function () {
		this.style.fontWeight = "bold";
		document.getElementById("skillProgramming").style.fontWeight = "400";
		document.getElementById("skillData").style.fontWeight = "400";
		document.getElementById("skillWeb").style.fontWeight = "400";
		document.getElementById("skillOther").style.fontWeight = "400";

		var marksCanvas = document.getElementById("marksChart");
		var marksData = {
			labels: ["Teamwork", "Communication", "Microsoft Word", "Microsoft Excel", "Microsoft PowePoint"],
			datasets: [{
				label: "GENERAL",
				backgroundColor: "rgba(20, 255, 226,.5)",
				borderColor: "rgba(0, 0, 0,1)",
				borderWidth: 4,
				radius: 4,
				data: [90, 80, 85, 50, 95]
				}]

		};
		var chartOptions = {
			scale: {
				ticks: {
					beginAtZero: true,
					min: 0,
					max: 100,
					display: false

				},
				pointLabels: {
					fontSize: 14
				},
				gridLines: {
					display: true
				}

			}
		};


		var radarChart = new Chart(marksCanvas, {
			type: 'radar',
			data: marksData,
			options: chartOptions
		});
		radarChart.options.legend.display = false; // This one does it!

	});



	//*************************** Programming
	document.getElementById("skillProgramming").addEventListener("click", function () {
		this.style.fontWeight = "bold";
		document.getElementById("skillGeneral").style.fontWeight = "400";
		document.getElementById("skillData").style.fontWeight = "400";
		document.getElementById("skillWeb").style.fontWeight = "400";
		document.getElementById("skillOther").style.fontWeight = "400";

		var marksCanvas = document.getElementById("marksChart");
		var marksData = {
			labels: ["C++", "C", "Java"],
			datasets: [{
				label: "PROGRAMMING",
				backgroundColor: "rgba(20, 255, 226,.5)",
				borderColor: "rgba(0, 0, 0,1)",
				borderWidth: 4,
				radius: 4,
				data: [40, 50, 50]
				}]

		};
		var chartOptions = {
			scale: {
				ticks: {
					beginAtZero: true,
					min: 0,
					max: 100,
					display: false

				},
				pointLabels: {
					fontSize: 14
				},
				gridLines: {
					display: true
				}

			}
		};


		var radarChart = new Chart(marksCanvas, {
			type: 'radar',
			data: marksData,
			options: chartOptions
		});
		radarChart.options.legend.display = false; // This one does it!

	});

	//*************************** Data Science

	document.getElementById("skillData").addEventListener("click", function () {
		this.style.fontWeight = "bold";
		document.getElementById("skillGeneral").style.fontWeight = "400";
		document.getElementById("skillProgramming").style.fontWeight = "400";
		document.getElementById("skillWeb").style.fontWeight = "400";
		document.getElementById("skillOther").style.fontWeight = "400";

		var marksCanvas = document.getElementById("marksChart");
		var marksData = {
			labels: ["Python", "R", "Rapid Miner", "Tableau", "SQL", "MongoDB", "Microsoft Access"],
			datasets: [{
				label: "Data Science",
				backgroundColor: "rgba(20, 255, 226,.5)",
				borderColor: "rgba(0, 0, 0,1)",
				borderWidth: 4,
				radius: 4,
				data: [80, 40, 50, 70, 30, 80, 60]
				}]

		};
		var chartOptions = {
			scale: {
				ticks: {
					beginAtZero: true,
					min: 0,
					max: 100,
					display: false

				},
				pointLabels: {
					fontSize: 14
				},
				gridLines: {
					display: true
				}

			}
		};


		var radarChart = new Chart(marksCanvas, {
			type: 'radar',
			data: marksData,
			options: chartOptions
		});
		radarChart.options.legend.display = false; // This one does it!

	});

	//*************************** Web Development

	document.getElementById("skillWeb").addEventListener("click", function () {
		this.style.fontWeight = "bold";
		document.getElementById("skillGeneral").style.fontWeight = "400";
		document.getElementById("skillProgramming").style.fontWeight = "400";
		document.getElementById("skillData").style.fontWeight = "400";
		document.getElementById("skillOther").style.fontWeight = "400";

		var marksCanvas = document.getElementById("marksChart");
		var marksData = {
			labels: ["HTML", "CSS", "JavaScript","Bootstrap", "JQuery", "Ajax", "Wordpress", "cPanel", "Apache Server"],
			datasets: [{
				label: "Web Development",
				backgroundColor: "rgba(20, 255, 226,.5)",
				borderColor: "rgba(0, 0, 0,1)",
				borderWidth: 4,
				radius: 4,
				data: [90, 70, 60, 70, 70, 50, 50, 70, 60]
				}]

		};
		var chartOptions = {
			scale: {
				ticks: {
					beginAtZero: true,
					min: 0,
					max: 100,
					display: false

				},
				pointLabels: {
					fontSize: 14
				},
				gridLines: {
					display: true
				}

			}
		};


		var radarChart = new Chart(marksCanvas, {
			type: 'radar',
			data: marksData,
			options: chartOptions
		});
		radarChart.options.legend.display = false; // This one does it!

	});

	//*************************** Other

	document.getElementById("skillOther").addEventListener("click", function () {
		this.style.fontWeight = "bold";
		document.getElementById("skillGeneral").style.fontWeight = "400";
		document.getElementById("skillProgramming").style.fontWeight = "400";
		document.getElementById("skillData").style.fontWeight = "400";
		document.getElementById("skillWeb").style.fontWeight = "400";

		var marksCanvas = document.getElementById("marksChart");
		var marksData = {
			labels: ["Server Adiministration", "Network +", "Linux Server", "Photoshop", "Illustrator", "Corel Draw", "Microcontrollers Programming", "Photography"],
			datasets: [{
				label: "Other",
				backgroundColor: "rgba(20, 255, 226,.5)",
				borderColor: "rgba(0, 0, 0,1)",
				borderWidth: 4,
				radius: 4,
				data: [40, 70, 40, 50, 40, 40, 60, 50]
				}]

		};
		var chartOptions = {
			scale: {
				ticks: {
					beginAtZero: true,
					min: 0,
					max: 100,
					display: false

				},
				pointLabels: {
					fontSize: 14
				},
				gridLines: {
					display: true
				}

			}
		};


		var radarChart = new Chart(marksCanvas, {
			type: 'radar',
			data: marksData,
			options: chartOptions
		});
		radarChart.options.legend.display = false; // This one does it!

	});