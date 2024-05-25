!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Welcome, <?php echo $admin['name']; ?>!</h1>
    <div class="stats">
        <div class="stat">
            <h2>Total Users</h2>
            <p><?php echo $totalUsers; ?></p>
        </div>
        <div class="stat">
            <h2>Total Orders</h2>
            <p><?php echo $totalOrders; ?></p>
        </div>
        <div class="stat">
            <h2>Total Revenue</h2>
            <p><?php echo $totalRevenue; ?></p>
        </div>
    </div>
    <a href="logout.php">Logout</a>
</body>
</html>