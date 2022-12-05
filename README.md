
<p align="center">
  <img src="https://user-images.githubusercontent.com/60219667/205298392-ef8d1db4-f8f1-43ec-bd09-ff258026f74e.jpg" />
</p>
<h1>
  <p align="center">  Mercedes-Benz Challenge 
</h1>
 
 
 <h2>Exploratory Testing⚡</h2> 
 To download the exploratory test doc, please click on the link: https://github.com/ArturAAlves/Mercedes-Benz-Challenge/blob/main/BugReportTemplate_1.0.docx , then click on download button.


First part of the document contains the bugs that i was able to identify, in the end improvements. 
 

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
 - Open the folder repository on your code editor
 - using the terminal, install dependencies by running the command: `npm install`
 
 <h4>How to run?</h4> 

 - Run test with chrome: `npm run cy:chrome`
 
 - Run test with firefox: `npm run cy:firefox`
 
 - Run test with edge: `npm run cy:edge`
 
 - Run test with electron: `npm run cy:electron`
 
 - Open report: `allure open`
 
 
 <h4>How to Setup with Jenkins?</h4> 
  
  Since my test and validation was done only on windows, the OS available to me,
  i sugest using (https://www.jenkins.io/doc/book/installing/) for a deeper guide on installation.
  
  For windows (https://www.jenkins.io/doc/book/installing/windows/) :

  - After having all Prerequisites checked 

  - Dowload the jenkins.war file and save it on the root of the project folder
 
  - Open terminal Run and run the command : `npm run j:setup"`
  
  - Open your browser on http://localhost:8080/
  
  
  Suggested for better experience
  - After completing step 1) and successfully access Jenkins Home page , go to Configure-->Manage Jenkins --> Go to plugin manager --> Search and install Allure Report plugin

 
<div align="left"/>
   <h1></h1> 
   <img src="https://user-images.githubusercontent.com/60219667/205745342-891fdeef-4185-4f76-9b08-19d1698e2bf4.png" width="500"/><br/>
   <h4>1 - Insert Login and Password</h4>   
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205745572-c48880cd-bbe8-41ca-a414-2f77acc7a5ac.png" width="500"/><br/>
   <h4>2 - Click on Build new Item button</h4>   
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205745816-dfb0eff4-a0d4-48f8-8f6c-3a77a439befd.png" width="500"/><br/>
   <h4>3 - Type a project name on input box </h4>   
   <h4>4 - Click on Pipeline Button</h4>  
   <h4>5 - Click on Ok button</h4> 
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205746119-398bdd78-470c-4173-be4b-bd4087b9931b.png" width="500"/><br/>
   <h4>6 - Scroll to Pipeline element</h4>   
   <h4>7 - On Definitions Select "pipeline script from SCM"</h4>  
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205746168-1e267106-c9b9-44e5-a4e1-1e195e07e534.png" width="500"/><br/>
   <h4>8 - On SCM select "Git"</h4> 
    <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205746310-c03999fd-503e-4f94-9fe3-499d5db2f96f.png" width="500"/><br/>
   <h4>9 - On the "Repository URL" field input type this repo adress : "https://github.com/ArturAAlves/Mercedes-Benz-Challenge"</h4> 
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205746486-87f2e44c-cd4f-477c-8154-447ebfcf531a.png" width="500"/><br/>
   <h4>10 - Scroll down to "Branches to build" input field and type */main , since is the branch used</h4> 
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205762910-669478b3-c95a-4100-8531-fcc928bedae5.png" width="500"/><br/>
   <h4>11 - Scroll down to the end of the page and click on "Apply" then "Save" button</h4> 
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205746659-c2fbf5a7-050e-46ae-b0a8-c82d2208e681.png" width="500"/><br/>
   <h4>12 - Click one time on Build now , it should fail, but will  import configs from jenkins file on the repo we configured</h4> 
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205746803-0b1290f7-8ac3-49a9-87c7-beabb6cc8eb6.png" width="500"/><br/>
   <h4>13 - Now you should see a button with "Build with Parameters" </h4> 
   <h4>14 - Select the browser you want to run with" </h4> 
   <h4>15 - Select the spec file you want to test, in this case, there will be only one available " </h4> 
   <h4>16 - Click on Build </h4> 
   <h1></h1> 
   <br/>
   <img src="https://user-images.githubusercontent.com/60219667/205764173-4c0d1dc9-1fa4-4b6c-b944-635acf34ad36.png" width="500"/><br/>
   <h4>17 - If all went according to plan, you should have a report on your build History  </h4> 

   
   
</div>




