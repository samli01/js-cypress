// Create a new Date object
let now = new Date();
console.log("Current Date and Time:", now);

// Get individual components of the date
console.log("Year:", now.getFullYear()); // Output: 2024
console.log("Month (0-11):", now.getMonth()); // Output: 10 (November, months are 0-based)
console.log("Date (day of the month):", now.getDate()); // Output: 28
console.log("Day of the Week (0-6):", now.getDay()); // Output: 4 (Thursday)
console.log("Hours:", now.getHours()); // Output: current hour
console.log("Minutes:", now.getMinutes()); // Output: current minutes
console.log("Seconds:", now.getSeconds()); // Output: current seconds
console.log("Milliseconds:", now.getMilliseconds()); // Output: milliseconds

// Get timestamp (milliseconds since Jan 1, 1970)
console.log("Timestamp:", now.getTime());

// Formatting the date into a readable string
console.log("Locale String:", now.toLocaleString()); // Output: e.g., 11/28/2024, 10:15:45 AM
console.log("Locale Date:", now.toLocaleDateString()); // Output: e.g., 11/28/2024
console.log("Locale Time:", now.toLocaleTimeString()); // Output: e.g., 10:15:45 AM

// Set specific components of a date
let customDate = new Date();
customDate.setFullYear(2025);
customDate.setMonth(5); // June (months are 0-based)
customDate.setDate(15);
customDate.setHours(10);
customDate.setMinutes(30);
console.log("Custom Date and Time:", customDate);

// Calculate the difference between two dates
let startDate = new Date("2024-01-01");
let endDate = new Date("2024-12-31");
let timeDiff = endDate - startDate; // Difference in milliseconds
let daysDiff = timeDiff / (1000 * 60 * 60 * 24); // Convert to days
console.log("Difference in Days:", daysDiff); // Output: 365

// Formatting a custom date
let formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
console.log("Formatted Date (DD/MM/YYYY):", formattedDate);
