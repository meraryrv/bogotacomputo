package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseManager {
    public static void main (String[] args) {
	    String jdbcUrl = "jdbc:mysql://localhost:3306/bogotacomputos";
	    String dbUser = "root";
	    String dbPassword = "";
	    try {
	        Class.forName("com.mysql.cj.jdbc.Driver");
	    } catch (ClassNotFoundException e) {
	        e.printStackTrace();
	        return;
	    }

        try {
            Connection connection = DriverManager.getConnection(jdbcUrl, dbUser,dbPassword);
            System.out.println("Conexión exitosa a la base de datos");
            connection.close();
        } catch (SQLException e) {
            System.out.println("Error al conectar a la base de datos: " + e.getMessage());
        }
    
    }
    public static Connection getConnection() throws SQLException {
	    String jdbcUrl = "jdbc:mysql://localhost:3306/bogotacomputos";
	    String dbUser = "root";
	    String dbPassword = "";
		Connection connection = DriverManager.getConnection(jdbcUrl, dbUser,dbPassword);
        return connection;
    }
    
    
    public static void closeConnection(Connection connection) {
        try {
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            System.out.println("Error al cerrar la conexión: " + e.getMessage());
        }
    }


}



