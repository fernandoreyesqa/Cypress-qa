import { After } from '@badeball/cypress-cucumber-preprocessor'

After(function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    const nombreScenario = scenario.pickle.name.replace(/\s+/g, '_')
    cy.screenshot(nombreScenario, { capture: 'fullPage' }).then(() => {
      cy.readFile(`cypress/screenshots/login.feature/${nombreScenario}.png`, 'base64').then((img) => {
        this.attach(`data:image/png;base64,${img}`, 'image/png')
      })
    })
  }
})