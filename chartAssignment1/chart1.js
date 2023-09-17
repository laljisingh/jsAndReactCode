
const data = {
    labels: ['January', 'February', 'March', 'April', 'May','June'],
    datasets: [{
        label: 'Monthly Sales',
        backgroundColor: 'rgba(77, 219, 224, 0.562)',
        borderColor: 'rgba(226, 116, 230, 0.562)',
        borderWidth: 2,
        borderRadius: 2,
        data: [65, 59, 80, 81, 56,75],
    }],
};


const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    },
};


const ctx = document.getElementById('acquisitions').getContext('2d');
const myChart = new Chart(ctx, config);


myChart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Sales: ${context.parsed.y}`;
        },
    },
};


const chartAnimation = anime({
    targets: myChart.data.datasets[0].data,
    easing: 'linear',
    delay: anime.stagger(200),
    duration: 1000,
    loop: true,
    direction: 'alternate',
    update: function (anim) {
        myChart.update();
    },
});