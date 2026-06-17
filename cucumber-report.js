const report = require('multiple-cucumber-html-reporter')

report.generate({
  jsonDir: 'cypress/reports/cucumber-json',
  reportPath: 'cypress/reports/cucumber-html',
  displayReportTime: true,
  displayDuration: true,
  pageFooter: '<div><p>Reporte Saucedemo</p></div>',
  metadata: {
    browser: { name: 'chrome', version: 'latest' },
    device: 'Local',
    platform: { name: 'Windows', version: '10' }
  },
  customData: {
    title: 'Reporte de Pruebas',
    data: [
      { label: 'Proyecto', value: 'Saucedemo' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Ambiente', value: process.env.AMBIENTE || 'dev' }
    ]
  }
})