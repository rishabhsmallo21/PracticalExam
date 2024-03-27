const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job and Career Information</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 0 20px;
        }

        h1, h2, h3 {
            color: #333;
        }

        .job-list {
            display: flex;
            flex-wrap: wrap;
        }

        .job {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Job and Career Information</h1>
        <p>This is a platform where you can find valuable information about various job opportunities and career paths.</p>
        <h2>Featured Jobs</h2>
        <div class="job-list">
            <div class="job">
                <h3>Software Engineer</h3>
                <p>Company: XYZ Tech</p>
                <p>Location: City, Country</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div class="job">
                <h3>Marketing Manager</h3>
                <p>Company: ABC Marketing</p>
                <p>Location: City, Country</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <!-- Add more job listings as needed -->
        </div>
    </div>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(htmlContent);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
