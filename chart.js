<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'SQL', 'TensorFlow', 'JavaScript'],
        datasets: [{
            label: 'Skill Level',
            data: [85, 90, 75, 80],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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