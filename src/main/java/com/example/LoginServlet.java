package com.example;


import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        // Verificar las credenciales 
        if (verificarCredenciales(username, password)) {
            // Configurar atributos para mostrar en la página de bienvenida
            request.setAttribute("username", username);
            
            // Redirigir a la página de bienvenida
            request.getRequestDispatcher("index.jsp").forward(request, response);
        } else {
            response.sendRedirect("errorlogin.html"); // Redirigir a una página de error
        }
    }
    
    private boolean verificarCredenciales(String username, String password) {
     
        return true; // Ejemplo: siempre devuelve true para este caso
    }
}





