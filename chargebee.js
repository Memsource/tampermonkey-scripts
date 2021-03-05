// ==UserScript==
// @name         Chargebee
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Chargebee
// @author       Michal Kebrt
// @match        https://memsource-test.chargebee.com/customers/*/details
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @downloadURL  https://raw.githubusercontent.com/Memsource/tampermonkey-scripts/main/chargebee.js
// ==/UserScript==

(function() {
    'use strict';

    var dt = $("dt:contains('Numeric Id')");
    var dd = dt.next();
    dd.html('<a target="_blank" href="https://cloud.memsource.com/web/organization/editSys/' + dd.text() + '">' + dd.text() + '</a>');

})();
