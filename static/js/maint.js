// maintenance

function checkMaintenance() {
  const maintenanceDate = new Date("April 03, 2023 9:01:00 MST");
  const currentDate = new Date();

  if (currentDate <= maintenanceDate) {
    location.href = "beback.html";
  }
}

checkMaintenance();
