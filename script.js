// Get the chart canvas element
const ctx = document.getElementById("myChart");

// New diagnostic data
const diagnosticData = {
  month: "March",
  year: 2024,
  blood_pressure: {
    systolic: { value: 160, levels: "Higher than Average" },
    diastolic: { value: 55, levels: "Lower than Average" },
  },
  heart_rate: { value: 78, levels: "Normal" },
  respiratory_rate: { value: 20, levels: "Normal" },
  temperature: { value: 98.6, levels: "Normal" },
};

// Extract month and year
const newLabel = `${diagnosticData.month}, ${diagnosticData.year}`;

// Update labels array
const labels = [
  "Oct, 2023",
  "Nov, 2023",
  "Dec, 2023",
  "Jan, 2024",
  "Feb, 2024",
  "Mar, 2024",
  newLabel,
];

// Extract blood pressure values
const systolicBloodPressureValue = diagnosticData.blood_pressure.systolic.value;
const diastolicBloodPressureValue =
  diagnosticData.blood_pressure.diastolic.value;

// Update data arrays
const systolicBloodPressureData = [
  120,
  130,
  125,
  140,
  150,
  145,
  systolicBloodPressureValue,
];
const diastolicBloodPressureData = [
  70,
  75,
  72,
  80,
  85,
  82,
  diastolicBloodPressureValue,
];

// Create a new chart
new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      { data: systolicBloodPressureData, borderWidth: 1.5 },
      { data: diastolicBloodPressureData, borderWidth: 1.5 },
    ],
  },
  options: {
    scales: {
      y: { beginAtZero: true },
    },
    plugins: { legend: { display: false } }, // Hide the legend
  },
});

document.getElementById("systolic-level").innerHTML =
  diagnosticData.blood_pressure.systolic.levels;
document.getElementById("diastolic-level").innerHTML =
  diagnosticData.blood_pressure.diastolic.levels;

let systolicValue = diagnosticData.blood_pressure.systolic.value;

let imgSrc =
  systolicValue < 90
    ? "images/downarrow.png"
    : systolicValue > 130
    ? "images/uparrow.png"
    : "images/filled-circle.png";
document.getElementById("systolic-level-symbol").src = imgSrc;


let diastolicValue = diagnosticData.blood_pressure.diastolic.value;
let imgSrc1 =
  diastolicValue < 60
    ? "images/downarrow.png"
    : diastolicValue > 80
    ? "images/uparrow.png"
    : "images/filled-circle.png";
document.getElementById("diastolic-level-symbol").src = imgSrc1;

document.getElementById("SystolicValue").innerHTML=systolicValue

document.getElementById("diastolicValue").innerHTML=diastolicValue

document.getElementById("respiratoryRateValue").innerHTML=diagnosticData.respiratory_rate.value

document.getElementById("respiratoryLevel").innerHTML=
diagnosticData.respiratory_rate.levels

document.getElementById('temperatureValue').innerHTML=
diagnosticData.temperature.value

document.getElementById("temperatureLevel").innerHTML=diagnosticData.temperature.levels

let HeartRatevalue =diagnosticData.heart_rate.value
 
document.getElementById("HeartRatevalue").innerHTML=HeartRatevalue

document.getElementById("HeartRateLevel").innerHTML=diagnosticData.heart_rate.levels

let imgSrc2 =
HeartRatevalue< 60
    ? "images/downarrow.png"
    : HeartRatevalue > 100
    ? "images/uparrow.png"
    : "images/filled-circle.png";

document.getElementById("heartRate-Level-Symbol").src=imgSrc2
