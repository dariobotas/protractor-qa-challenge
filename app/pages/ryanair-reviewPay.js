const { browser, element } = require('protractor');

const loginSingupPopUp = element(by.xpath('//*[@id="ry-modal-portal"]/div/ry-auth-popup-container/div'));

exports.ValidatePopupLogin = async function selectSeats() {
    let signUpPopUpPresent = await loginSingupPopUp.isPresent();

    if(signUpPopUpPresent){
        browser.sleep("5000");
    }
}