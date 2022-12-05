
<p align="center">
  <img src="https://user-images.githubusercontent.com/60219667/205298392-ef8d1db4-f8f1-43ec-bd09-ff258026f74e.jpg" />
</p>
<h1>
  <p align="center">  Mercedes-Benz Challenge 
</h1>
  
<h2>Automation⚡</h2> 

:white_check_mark: Automation with Cypress <br/>
:white_check_mark: Reporting with Allure<br/>
:white_check_mark: CI/CD with Jenkins <br/>

 Using Cypress without a CI/CD tool, there is no easy way to run a test with iteration through multiple browsers.
 My first solution, is to run the command/s refering to each browser of your choice in the terminal, one at a time,
 in the end run the command to open allure report `allure open`.
 
 The history and result of each test will be stored in allure.
 
 The Printscreen is atached to the the step "Take and save a screenshot of the results" or in the folder cypress\screenshots\ .
 
 The value of the car with higher and lowe price is saved on cypress\documents\ .
 
 My second solution, is to setup the project with Jenkins and create a pipeline, and build the project with a CI/CD solution ( Only tested on Windows ).

<h4>How to Setup?</h4> 

 - Download and Install Node (https://nodejs.org/en/download/)
 - Clone or download this repository 
 - Open the folder repository on your code editor , using the terminal, install dependencies by running the command: `npm install`
 
 <h4>How to run?</h4> 

 - Run test with chrome: `npm run cy:chrome`
 
 - Run test with firefox: `npm run cy:firefox`
 
 - Run test with edge: `npm run cy:edge`
 
 - Run test with electron: `npm run cy:electron`
 
 - open report: `allure open`
 
 
 <h4>How to Setup with Jenkins?</h4> 
  
  Since my test and validation was done only on windows, the OS available to me,
  i sugest using (https://www.jenkins.io/doc/book/installing/) for a deeper guide on installation.
  
  For windows (https://www.jenkins.io/doc/book/installing/windows/) :

  - After having all Prerequisites checked 

  - Dowload the jenkins.war file and save it on the root of the project folder
 
  - Open terminal Run and run the command : `npm run j:setup"`
  
  - Open your browser on http://localhost:8080/
  

<h2>Exploratory Testing⚡</h2> 

 - Download or visit file on - > [Cypress + Cucumber and Allure Reporter use case](https://github.com/ArturAAlves/CypressExampleTesting) 
<h2></h2>
