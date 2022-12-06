import data from '../fixtures/data.json'
import Helper from '../utils/Helper'

const acceptAllBtn = '.wb-button--accept-all'
const fuelSelectorBtn = '.wb-multi-select-control__button'
const comparisonWrapper = '.cc-motorization-comparison-wrapper'
const carValuesHeader = '.cc-motorization-header__price'

const f = { force: true }

class BuildYourCar {
	navigateTo() {
		cy.visit(data.AClassConfigURL)
		Helper.acceptAllCookies(acceptAllBtn)
	}

	selectModel() {
		cy.get(carModelBtn).contains(data.typeOfCar.hatch).click(f)
	}

	buildYourCar() {
		cy.get(carCardContainer)
			.contains(textToFilterCar)
			.scrollIntoView()
			.trigger('mouseover')
	}
	selectFuel() {
		cy.get(fuelSelectorBtn).click(f)
		cy.contains(data.fuelType.diesel).click(f)
		cy.get(fuelSelectorBtn).click(f)
	}

	takeScreenShot() {
		cy.get(comparisonWrapper).screenshot('Hatchbacks Diesel cars', {
			overwrite: true,
		})

		cy.get(comparisonWrapper).screenshot('Hatchbacks Diesel cars', {
			padding: 30,
			overwrite: true,
		})
	}

	saveCarValues() {
		cy.get(carValuesHeader).then($element => {
			cy.writeFile(
				`cypress/documents/${Helper.dataStamp()}-CarPrices.txt`,
				Helper.getCarValueResults($element.text())
			)
		})
	}
}

export default new BuildYourCar()
