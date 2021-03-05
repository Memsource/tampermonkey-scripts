// ==UserScript==
// @name         Chargebee
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Chargebee
// @author       Michal Kebrt
// @match        https://memsource-test.chargebee.com/customers/*/details
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @downloadURL  https://gitlab.memsource.com/dev/web/raw/master/src/gitlab/tampermonkey/targetprocess-links-in-gitlab.js
// ==/UserScript==

(function() {
    'use strict';

    var dt = $("dt:contains('Numeric Id')");
    var dd = dt.next();
    dd.html('<a target="_blank" href="https://cloud.memsource.com/web/organization/editSys/' + dd.text() + '">' + dd.text() + '</a>');

})();
