<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Firebase 101 on Gatsby x React
</h1>

Create a Gatsby app with basic Firebase and no data in it.


## Create the Firebase project 🔥 ##

1.  Go on https://console.firebase.google.com/u/1/ and click on ``Add project``

1. Add a name to your project, then click on ``Continue``

1. Enable Google Analytics if you want to, then click on ``Continue``

1. Your Firebase project has been created! 🎉


## Enable Firestore 💾 ##

1. Click on ``Cloud Firestore`` on the leftside menu

1. Click on ``Create database``

1. For developing purposes, select ``Start in test mode`` so you can write and read data however you want it. Remember to change it back when your website is in production.

1. Press on ``Next`` and select the region you want. ``nam5 (us-central)`` is fine if you are in Eastern America

1. Then click on ``Enable`` when you are done

1. Firestore has now been enabled for your Firebase project! 🎉


## Add Firebase to your app 🥪 ##

1. Go back to ``Project Overview``

1. In the hero section, you can see ``Get started by adding Firebase to your app``

1. Click on the type of application you are developing. If it's for web, click on ``Web``

1. Register your app by adding an app nickname

1. If you wish to host your app on Firebase, check the ``Also enable Firebase hosting for this app`` box

1. When you are done, click on ``Register app``

1. You'll then see your ``firebaseConfig`` keys. We'll come back to that later

1. Click on ``Continue to console``

1. Your app has been registered! 🎉


## Create your Gatsby app 💻 ##

1. If you haven't already, create your Gatsby application. You can clone eleven's gatsby template:
```
# Replace <APP_NAME> by a name of your choice
gatsby new <APP_NAME> https://github.com/11-eleven/gatsby-template.git 
```

2. Then open your project in your code editor
```
cd <APP_NAME>
code . # If you are using Visual Studio Code
```


## Add your configuration keys your Gatsby project 🗝️ ##

1. In your ``src`` folder, create another folder called  ``utils``

2. Inside the newly create ``utils`` folder, create a file called ``firebase.js``

3. In ``firebase.js``, we'll put all of our configuration for Firebase

4. Go back on the Firebase website. Next to ``Project Overview``, click on the gear icon, then on ``Project settings``

5. Scroll down, and you'll see your configuration keys. Copy your ``firebaseCongif`` code
 ```
  var firebaseConfig = {
    apiKey: "XXXXX-XXXXX",
    authDomain: "XXXXX.firebaseapp.com",
    databaseURL: "https://XXXXX.firebaseio.com",
    projectId: "XXXXX",
    storageBucket: "XXXXX.appspot.com",
    messagingSenderId: "XXXXX",
    appId: "XXXXX"
  };
 ```

6. Add your configuration keys in your untracked ``.env`` file
 For example, if my Firebase ``projectID`` is ``myapp``, I'll add ``FIREBASE_API_KEY=myapp`` in my ``.env`` file. Then I'll do the same for each Firebase configuration key

7. Change all your configuration keys to the keys in your ``.env`` file
  ```
  var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEURL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  ```

8. You can fix your ``firebase.js`` file if you wish to, by changing ``var`` to ``const``
  ```
    const firebaseConfig = {
      <CONFIGURATION_KEYS_HERE>
    };
  ```

## Import and install Firebase to your Gatsby project ⏳ ##

1. Import Firebase in your ``firebase.js`` file <br>
 At the top of the file, on line 1, add 
 ```
 import firebase from 'firebase/app'
 ```

2. Install Firebase through your terminal
 ```
 npm i --save firebase
 ```

3. After the ``firebaseConfig`` code, initialize Firebase. 
  ```
  let instance

  export default function getFirebase() {
    if (typeof window !== "undefined") {
      if (instance) return instance
      instance = firebase.initializeApp(firebaseConfig);
      return instance
    }

    return null
  }
  ```
   Here, instead of only using ``firebase.initializeApp(firebaseConfig)``, we are only initializing Firebase if there is a window to not overload our application when it is building. Then, we are exporting it.

4. Firebase has been configured and you are ready to start using it in your app! 🎉


<!-- AUTO-GENERATED-CONTENT:END -->
