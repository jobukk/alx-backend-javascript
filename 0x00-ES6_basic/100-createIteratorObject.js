export default function createIteratorObject(report) {
    // Define a generator function to yield each employee
    function* employeeIterator() {
      for (const department of Object.values(report.allEmployees)) {
        for (const employee of department) {
          yield employee;
        }
      }
    }
  
    // Return the generator object
    return employeeIterator();
  }
  