const marksCanvas = document.getElementById('marksChart');
// set initial active style
document.getElementById('skillGeneral').style.fontWeight = 'bold';
document.getElementById('skillProgramming').style.fontWeight = '400';
document.getElementById('skillData').style.fontWeight = '400';
document.getElementById('skillWeb').style.fontWeight = '400';
document.getElementById('skillOther').style.fontWeight = '400';

const skills = {
  skillGeneral: {
    label: 'GENERAL',
    labels: ['Teamwork', 'Communication', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowePoint'],
    data: [90, 80, 85, 50, 95]
  },
  skillProgramming: {
    label: 'PROGRAMMING',
    labels: ['C++', 'C', 'Java'],
    data: [40, 50, 50]
  },
  skillData: {
    label: 'Data Science',
    labels: ['Python', 'R', 'Rapid Miner', 'Tableau', 'SQL', 'MongoDB', 'Microsoft Access'],
    data: [80, 40, 50, 70, 30, 80, 60]
  },
  skillWeb: {
    label: 'Web Development',
    labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'Ajax', 'Wordpress', 'cPanel', 'Apache Server'],
    data: [90, 70, 60, 70, 70, 50, 50, 70, 60]
  },
  skillOther: {
    label: 'Other',
    labels: ['Server Adiministration', 'Network +', 'Linux Server', 'Photoshop', 'Illustrator', 'Corel Draw', 'Microcontrollers Programming', 'Photography'],
    data: [40, 70, 40, 50, 40, 40, 60, 50]
  }
};

const chartOptions = {
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

function buildData(id) {
  const { label, labels, data } = skills[id];
  return {
    labels,
    datasets: [{
      label,
      backgroundColor: 'rgba(20, 255, 226,.5)',
      borderColor: 'rgba(0, 0, 0,1)',
      borderWidth: 4,
      radius: 4,
      data
    }]
  };
}

let radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: buildData('skillGeneral'),
  options: chartOptions
});
radarChart.options.legend.display = false;

$('.skill-links li').click(function () {
  $('.skill-links li').css('fontWeight', '400');
  $(this).css('fontWeight', 'bold');
  radarChart.data = buildData(this.id);
  radarChart.update();
});

