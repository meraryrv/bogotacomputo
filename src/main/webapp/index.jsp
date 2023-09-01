<!DOCTYPE html>
<html>
<head>
    <title>Perfil</title>
</head>
<body>
    <h2>Registro exitoso:</h2>
    <p>Correo: <%= request.getAttribute("username") %></p>
    <p>Contraseña: <%= request.getAttribute("password") %></p>
</body>
</html>