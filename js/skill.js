const marksCanvas = document.getElementById('marksChart');
// set initial active style
document.getElementById('skillGeneral').style.fontWeight = 'bold';
document.getElementById('skillProgramming').style.fontWeight = '400';
document.getElementById('skillData').style.fontWeight = '400';
document.getElementById('skillWeb').style.fontWeight = '400';
document.getElementById('skillOther').style.fontWeight = '400';
// , 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowePoint'

const skills = {
  skillGeneral: {
    label: 'SOFT SKILLS',
    labels: ['Teamwork', 'Communication', 'Mentoring', 'Problem-Solving', 'Adaptability', 'Customer-Centric Mindset', 'Presentation & Storytelling'],
    data: [95, 90, 80, 80, 100, 90, 90]
  },
  skillProgramming: {
    label: 'DATA SCIENCE & ANALYTICS',
    labels: [
      ['Programming', '(Python, R)'],
      ['AI',          '(ML, DL)'],
      ['NLP', 'spaCy, NLTK'],
      'Statistical Analysis',
      'Data Engineering',
      ['Database', '(DynamoDB, MongoDB, SQLite, PostgreSQL)'],
      ['Vector Database', '(ChromaDB, Pinecone)'],
      ['Visualization', '(Plotly, matplotlib, seaborn, Tableau)'],
      ['MLOps & Deployment', '(Docker, AWS SageMaker)'],
      ['Tools & Environments', '(Jupyter Notebooks, VS Code)']
    ],
    data: [85,80,70,50,70,80,80,90,65,80]
  },
  skillData: {
    label: 'AWS CLOUD SERVICES',
    labels: [
      ['Compute & Serverless',     '(AWS Cloud9, Lambda, API Gateway)'],
      ['Storage & Messaging',      '(S3, SNS, EventBridge)'],
      ['Security & Monitoring',    '(Cognito, CloudWatch)'],
      ['Computer Vision & Document AI', '(Amazon Rekognition, Textract)']
    ],
    // proficiency ratings out of 100
    data: [85, 90, 70, 60]
  },
  skillWeb: {
    label: 'Web Development',
    labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'cPanel', 'Apache Server', 'RESTful API'],
    data: [100, 70, 60, 85, 70, 65, 70]
  },
  skillOther: {
  label: 'OTHER TECHNICAL SKILLS',
  labels: [
    ['Programming',       '(C++, C#, Java)'],
    ['Systems & DevOps',  '(Linux server administration, Network+)'],
    ['Design',            '(Photoshop, Illustrator, Corel Draw)'],
    ['Embedded & IoT',    '(AVR & Arduino microcontroller programming)'],
    ['Hobbies',           '(Photography, Personal App Development, Gaming)']
  ],
  // proficiency ratings out of 100
  data: [40, 60, 60, 70, 70]
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

