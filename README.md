# BMI Calculator Application

## Installation

### Step 1: Install Node.js and npm

Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from the official website: [Node.js](https://nodejs.org/).

### Step 2: Clone the Repository

Clone the repository containing your BMI calculator application.

```bash
git clone <repository-url>
cd bmi_calculator
```

### Step 3: Install Dependencies

Install the required npm packages by running the following command in your terminal:
```bash
npm install
```
This will install the necessary dependencies specified in your package.json file.

### Step 4: Run the Application

Start the application using the following command:
```bash
node root
```

### Step 5: Access the Application

Open your web browser and go to "http://localhost:3000" to access the BMI calculator.

### Usage

Your BMI calculator application should now be running, and you can use it by entering the required information on the webpage.

Note: Ensure that the mainPageScripts.js file is served correctly from the /public/js/ path. If you encounter any issues with static files, make sure your Express app is configured to serve static files from the public directory.

Remember that this set of instructions assumes your Express application is set up to handle routes correctly, and you have a main entry point file (e.g., root.js) where you initialize and configure your Express app. If you have a different structure, adjust the instructions accordingly.

### Dependencies

```bash
{
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.18.2",
    "nodemon": "^3.0.2"
  }
}
```

### Author 
'DarkHost' Sultan



