const { Builder, By } = require(`selenium-webdriver`)
require(`chromedriver`)

async function Test() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    await driver.get('http://localhost:3000/tipo-produto/new')
    await driver.findElement(By.css('#nome')).sendKeys('Bebida')
    await driver.findElement(By.css('#submit')).click()

    await driver.get('http://localhost:3000/fornecedor/new')
    await driver.findElement(By.css('#nome')).sendKeys('Coca-Cola')
    await driver.findElement(By.css('#telefone')).sendKeys('45 3555-0000')
    await driver.findElement(By.css('#email')).sendKeys('cocacola@mail.com')
    await driver.findElement(By.css('#submit')).click()
    
    await driver.get('http://localhost:3000/produto/new')
    await driver.findElement(By.css('#nome')).sendKeys('Coca 2L')
    await driver.findElement(By.css('#tipoProduto')).sendKeys(2)
    await driver.findElement(By.css('#fornecedor')).sendKeys(2)
    await driver.findElement(By.css('#estoque')).sendKeys(10)
    await driver.findElement(By.css('#custo')).sendKeys(3.5)
    await driver.findElement(By.css('#venda')).sendKeys(7)
    await driver.findElement(By.css('#submit')).click()

    await driver.get('http://localhost:3000/produto')
}

Test()