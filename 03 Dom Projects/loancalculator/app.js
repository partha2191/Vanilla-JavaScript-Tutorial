document.getElementById('loan-form').addEventListener('submit', e => {
  
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  if(amount.value == '' || interest.value == '' || years.value == '') {
    showError('Please check your numbers');
  } else {
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateLoans, 2000);
  }
  e.preventDefault();
});

function calculateLoans() {
  // console.log('asd');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterestMonthly = parseFloat(interest.value) / 100 / 12;
  const totalMonths = parseFloat(years.value) * 12;

  // Compute Monthly Payment
  const x = Math.pow(1 + calculatedInterestMonthly, totalMonths);
  const monthly = (principal * x * calculatedInterestMonthly)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * totalMonths).toFixed(2);
    totalInterest.value = ((monthly * totalMonths) - principal).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  }
  
}

function showError(error) {
  // Create a div
  const divElement = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add a class
  divElement.className = 'alert alert-danger';

  // Create text nodes
  divElement.appendChild(document.createTextNode(error));

  // Insert error ebove heading
  card.insertBefore(divElement, heading)

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}