import MainPage from '../pages/MainPage'
import BuildYourCarPage from '../pages/BuildYourCarPage'

describe('Validate A Class models price are between £15,000 and £60,000', () => {
	Cypress.on('uncaught:exception', () => {
		return false
	})

	context('steps', () => {
		it('Open Mercedes-benz United Kingdom market', () => {
			MainPage.navigateTo()
		})

		it('Under “Our Models” - Select “Model: Hatchbacks”', () => {
			MainPage.selectModel()
		})

		it('Mouse over the “A Class” model available and proceed to “Build your car”', () => {
			MainPage.buildYourCar()
		})

		it('Filter by Fuel type “Diesel”', () => {
			BuildYourCarPage.selectFuel()
		})

		it('Take and save a screenshot of the results', () => {
			BuildYourCarPage.takeScreenShot()
		})

		it('Save the value “£” of the highest and lowest price results in a text file', () => {
			BuildYourCarPage.saveCarValues()
		})
	})
})
