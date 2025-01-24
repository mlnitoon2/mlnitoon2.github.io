document.getElementById('signup-role').addEventListener('change', function () {
  const classCodeField = document.getElementById('signup-class');
  if (this.value === 'student') {
    classCodeField.classList.remove('hidden');
  } else {
    classCodeField.classList.add('hidden');
  }
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const repeatPassword = document.getElementById('repeat-password').value;
  const role = document.getElementById('signup-role').value;
  const age = document.getElementById('signup-age').value;

  if (password !== repeatPassword) {
    showAlert('Sign-up failed. Passwords do not match.', 7000);
    return;
  }

  if (password == username) {
    showAlert('Sign-up failed. Username and password should not match.', 7000);
    return;
  }

  if (age == 0) {
    showAlert('Obviously, you are not 0 years old.', 7000);
    return;
  }

  success = signup(username, email, password, age, role)

  if (success) {
    localStorage.setItem('currentUser', JSON.stringify({ username, role, email, age}));
  
    // Redirect based on role
    if (role === 'teacher') {
      window.location.href = 'teacher-dashboard.html';
    } else {
      window.location.href = 'student-dashboard.html';
    } 
  } else {
    showAlert('Sign-up failed. Check your credantials and try again.', 7000);
  }
});
