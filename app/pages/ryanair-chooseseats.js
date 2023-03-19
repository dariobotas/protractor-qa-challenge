const { browser, element } = require('protractor');

//Locators
//Seat list Locators
const buttonOkayGotIt = element(by.xpath('//*[@id="ry-modal-portal"]/div/seats-modal/ry-message-dialog/ry-dialog/div/div[2]/div[2]/button'));
const continueButton = element(by.xpath('/html/body/seats-root/div/div/div/seats-container-root/seats-container-v2/main/div[2]/div/div/div/div/div/div[2]/div/seats-actions/span/button'));
const noFastTrack = element(by.xpath('/html/body/seats-root/personalization-takeovers/ry-message-renderer[3]/ng-component/ry-enhanced-takeover-beta-desktop/div/div[3]/div[2]/div[1]/button'));
const fastTrack = element(by.xpath('/html/body/seats-root/personalization-takeovers/ry-message-renderer[3]/ng-component/ry-enhanced-takeover-beta-desktop/div/div[3]/div[2]/div[2]/button'));
const reservedSeats = element(by.xpath('//*[@id="ry-modal-portal"]/div/random-allocation-modal/ry-dialog/div/random-allocation-info/reinforcement-message/div/div[3]/div/button[2]'));

//Function actions on the page
exports.clickOkGotIt = () => {
    buttonOkayGotIt.click();
}

exports.clickContinueButton = () => {
    continueButton.click();
}

exports.clickFastTrack = (fastTrackOrNot) => {
    if(fastTrackOrNot == "no fast track"){
        noFastTrack.click();
    }else {
        fastTrack.click();
    }
}

exports.selectSeats = async function selectSeats(numberOfSeats) {
    const letras = "ABCDEF";
    let numero = Math.floor(Math.random() * (27 - 19 + 1)) + 19;
    let letra = letras.charAt("A");//Math.floor(Math.random() * letras.length));
    let seat, isPresent, isGotItPresent;
     
    function generateCode() {
        // Construir o código usando template literals
        let code = `seat-${numero.toString().padStart(2, "0")}${letra}`;
        
        // Incrementar a letra e verificar se ultrapassou o F
        letra = String.fromCharCode(letra.charCodeAt(0) + 1);
        if (letra > "F") {
          // Se ultrapassou o F, incrementar o número e verificar se ultrapassou o 33
          numero++;
          if (numero > 33) {
            // Se ultrapassou o 33, voltar para o 18
            numero = 18;
          }
          // Voltar a letra para A
          letra = "A";
        }
        // Retornar o código gerado
        return code;
      }
    
    seat = generateCode();
    
    while (numberOfSeats > 0) {
        let nodeNameSeat = await element(by.id(seat)).getAttribute('nodeName');
        isPresent = await reservedSeats.isPresent();
        isGotItPresent = await buttonOkayGotIt.isPresent();

        if (nodeNameSeat == "BUTTON") {
            await browser.actions().click(element(by.id(seat))).perform();
            seat = generateCode();
            numberOfSeats--;
            }else{
                seat = generateCode();
            }
    }
}