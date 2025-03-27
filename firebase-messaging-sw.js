importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBd9qoQK0gSzq0G8_YDsu3UWfKUGRe4BSY",
    authDomain: "eze-salahly.firebaseapp.com",
    projectId: "eze-salahly",
    storageBucket: "eze-salahly.firebasestorage.app",
    messagingSenderId: "371418165317",
    appId: "1:371418165317:web:12af4ef206f1e08b5d332c",
    measurementId: "G-5EDKMPDBEH"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification(payload.data.title, {
        body: payload.data.body ? payload.data.body : '',
        icon: payload.data.icon ? payload.data.icon : ''
    });
});