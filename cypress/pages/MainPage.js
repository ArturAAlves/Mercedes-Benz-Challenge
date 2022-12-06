import data from '../fixtures/data.json'
import BuildYourCar from './BuildYourCarPage'
import Helper from '../utils/Helper'

const acceptAllBtn = '.wb-button--accept-all'
const agreeAllText = 'Agree to all'
const carModelBtn = '.dh-io-vmos_1RKkS'
const carCardContainer = '.dh-io-vmos_NvMoW'
const textToFilterCar = '£31,880'

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
		cy.get(carCardContainer)
			.contains(textToFilterCar)
			.scrollIntoView()
			.trigger('mouseover')

		//The navigation to the "Build your car" link will crash/block the test,
		//The error occurs in several Links.
		//My work around is to open directly the specific link "Build your car".

		/****** CODE EXAMPLE ******/
		/* 	cy.get(cardInner) 
			.contains('31,880')
			.trigger('mouseover')
			.within(e => {
				cy.get(e).contains('Build your car').click()
	    })*/

		BuildYourCar.navigateTo()
	}
}

export default new MainPage()
