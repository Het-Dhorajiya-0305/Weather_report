<?php 
include './db_conn.php';
session_start();

// echo $conn;

// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // echo "inside if statemenet";
    // Sanitize user inputs
    $email = sanitize_input($_POST["email"]);
    $password = sanitize_input($_POST["password"]);
    
    // Check if the user exists in the database
    // echo "before sql query";
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);
    // echo $result;    
    // echo "hasdfasdf";
    
    if ($result->num_rows == 1) {
        // User found, verify password
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            // Password is correct, redirect to dashboard or homepage
            // For example:
            $_SESSION['username'] = $row["username"]; 
            header("Location: mainpage.php");
            exit();
        } else {
            // Incorrect password
            echo "Incorrect password. Please try again.";
            echo "<br>";
            echo "<a href='index.html'>Go Back</a>";
        }
    } else {
        // User does not exist
        echo "User does not exist. Please sign up.";
        echo "Incorrect password. Please try again.";
        echo "<br>";
        echo "<a href='index.html'>Go Back</a>";
    }
}

