/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any

    parameters {
         //  string(name:'SPEC', defaultValue:'cypress/e2e/**/**', description:'enter the path that yout want to build')
        choice(name:'BROWSERS', choices: ['chrome', 'edge', 'firefox', 'electron'], description:'browser choices')
        /* groovylint-disable-next-line LineLength */
        choice(name:'FEATUREFILE', choices: ['', '--spec cypress/e2e/tests/buildYourCarTest.cy.js'], description:'select feature file to run')
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
                steps {
                    echo 'testing..'
                    bat 'npm i'
                    bat 'npm run allure:clean'
                    bat 'npx cypress run %FEATUREFILE% --env allure=true --browser %BROWSERS%'
                    bat 'npm run allure:report'
                }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
}
