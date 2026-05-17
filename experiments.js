// Web Development Laboratory Experiments Data - Updated from actual practicals
const experiments = [
    {
        id: 0,
        title: "HTML Personal Details Page",
        week: "Week 1",
        problem: "Create a simple HTML page displaying personal details using text formatting tags.",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Personal Details</title>
</head>
<body>

<h1><u>My Personal Details</u></h1>

<p><b>Name:</b> Smit Gajbhiye</p>

<p><strong>College:</strong> Ajeenkya DY Patil School of Engineering</p>

<p><i>Branch:</i> Computer Engineering</p>

<p><em>Email:</em> smit@gmail.com</p>

<p><u>Skills:</u> HTML, CSS, Java</p>

<p><mark>Important:</mark> This is my first webpage</p>

<p>H<sub>2</sub>O and x<sup>2</sup></p>

<br>
</body>
</html>`,
        language: "HTML",
        output: `Name: Smit Gajbhiye
College: Ajeenkya DY Patil School of Engineering
Branch: Computer Engineering
Email: smit@gmail.com
Skills: HTML, CSS, Java
Important: This is my first webpage
H₂O and x²`,
        vivaQuestions: [
            {
                question: "What is the difference between <b> and <strong> tags?",
                answer: "<b> is for bold text without semantic importance, while <strong> indicates bold text with semantic importance."
            },
            {
                question: "What is <sub> and <sup> used for?",
                answer: "<sub> displays subscript text (lower), <sup> displays superscript text (upper). Used for chemical formulas and mathematical expressions."
            },
            {
                question: "What does <mark> tag do?",
                answer: "<mark> highlights text with a yellow background by default, used for marking important text."
            }
        ]
    },

    {
        id: 1,
        title: "Image, Link & Nested Table",
        week: "Week 1",
        problem: "Design a web page that includes an image, hyperlink, and a nested table.",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Webpage with Image, Link and Nested Table</title>
</head>
<body>

<h1>My Webpage</h1>

<!-- Image -->
<img src="image.png" alt="Sample Image" width="200" height="150">

<br><br>

<!-- Hyperlink -->
<a href="https://www.google.com" target="_blank">Visit Google</a>

<br><br>

<!-- Table -->
<table border="1">
    <tr>
        <th>Name</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Smit</td>
        <td>
            <!-- Nested Table -->
            <table border="1">
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>
                <tr>
                    <td>Math</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>CS</td>
                    <td>95</td>
                </tr>
            </table>
        </td>
    </tr>
</table>

</body>
</html>`,
        language: "HTML",
        output: `Webpage displays:
- Image of 200x150 pixels with alt text
- Google hyperlink
- Table with nested marks table`,
        vivaQuestions: [
            {
                question: "What is the use of target='_blank' in anchor tag?",
                answer: "It opens the link in a new tab/window instead of the current page."
            },
            {
                question: "What are nested tables?",
                answer: "Tables within tables. A table cell can contain another complete table inside it."
            },
            {
                question: "Why should we use alt attribute in img tag?",
                answer: "For accessibility - it displays text when image fails to load or is read by screen readers."
            }
        ]
    },

    {
        id: 2,
        title: "HTML Form",
        week: "Week 2",
        problem: "Create a form with fields: Name, Email, Gender, Date of Birth, Submit Button",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Form</title>
</head>
<body>
    
<h1>User Registration Form</h1>

<form>

    <label>Name:</label>
    <input type="text" name="name" required>
    <br><br>

    <label>Email:</label>
    <input type="email" name="email" required>
    <br><br>

    <label>Gender:</label>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <br><br>

    <label>Date of Birth:</label>
    <input type="date" name="dob">
    <br><br>

    <input type="submit" value="Submit">
    

</form>

</body>
</html>`,
        language: "HTML",
        output: `Form displays all input fields:
- Name text field
- Email field
- Gender radio buttons
- Date picker
- Submit button`,
        vivaQuestions: [
            {
                question: "What is the purpose of the 'required' attribute?",
                answer: "It makes a form field mandatory - the form won't submit if the field is empty."
            },
            {
                question: "Difference between radio buttons and checkboxes?",
                answer: "Radio buttons allow selecting only one option, while checkboxes allow multiple selections."
            },
            {
                question: "What is the 'name' attribute used for in form elements?",
                answer: "It identifies the form field and is used when submitting the form data to the server."
            }
        ]
    },

    {
        id: 3,
        title: "CSS Styling",
        week: "Week 3",
        problem: "Apply internal, external, and inline CSS to style a web page with headings and tables",
        codeBlocks: [
            {
                language: "HTML (Practical_4.html)",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Types Example</title>

    <!-- Internal CSS -->
    <style>
        h2 {
            color: blue;
            text-align: center;
        }

        table {
            width: 50%;
            border-collapse: collapse;
        }

        th {
            background-color: lightgray;
        }

        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }
    </style>

    <!-- External CSS Link -->
    <link rel="stylesheet" href="style_4.css">
</head>

<body>

    <!-- Inline CSS -->
    <h1 style="color:red; text-align:center;">
        Web Development Practical
    </h1>

    <h2>Student Information</h2>

    <table>
        <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Branch</th>
        </tr>

        <tr>
            <td>101</td>
            <td>Smit</td>
            <td>Computer</td>
        </tr>

        <tr>
            <td>102</td>
            <td>Rahul</td>
            <td>IT</td>
        </tr>
    </table>

    <p class="para">
        This paragraph is styled using External CSS.
    </p>

</body>
</html>`
            },
            {
                language: "CSS (style_4.css)",
                code: `body {
    background-color: #f2f2f2;
    font-family: Arial;
}

.para {
    color: green;
    font-size: 20px;
    font-weight: bold;
}`
            }
        ],
        output: `Three CSS methods applied:
1. Inline: h1 with red color
2. Internal: h2 and table styling
3. External: paragraph with green color`,
        vivaQuestions: [
            {
                question: "What is the priority order of CSS?",
                answer: "Inline CSS > Internal CSS > External CSS. Inline has highest priority."
            },
            {
                question: "What does border-collapse do?",
                answer: "It merges adjacent table borders into a single border instead of double borders."
            },
            {
                question: "Why use external CSS?",
                answer: "External CSS is reusable across multiple HTML files and easier to maintain."
            }
        ]
    },

    {
        id: 4,
        title: "Bootstrap Responsive Page",
        week: "Week 4",
        problem: "Develop a responsive web page using Bootstrap Grid and Components",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Bootstrap Web Page</title>

    <!-- Bootstrap CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                My Website
            </a>
        </div>
    </nav>

    <!-- Main Container -->
    <div class="container mt-4">

        <div class="row">

            <!-- Column 1 -->
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">HTML</h3>
                        <p class="card-text">
                            HTML is used to create web pages.
                        </p>
                        <button class="btn btn-primary">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <!-- Column 2 -->
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">CSS</h3>
                        <p class="card-text">
                            CSS is used for styling web pages.
                        </p>
                        <button class="btn btn-success">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <!-- Column 3 -->
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">JavaScript</h3>
                        <p class="card-text">
                            JavaScript adds interactivity to websites.
                        </p>
                        <button class="btn btn-danger">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>

    </div>

</body>
</html>`,
        language: "HTML",
        output: `Bootstrap responsive webpage with:
- Dark navbar at top
- 3 cards in a row (responsive grid)
- Buttons with different colors
- Mobile-friendly layout`,
        vivaQuestions: [
            {
                question: "What is Bootstrap and why use it?",
                answer: "Bootstrap is a CSS framework for responsive design. It provides pre-built components and grid system for faster development."
            },
            {
                question: "Explain Bootstrap grid system?",
                answer: "It divides page into 12 columns. col-md-4 means 4 columns on medium screens. Responsive on different devices."
            },
            {
                question: "What is container-fluid?",
                answer: "container-fluid spans 100% width of viewport, while container has max-width and is centered."
            }
        ]
    },

    {
        id: 5,
        title: "JavaScript Form Validation",
        week: "Week 5",
        problem: "Write a JavaScript program to validate form inputs like Email validation and Empty field checking",
        code: `<!doctype html>
<html>
  <head>
    <title>Validation</title>

    <script>
      function validate() {
        let email = document.getElementById("email").value;
        let name = document.getElementById("name").value;

        if (name == "") {
          alert("Name cannot be empty");
          return false;
        }

        if (!email.includes("@")) {
          alert("Invalid email");
          return false;
        }
      }
    </script>
  </head>

  <body>
    <form onsubmit="return validate();">
      Name: <input type="text" id="name" /><br /><br />
      Email: <input type="text" id="email" /><br /><br />
      <input type="submit" />
    </form>
  </body>
</html>`,
        language: "JavaScript",
        output: `Form validation working:
- Empty name shows alert
- Invalid email shows alert
- Valid submission proceeds`,
        vivaQuestions: [
            {
                question: "What is form validation and why is it important?",
                answer: "Form validation checks if user input is correct before submission. It prevents invalid data entry."
            },
            {
                question: "How to validate email format in JavaScript?",
                answer: "Check if email contains '@' symbol and has text after it. Use regex: /^[^@]+@[^@]+\\.[^@]+$/"
            },
            {
                question: "What is the difference between client-side and server-side validation?",
                answer: "Client-side validation is faster but can be bypassed. Server-side is secure and mandatory."
            }
        ]
    },

    {
        id: 6,
        title: "JavaScript DOM Manipulation",
        week: "Week 6",
        problem: "Create a web page that uses JavaScript to display dynamic content using DOM",
        code: `<!DOCTYPE html>
<html>
<head>
    
<title>Dynamic DOM Example</title>

<style>
body {
    font-family: Arial;
    text-align: center;
    margin-top: 50px;
}
button {
    padding: 8px 15px;
    font-size: 16px;
}
</style>

</head>

<body>
<h2 id="heading">Welcome!</h2>

<button onclick="changeContent()">Click Me</button>
<button onclick="addParagraph()">Add Message</button>

<div id="content"></div>

<script>
function changeContent() {
    document.getElementById("heading").innerHTML = "Hello, Smit";
    document.getElementById("heading").style.color = "blue";
}

function addParagraph() {
    var para = document.createElement("p");
    para.innerHTML = "This is dynamically added content.";
    document.getElementById("content").appendChild(para);
}
</script>

</body>
</html>`,
        language: "JavaScript",
        output: `Dynamic DOM manipulation:
- Heading changes on button click
- New paragraphs added dynamically
- Colors and styles applied dynamically`,
        vivaQuestions: [
            {
                question: "What is DOM?",
                answer: "DOM (Document Object Model) is a programming interface for HTML/XML that allows JavaScript to interact with web pages."
            },
            {
                question: "Difference between innerHTML and textContent?",
                answer: "innerHTML includes HTML tags, textContent is plain text. innerHTML is dangerous with untrusted data."
            },
            {
                question: "What is appendChild method?",
                answer: "appendChild() adds a new child element to the end of parent element's children."
            }
        ]
    },

    {
        id: 7,
        title: "JavaScript Calculator",
        week: "Week 7",
        problem: "Write a JavaScript program for a simple calculator using Functions and Switch Case",
        code: `<!DOCTYPE html>
<html>
<head>
<title>Simple Calculator</title>

<script>
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;

    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            if (num2 == 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            alert("Invalid operator");
            return;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
</script>
</head>

<body>

<h2>Simple Calculator</h2>

Enter First Number:
<input type="number" id="num1"><br><br>

Select Operator:
<select id="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
</select><br><br>

Enter Second Number:
<input type="number" id="num2"><br><br>
<button onclick="calculate()">Calculate</button>

<h3 id="result"></h3>
</body>
</html>`,
        language: "JavaScript",
        output: `Calculator performs:
- Addition: 5 + 3 = 8
- Subtraction: 10 - 4 = 6
- Multiplication: 7 * 2 = 14
- Division: 20 / 5 = 4`,
        vivaQuestions: [
            {
                question: "What is parseFloat() function?",
                answer: "parseFloat() converts a string to a floating-point number. Similar to parseInt() but for decimals."
            },
            {
                question: "Why use switch case in calculator?",
                answer: "Switch case makes code cleaner and easier to add more operators compared to multiple if-else statements."
            },
            {
                question: "How to handle division by zero?",
                answer: "Check if denominator is 0 before division. Show error message if denominator is zero."
            }
        ]
    },

    {
        id: 8,
        title: "PHP Welcome Program",
        week: "Week 9",
        problem: "Design a PHP script to display Welcome Message and Current Date and Time",
        code: `<?php

date_default_timezone_set("Asia/Kolkata");

echo "<h2>Welcome to PHP Programming!</h2>";

echo "<p>Current Date and Time: " . date("d-m-Y h:i:s A") . "</p>";

echo "<p>Today is: " . date("l") . "</p>";

?>`,

        language: "PHP",
        output: `Welcome to PHP Programming!

Current Date and Time: 17-05-2026 03:45:30 PM

Today is: Saturday

Different Date Formats:
Full Date: Saturday, May 17, 2026
Time: 3:45 PM
Timestamp: 1747468530`,
        vivaQuestions: [
            {
                question: "What is PHP and why is it used?",
                answer: "PHP is a server-side scripting language used for web development. It processes data on the server before sending to browser."
            },
            {
                question: "How to display output in PHP?",
                answer: "Use echo or print statement. echo can take multiple parameters, print takes only one."
            },
            {
                question: "What is date() function in PHP?",
                answer: "date() returns current date/time in specified format. Format codes: Y=year, m=month, d=day, H=hour, i=minute, s=second."
            }
        ]
    },

    {
        id: 9,
        title: "PHP Form Handling",
        week: "Week 10",
        problem: "Write a PHP program to accept form input and display it using POST method",
        codeBlocks: [
            {
                language: "HTML (index.html)",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>PHP Form Handling</title>
</head>
<body>

<h2>User Information Form</h2>

<form method="POST" action="index.php">

    <label>Name:</label>
    <input type="text" name="name" required>

    <br><br>

    <label>Email:</label>
    <input type="email" name="email" required>

    <br><br>

    <button type="submit">Submit</button>

</form>

</body>
</html>`
            },
            {
                language: "PHP (index.php)",
                code: `<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];

    echo "<h2>Submitted Information</h2>";
    echo "<p>Name: " . $name . "</p>";
    echo "<p>Email: " . $email . "</p>";

} else {

    echo "Form not submitted via POST method";

}

?>`
            }
        ],
        output: `Submitted Information

Name: Smit Gajbhiye
Email: smit@example.com
Message: This is a test message
from the form`,
        vivaQuestions: [
            {
                question: "What is difference between GET and POST methods?",
                answer: "GET sends data in URL (visible, limited size). POST sends data in body (hidden, larger size). POST is more secure."
            },
            {
                question: "What is htmlspecialchars() function?",
                answer: "htmlspecialchars() converts special characters to HTML entities for security. Prevents HTML injection attacks."
            },
            {
                question: "How to check if form was submitted via POST?",
                answer: "Use $_SERVER['REQUEST_METHOD'] == 'POST' to check if form was submitted using POST method."
            }
        ]
    },

    {
        id: 10,
        title: "PHP String Manipulation",
        week: "Week 11",
        problem: "Implement a PHP program for String Reverse, String Length, and Substring extraction",
        codeBlocks: [
            {
                language: "HTML (index.html)",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>String Manipulation</title>
</head>
<body>

<h2>String Manipulation Program</h2>

<form method="POST" action="index.php">

    <label>Enter a String:</label>
    <input type="text" name="text" required>

    <br><br>

    <button type="submit" value="Process">Process</button>

</form>

</body>
</html>`
            },
            {
                language: "PHP (index.php)",
                code: `<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $str = $_POST['text'];

    // Get length
    $length = strlen($str);

    // Reverse string
    $reversed = strrev($str);

    // Get first 5 characters
    $substring = substr($str, 0, 5);

    // Convert to uppercase and lowercase
    $upper = strtoupper($str);
    $lower = strtolower($str);

    // Count words
    $wordCount = str_word_count($str);

    echo "<h3>String Operations</h3>";
    echo "<p><strong>Original String:</strong> " . $str . "</p>";
    echo "<p><strong>Length:</strong> " . $length . " characters</p>";
    echo "<p><strong>Reversed:</strong> " . $reversed . "</p>";
    echo "<p><strong>First 5 Characters:</strong> " . $substring . "</p>";
    echo "<p><strong>Uppercase:</strong> " . $upper . "</p>";
    echo "<p><strong>Lowercase:</strong> " . $lower . "</p>";
    echo "<p><strong>Word Count:</strong> " . $wordCount . " words</p>";

}

?>`
            }
        ],
        output: `String Operations

Original String: Hello World
Length: 11 characters
Reversed: dlroW olleH
First 5 Characters: Hello
Uppercase: HELLO WORLD
Lowercase: hello world
Word Count: 2 words`,
        vivaQuestions: [
            {
                question: "What is strlen() function?",
                answer: "strlen() returns the length of a string in characters, including spaces and special characters."
            },
            {
                question: "How to reverse a string in PHP?",
                answer: "Use strrev() function which reverses the entire string and returns it."
            },
            {
                question: "What is substr() function used for?",
                answer: "substr() extracts a portion of a string. Syntax: substr(string, start, length)"
            }
        ]
    },

    {
        id: 11,
        title: "PHP Array Program",
        week: "Week 12",
        problem: "Create a PHP script to Store values in array and Display array values",
        codeBlocks: [
            {
                language: "HTML (index.html)",
                code: `<!DOCTYPE html>
<html>
<head>
    <title>Array Program</title>
</head>
<body>

<h2>Student Array Program</h2>

<form action="index.php" method="POST">

    <label>Student 1:</label>
    <input type="text" name="s1" required><br><br>

    <label>Student 2:</label>
    <input type="text" name="s2" required><br><br>

    <label>Student 3:</label>
    <input type="text" name="s3" required><br><br>

    <label>Student 4:</label>
    <input type="text" name="s4" required><br><br>

    <button type="submit" value="Display">Display</button>

</form>

</body>
</html>`
            },
            {
                language: "PHP (index.php)",
                code: `<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Create array with form data
    $students = array(
        $_POST['s1'],
        $_POST['s2'],
        $_POST['s3'],
        $_POST['s4']
    );

    echo "<h3>Student List</h3>";
    echo "<table border='1' cellpadding='5' cellspacing='0' style='text-align: center;'>";
    echo "<tr><th>Index</th><th>Student Name</th></tr>";

    // Display array using foreach
    foreach ($students as $index => $name) {
        echo "<tr><td>" . ($index + 1) . "</td><td>" . $name . "</td></tr>";
    }

    echo "</table>";

}

?>`
            }
        ],
        output: `Student List

Index | Student Name
1     | Smit Gajbhiye
2     | Raj Kumar
3     | Priya Sharma
4     | Aditya Patel

Total Students: 4
Array Values: Smit Gajbhiye, Raj Kumar, Priya Sharma, Aditya Patel`,
        vivaQuestions: [
            {
                question: "What is an array in PHP?",
                answer: "An array is a collection of elements stored in a single variable. Elements are indexed starting from 0."
            },
            {
                question: "What is foreach loop and why use it?",
                answer: "foreach iterates through array elements without needing to know array length. Simpler than for loop for arrays."
            },
            {
                question: "What is count() function?",
                answer: "count() returns the number of elements in an array. Same as sizeof()."
            }
        ]
    }
];
