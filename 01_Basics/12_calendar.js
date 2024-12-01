// Create and render the calendar
function generateCalendar() {
    // Get current date details
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
  
    // Get the first and last day of the month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    // Month and day names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    // Create the container
    const calendar = document.createElement("div");
    calendar.style.fontFamily = "Arial, sans-serif";
    calendar.style.textAlign = "center";
    calendar.style.margin = "20px";
    calendar.style.padding = "10px";
    calendar.style.border = "1px solid #ccc";
    calendar.style.borderRadius = "10px";
    calendar.style.display = "inline-block";
  
    // Header with the current month and year
    const header = document.createElement("div");
    header.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    header.style.fontSize = "20px";
    header.style.fontWeight = "bold";
    header.style.marginBottom = "10px";
    calendar.appendChild(header);
  
    // Create the grid for days
    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(7, 1fr)";
    grid.style.gap = "5px";
  
    // Add day headers (Sun, Mon, ...)
    dayNames.forEach(day => {
      const dayHeader = document.createElement("div");
      dayHeader.textContent = day;
      dayHeader.style.fontWeight = "bold";
      dayHeader.style.backgroundColor = "#f0f0f0";
      dayHeader.style.border = "1px solid #ddd";
      dayHeader.style.padding = "5px";
      dayHeader.style.borderRadius = "5px";
      dayHeader.style.textAlign = "center";
      grid.appendChild(dayHeader);
    });
  
    // Add blank spaces for alignment
    for (let i = 0; i < firstDay; i++) {
      const blank = document.createElement("div");
      grid.appendChild(blank);
    }
  
    // Add the days of the month
    for (let date = 1; date <= lastDate; date++) {
      const day = document.createElement("div");
      day.textContent = date;
      day.style.border = "1px solid #ddd";
      day.style.borderRadius = "5px";
      day.style.textAlign = "center";
      day.style.padding = "10px";
  
      // Highlight today's date
      if (date === today.getDate()) {
        day.style.backgroundColor = "#ffeb3b";
        day.style.fontWeight = "bold";
      }
  
      grid.appendChild(day);
    }
  
    calendar.appendChild(grid);
  
    // Add the calendar to the body
    document.body.appendChild(calendar);
  }
  
  // Generate the calendar when the page loads
  generateCalendar();
  