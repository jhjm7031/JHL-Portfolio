const metrics = document.querySelectorAll('.metric');
setInterval(() => {
    metrics.forEach(metric => {
        metric.innerText = (Math.random() * 100).toFixed(2) + '%';
    });
}, 3000);