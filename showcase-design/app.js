// Saved notebook output, not live telemetry or a trained-model inference call.
const recordedLoss = [1.359117, 0.946653, 0.754701, 0.628203, 0.518056, 0.422036, 0.330308, 0.259398, 0.195841, 0.162208];
const chart = document.getElementById('loss-chart');
if (chart) {
  const svg = 'http://www.w3.org/2000/svg';
  const points = recordedLoss.map((value, index) => `${18 + index * 65},${220 - value * 144}`).join(' ');
  const line = document.createElementNS(svg, 'polyline');
  line.setAttribute('points', points);
  line.setAttribute('fill', 'none');
  line.setAttribute('stroke', '#ff987b');
  line.setAttribute('stroke-width', '4');
  line.setAttribute('stroke-linejoin', 'round');
  chart.append(line);
  recordedLoss.forEach((value, index) => {
    const circle = document.createElementNS(svg, 'circle');
    circle.setAttribute('cx', String(18 + index * 65));
    circle.setAttribute('cy', String(220 - value * 144));
    circle.setAttribute('r', '5');
    circle.setAttribute('fill', '#ff987b');
    chart.append(circle);
  });
}
