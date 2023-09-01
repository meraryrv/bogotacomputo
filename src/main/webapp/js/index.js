
     document.addEventListener('DOMContentLoaded', function() {
	 //  <!-- ocultar el filtro -->
	 var loginButton = document.getElementById('login-button');
	 var loginContainer = document.getElementById('login-container');

	 loginButton.addEventListener('click', function() {
		 if (loginContainer.style.display === 'none') {
			 loginContainer.style.display = 'block';
		 } else {
			 loginContainer.style.display = 'none';
		 }
	 });
 });