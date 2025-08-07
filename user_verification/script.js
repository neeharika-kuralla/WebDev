document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual submission

  let isValid = true;

  // Name
  const name = document.getElementById('name').value.trim();
  if (!/^[A-Za-z ]{3,}$/.test(name)) {
    showError('nameError', 'Name must be at least 3 letters');
    isValid = false;
  } else {
    clearError('nameError');
  }

  // Email
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('emailError', 'Enter a valid email');
    isValid = false;
  } else {
    clearError('emailError');
  }

  // Phone
  const phone = document.getElementById('phone').value.trim();
  if (!/^[6-9]\d{9}$/.test(phone)) {
    showError('phoneError', 'Enter a valid 10-digit Indian number');
    isValid = false;
  } else {
    clearError('phoneError');
  }

  // Age
  const age = parseInt(document.getElementById('age').value);
  if (isNaN(age) || age < 18) {
    showError('ageError', 'You must be 18 or older');
    isValid = false;
  } else {
    clearError('ageError');
  }

  // Gender
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  if (!genderChecked) {
    showError('genderError', 'Please select your gender');
    isValid = false;
  } else {
    clearError('genderError');
  }

  // City
  const city = document.getElementById('city').value;
  if (!city) {
    showError('cityError', 'Select a city');
    isValid = false;
  } else {
    clearError('cityError');
  }

  if (isValid) {
    alert('Form submitted successfully!');
    this.reset(); // Clear form
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearError(id) {
  document.getElementById(id).textContent = '';
}
