/*No need to create empty objects before adding in properties*/
function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const currentYear = getCurrentYear();
  
    const budget = {
      [`income-${currentYear}`]: income,
      [`gdp-${currentYear}`]: gdp,
      [`capita-${currentYear}`]: capita,
    };
  
    return budget;
  }
  