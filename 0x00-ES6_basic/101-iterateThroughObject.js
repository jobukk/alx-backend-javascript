/*Iterate through object */
export default function iterateThroughObject(reportWithIterator) {
    // Collect all employee names into an array
    const employeeNames = [];
    for (const employee of reportWithIterator) {
      employeeNames.push(employee);
    }
  
    // Join the names with ' | ' and return the result
    return employeeNames.join(' | ');
  }
  