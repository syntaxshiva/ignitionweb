// Give the service worker access to Firebase Messaging.
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in your messagingSenderId.
firebase.initializeApp({
   apiKey: "AIzaSyC_vKvkdkvMDYGNz7sFMdloLVwJqOb_teE",
  authDomain: "nextignition.firebaseapp.com",
  projectId: "nextignition",
  storageBucket: "nextignition.appspot.com",
  messagingSenderId: "244617142523",
  appId: "1:244617142523:web:6dcbb95114f06df7b0505e"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
