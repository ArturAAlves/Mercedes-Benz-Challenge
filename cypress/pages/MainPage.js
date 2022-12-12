import data from '../fixtures/data.json'
import BuildYourCar from './BuildYourCarPage'
import Helper from '../utils/Helper'

const allCarsContainer = '.dh-io-vmos_tGY4l'
const carModelBtn = '.dh-io-vmos_1RKkS'
const carCardContainer = '.dh-io-vmos_NvMoW'
const carTittleClass = '.dh-io-vmos_1PW4e'
const titleName = '.A-Class Hatchback'

const f = { force: true }

class MainPage {
	navigateTo() {
		cy.visit(Cypress.config().baseUrl)
		Helper.acceptAllCookies()
	}

	selectModel() {
		cy.get(carModelBtn).contains(data.typeOfCar.hatch).click(f)
	}

	buildYourCar() {
		cy.get(allCarsContainer).scrollIntoView()
		cy.get(carCardContainer)
			.each($el => {
				let text = $el.find(carTittleClass).text()
				if (text == titleName) {
					cy.get($el).trigger('mouseover')
				}
			})
			.then(() => {
				/* cy.get('.dh-io-vmos_2JRAq').click() */
				BuildYourCar.navigateTo()
			})
	}
}

export default new MainPage()
