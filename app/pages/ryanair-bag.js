const { browser, element } = require('protractor');

var expect = require('chai').expect

const smallBag = element(by.xpath('/html/body/bags-root/bags-booking-container/div/main/div/section[1]/div/bags-cabin-lazy-bag/bags-cabin-bag-section/bags-bag-layout/div/div[3]/div[2]/bags-pax-table-journey-container/div/div/bags-cabin-bag-table-controls-container/bags-cabin-bag-table-controls/div[1]/bags-small-bag-pax-control/div/bags-product-selector/div/div/div[1]/ry-radio-circle-button'));
const twoCabinBag = element(by.xpath('/html/body/bags-root/bags-booking-container/div/main/div/section[1]/div/bags-cabin-lazy-bag/bags-cabin-bag-section/bags-bag-layout/div/div[3]/div[2]/bags-pax-table-journey-container/div/div/bags-cabin-bag-table-controls-container/bags-cabin-bag-table-controls/div[2]/bags-priority-boarding-pax-control/div/bags-product-selector/div/div/div[1]/ry-radio-circle-button'));
const twentyKgCheckinBagForAll = element(by.xpath('/html/body/bags-root/bags-booking-container/div/main/div/section[2]/bags-checkin-bag/bags-bag-layout/div/div[2]/div[2]/bags-pax-table-journey-container/div/div/bags-checkin-bag-table-controls/div[2]/bags-table-row-cta/span'));
const tenKgCheckinBagForAll = element(by.xpath('/html/body/bags-root/bags-booking-container/div/main/div/section[2]/bags-checkin-bag/bags-bag-layout/div/div[2]/div[2]/bags-pax-table-journey-container/div/div/bags-checkin-bag-table-controls/div[1]/bags-table-row-cta/span'));
const continueButtonBag = element(by.xpath('/html/body/bags-root/bags-booking-container/div/main/div/section[4]/bags-continue-flow-container/bags-continue-flow/button'));

exports.selectContinueButton = () => {
    continueButtonBag.click();
}

exports.selectCabinBag = (cabinBag) => {
    if(cabinBag !== "small bag only"){
        twoCabinBag.click();
    }else{
        smallBag.click();
    }
}

exports.selectCheckinKgBagForAllPassengers = (kgBag) => {
    if(kgBag == 20){
        twentyKgCheckinBagForAll.click();
    }else{
        tenKgCheckinBagForAll.click();
    }
}