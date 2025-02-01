// Fast Fashion Production Growth

const ctx1 = document.getElementById('productionChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2000', '2005', '2010', '2015', '2020', '2024'],
        datasets: [{
            label: 'Billion Garments Produced',
            data: [50, 80, 120, 200, 300, 450],
            borderColor: '#3498db',
            borderWidth: 3,
            fill: false,
            tension: 0.3
        }]
    },
    options: {
        responsive: true
    }
});

// Carbon Emissions Chart
const ctx2 = document.getElementById('emissionsChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Fashion', 'Aviation', 'Tech', 'Agriculture'],
        datasets: [{
            label: 'CO2 Emissions (Million Tons)',
            data: [1200, 900, 700, 1500],
            backgroundColor: ['#e74c3c', '#95a5a6', '#3498db', '#2ecc71']
        }]
    },
    options: {
        responsive: true
    }
});

// Textile Waste Chart
const ctx3 = document.getElementById('wasteChart').getContext('2d');
new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Landfilled', 'Recycled', 'Incinerated'],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ['#ff6666', '#66ff66', '#ffcc66']
        }]
    },
    options: {
        responsive: true
    }
});
