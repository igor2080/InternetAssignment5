window.createChart = (canvasId, chartData) => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.labels, 
            datasets: chartData.datasets
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: 'X-Axis' } },
                y: { title: { display: true, text: 'Y-Axis' } }
            }
        }
    });
};
