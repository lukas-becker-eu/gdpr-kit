'use strict';

/*
mandatory instead of required
*/

const gdprKitCookieBanner = document.querySelector('#js-gdpr-kit__cookie-banner');
const gdprKitSubmit = document.querySelector('#gdpr-kit__submit');

const gdprKitMandatoryCookies = document.querySelector('#gdprKitMandatoryCookies');
const gdprKitAnalyticsCookies = document.querySelector('#gdprKitAnalyticsCookies');
const gdprKitMarketingCookies = document.querySelector('#gdprKitMarketingCookies');


const gdprKitShowSettingsToggle = document.querySelector('#gdprKitShowSettings');
const gdprKitAdjustSettingsToggles = document.querySelectorAll('.gdpr-kit__toggle-input');

const gdprKitClassCookieConsent = 'js-gdpr-kit__cookie-consent';

const gdprKitEventValueMandatoryCookies = 'gdprKitMandatoryCookies';
const gdprKitEventValueAnalyticsCookies = 'gdprKitAnalyticsCookies';
const gdprKitEventValueMarketingCookies = 'gdprKitMarketingCookies';
const gdprKitEventValueAllCookies = 'gdprKitAllCookies';
const gdprKitEventValueNoCookies = 'gdprKitNoCookies';

const gdprKitNotifications = true;

/* SETTINGS */
gdprKitShowSettingsToggle.addEventListener('click', function(e) {
  e.preventDefault();
  gdprKitShowSettings();
});

function gdprKitShowSettings() {
  document.documentElement.classList.add('gdpr-kit__status__settings--are-visible');
  gdprKitSubmit.innerHTML = gdprKitSubmit.dataset.adjustSettingsLabel;
}


for (const gdprKitAdjustSettingsToggle of gdprKitAdjustSettingsToggles) {
  gdprKitAdjustSettingsToggle.addEventListener('click', () => {
    gdprKitAdjustSettings();
  });
}


/* INITIAL */

document.addEventListener('DOMContentLoaded', function() {
  gdprKitSetInputStates();
  gdprKitAdjustSettings();
  if (!getCookie('gdprKitCookieConsent=all')) {
    gdprKitShowCookieBanner();
  }
  gdprKitEvents();
  console.log('Refresh');
});


/* SUBMIT */

gdprKitSubmit.addEventListener('click', function(e) {
  //let gdprKitCookieConsentStatus = this.dataset.cookieConsentStatus;
  e.preventDefault();
  //setCookie();
  gdprKitSetCookies();
  gdprKitEvents();
  gdprKitHideCookieBanner();
});



function gdprKitShowCookieBanner() {
  document.documentElement.classList.add(gdprKitClassCookieConsent);
}

function gdprKitHideCookieBanner() {
  document.documentElement.classList.remove(gdprKitClassCookieConsent);
}

function getCookie(v) {
  var patt = new RegExp(v);
  return patt.test(document.cookie);
  //return /(^|;)\s*gdprKitCookieConsent=v/.test(document.cookie);
}





function gdprKitSetCookies() {

  var date = new Date()
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000))

  /*
   * Mandatory
   */
  switch(gdprKitSubmit.dataset.cookieConsentMandatory == 1) {
    case true:
      document.cookie = `gdprKitCookieConsentMandatory=1; expires=${date.toUTCString()}; path=/`;
      break
    default:
      document.cookie = `gdprKitCookieConsentMandatory=1; expires=${date.toUTCString()}; path=/`;
  }

  /*
   * Analytics
   */
  switch(gdprKitSubmit.dataset.cookieConsentAnalytics == 1) {
    case true:
      document.cookie = `gdprKitCookieConsentAnalytics=1; expires=${date.toUTCString()}; path=/`;
      console.log('Set Analytics Cookie: True');
      break
    default:
      document.cookie = `gdprKitCookieConsentAnalytics=0; expires=${date.toUTCString()}; path=/`;
      console.log('Set Analytics Cookie: false');
  }

  /*
   * Marketing
   */
  switch(gdprKitSubmit.dataset.cookieConsentMarketing == 1) {
    case true:
      document.cookie = `gdprKitCookieConsentMarketing=1; expires=${date.toUTCString()}; path=/`;
      break
    default:
      document.cookie = `gdprKitCookieConsentMarketing=0; expires=${date.toUTCString()}; path=/`;
  }
}


function gdprKitAdjustSettings() {

  /*
   * Mandatory
   */
  switch(gdprKitMandatoryCookies.checked) {
    case true:
      gdprKitSubmit.setAttribute('data-cookie-consent-mandatory', '1');
      break
    default:
      gdprKitSubmit.setAttribute('data-cookie-consent-mandatory', '1');
  }

  /*
   * Analytics
   */
  switch(gdprKitAnalyticsCookies.checked) {
    case true:
      gdprKitSubmit.setAttribute('data-cookie-consent-analytics', '1');
      console.log('Input checked, set attribute: Analytics true');
      break
    default:
      gdprKitSubmit.setAttribute('data-cookie-consent-analytics', '0');
  }

  /*
   * Marketing
   */
  switch(gdprKitMarketingCookies.checked) {
    case true:
      gdprKitSubmit.setAttribute('data-cookie-consent-marketing', '1');
      break
    default:
      gdprKitSubmit.setAttribute('data-cookie-consent-marketing', '0');
  }

}

function gdprKitSetInputStates() {

  /*
   * Mandatory
   */
  switch(getCookie('gdprKitCookieConsentMandatory=1')) {
    case true:
      gdprKitMandatoryCookies.checked = true
      break
    default:
      gdprKitMandatoryCookies.checked = false
  }

  /*
   * Analytics
   */
  switch(getCookie('gdprKitCookieConsentAnalytics=1')) {
    case true:
      gdprKitAnalyticsCookies.checked = true
      break
    default:
      gdprKitAnalyticsCookies.checked = false
  }

  /*
   * Marketing
   */
  switch(getCookie('gdprKitCookieConsentMarketing=1')) {
    case true:
      gdprKitMarketingCookies.checked = true
      break
    default:
      gdprKitMarketingCookies.checked = false
  }
}



// GTM Trigger
function gdprKitEvents() {

  /*
   * Mandatory
   */
  switch(getCookie('gdprKitCookieConsentMandatory=1')) {
    case true:
      gdprKitDataLayer(gdprKitEventValueMandatoryCookies);
      gdprKitNotification('🍪✔️ - mandatory cookies accepted');
      break
    default:
  }

  /*
   * Analytics
   */
  switch(getCookie('gdprKitCookieConsentAnalytics=1')) {
    case true:
      gdprKitDataLayer(gdprKitEventValueAnalyticsCookies);
      gdprKitNotification('🍪✔️ - analytics cookies accepted');
      break
    default:
  }

  /*
   * Marketing
   */
  switch(getCookie('gdprKitCookieConsentMarketing=1')) {
    case true:
      gdprKitDataLayer(gdprKitEventValueMarketingCookies);
      gdprKitNotification('🍪✔️ - marketing cookies accepted');
      break
    default:
  }

      //gdprKitDataLayer(gdprKitEventValueNoCookies);
      //gdprKitNotification('🍪❌ - cookies declined');

}

function gdprKitDataLayer(e) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: e,
  });
}

function gdprKitNotification(t) {
  if(gdprKitNotifications === true) {
    console.log(`GDPR-Kit: ${t}`);
  }
}
