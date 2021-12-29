import Echo from "laravel-echo";
import {authOptions} from "./utils/Api";

window._ = require('lodash');
window.Pusher = require('pusher-js');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '6d997cb2a1d07ded5b9d',
    cluster: 'ap1',
    forceTLS: true,
    encrypted: true,
    authEndpoint: '/broadcasting/auth'
});

