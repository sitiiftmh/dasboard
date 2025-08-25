// Bar Chart PMA/PMDN
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["PMDN", "PMA"],
    datasets: [{
      label: "Jumlah",
      data: [21822, 260],
      backgroundColor: ["#4CAF50", "#FF5722"]
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Bar Chart NIB per Kecamatan
new Chart(document.getElementById("barChart2"), {
  type: "bar",
  data: {
    labels: ["Batam Kota", "Sekupang", "Sagulung", "Bengkong", "Nongsa", "Sei Beduk", "Batu Aji", "Lubuk Baja", "Batu Ampar", "Belakang Padang", "Bulan", "Galang"],
    datasets: [{
      label: "NIB Terbit",
      data: [4245, 3555, 3119, 2247, 1978, 1780, 1562, 937, 327, 284, 262, 262],
      backgroundColor: "#3e95cd"
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Pie Chart
new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Batam Kota", "Sekupang", "Sagulung", "Bengkong", "Nongsa", "Sei Beduk", "Batu Aji", "Lubuk Baja", "Batu Ampar", "Belakang Padang", "Bulan", "Galang"],
    datasets: [{
      data: [19.2, 16.1, 14.1, 10.2, 9.2, 8.1, 8.1, 4.2, 1.5, 1.3, 1.2, 1.2],
      backgroundColor: [
        "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9",
        "#c45850", "#ffcd56", "#4bc0c0", "#9966ff",
        "#ff6384", "#66bb6a", "#ffa726", "#d32f2f"
      ]
    }]
  },
  options: {
    responsive: true
  }
});

// Line Chart Perkembangan NIB
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: Array.from({length: 52}, (_, i) => `Minggu ${i+1}`),
    datasets: [{
      label: "NIB Mingguan",
      data: Array.from({length: 52}, () => Math.floor(Math.random() * 800 + 200)),
      borderColor: "#4CAF50",
      fill: false,
      tension: 0.1
    }]
  },
  options: {
    responsive: true
  }
});
