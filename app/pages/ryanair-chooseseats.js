const { browser, element } = require('protractor');

var expect = require('chai').expect

const buttonOkayGotIt = element(by.xpath('//*[@id="ry-modal-portal"]/div/seats-modal/ry-message-dialog/ry-dialog/div/div[2]/div[2]/button'));
//*[@id="ry-modal-portal"]/div/seats-modal/ry-message-dialog/ry-dialog/div/div[2]/div[2]/button
const continueButton = element(by.xpath('/html/body/seats-root/div/div/div/seats-container-root/seats-container-v2/main/div[2]/div/div/div/div/div/div[2]/div/seats-actions/span/button'));
//*[@id="seat-03F"]
const noFastTrack = element(by.xpath('/html/body/seats-root/personalization-takeovers/ry-message-renderer[3]/ng-component/ry-enhanced-takeover-beta-desktop/div/div[3]/div[2]/div[1]/button'));
const fastTrack = element(by.xpath('/html/body/seats-root/personalization-takeovers/ry-message-renderer[3]/ng-component/ry-enhanced-takeover-beta-desktop/div/div[3]/div[2]/div[2]/button'));
const reservedSeats = element(by.xpath('//*[@id="ry-modal-portal"]/div/random-allocation-modal/ry-dialog/div/random-allocation-info/reinforcement-message/div/div[3]/div/button[2]'));
const randomReservedSeats = element(by.xpath('//*[@id="ry-modal-portal"]/div/random-allocation-modal/ry-dialog/div/random-allocation-info/reinforcement-message/div/div[3]/div/button[1]'));

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
        //let seat = `seat-${numero.toString().padStart(2, "0")}${letra}`;
        
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
        /*isPresent.then(function(present) { // the `present` here is a boolean value
            expect(present).to.equal(true);
         });*/
        //presentRandomSeats = expect(isPresent).to.equal(true);
        //console.log("random lugares presente? "+isPresent);
        //console.log("escolha de lugares ao clicar continue presente? "+isGotItPresent);
        /*if (isPresent){
            reservedSeats.click();
        }else if(isGotItPresent){
            buttonOkayGotIt.click();
        }else {*/
            if (nodeNameSeat == "BUTTON") {
                await browser.actions().click(element(by.id(seat))).perform();
                seat = generateCode();
                numberOfSeats--;
                console.log(numberOfSeats);
                //browser.sleep('2000');
            }else{
                seat = generateCode();
            }
        //}
    }
}
/*async function(numberOfSeats) {
    const letras = "ABCDEF";
    let numero, letra, seat, nodeNameSeat;
    while(numberOfSeats > 0){
        numero = Math.floor(Math.random() * (33 - 18 + 1)) + 18;
        // Gerar uma letra aleatória entre A e F
        letra = letras.charAt(Math.floor(Math.random() * letras.length));

        // Construir a string seat-03D
        seat = "seat-" + numero.toString().padStart(2, "0") + letra;

        element(by.id(seat)).getAttribute('nodeName').then(function(value) {
            //console.log(value); // prints the nodeName of the element
            if(value == "BUTTON"){
                browser.actions().click(element(by.id(seat))).perform();
                numberOfSeats--;
            }else{
                nodeNameSeat = value;
            }
        });
        //nodeNameSeat = element(by.id(seat)).getAttribute('nodeName');
        //if(nodeNameSeat == "BUTTON"){
        //    browser.actions().click(element(by.id(seat))).perform();
        //    numberOfSeats--;
        //}

    }
//    var elt = document.getElementById(seat);
  //  console.log(elt.nodeName);
}*/