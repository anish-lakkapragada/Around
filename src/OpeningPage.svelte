
<script> 
    import {database} from "./firebaseLoad"
    import {ref, set, child, get} from "firebase/database"; 
    import {createEventDispatcher} from "svelte";   
    import Loading from "./Loading.svelte";

    let inFirst2 = true; 

    setTimeout(() => {
        // if we're still in here, make everything visible 
        console.log("dank");
        inFirst2 = false;
    }, 800); 

    const eventDispatcher = createEventDispatcher(); 

    window.onSignIn = (googleUser) => {
        console.log("default in");
        const userKey = googleUser.getBasicProfile().fT;
        const name = googleUser.getBasicProfile().uU; 
        const pfp = googleUser.getBasicProfile().PJ; 
        
        console.log("damn", Object.keys(googleUser.getBasicProfile())); 
        console.log(googleUser.getBasicProfile());
        console.log(userKey, name, "yeet");
        get(child(ref(database), "users/" + userKey)).then(function(snapshot) {
            if (snapshot.val() === null) {
                set(ref(database, "users/" + userKey), [0]);
                eventDispatcher("authenticated", {name : name, id: userKey, items: [0], pfplink: pfp});  
            }

            else {
                console.log("this value exists thank you"); 
                console.log(snapshot.val()); 
                eventDispatcher("authenticated", {name : name, id: userKey, items: snapshot.val(), pfplink: pfp});
            }

        });
    }
    
</script>


<html lang="en"> 
    <head>
        <meta name="google-signin-client_id" content = "226901785403-n6l4602spok3ch7983t2a9muu4i96ffn.apps.googleusercontent.com"> 
    </head>
        {#if inFirst2}
            <Loading></Loading>
        {/if}

        <div class = "title" class:invisible={inFirst2}>
            <h1> Sign into Around </h1> 
        </div>

        <div class = "description" class:invisible={inFirst2}> 
            <h3> A fun app to manage your crazy life! </h3> 
        </div>
    
    <body>
        <div class = "signin" id="my-signin2" class:invisible={inFirst2}></div>

        <script>
            
          function onSuccess(googleUser) {
            console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
          }

          function onFailure(error) {
            console.log(error);
          }           

          function renderButton() {
            console.log('we running this cude', document.documentElement.clientHeight);

            const PERC_WIDTH = 0.3; 
            const PERC_HEIGHT = 0.1;


            console.log(document.documentElement.clientWidth, document.documentElement.clientHeight);
            const WIDTH = document.documentElement.clientWidth * PERC_WIDTH;     
            const HEIGHT = document.documentElement.clientHeight * PERC_HEIGHT;

            try {
                gapi.signin2.render("my-signin2", {
                'scope': 'profile email',
                'width': WIDTH,
                'height': HEIGHT,
                'longtitle': false,
                'theme': 'dark',
                'onsuccess': onSignIn,
                'onfailure': onFailure
                });
            } 

            catch (err) {
                console.log(err);
            }
          }

          let currentHeight = null;
          let currentWidth = null;

          setInterval(() => {
            let needToRender = false; 
            if (document.documentElement.clientHeight != currentHeight) {
                currentHeight = document.documentElement.clientHeight;
                needToRender = true;
            }

            if (document.documentElement.clientWidth != currentWidth) {
                currentWidth = document.documentElement.clientWidth;
                needToRender = true;
            } 

            if (needToRender) {renderButton();}
          }, 500); 

        </script>
    
        <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
    </body>
</html>


<style> 
    .container {
        display: grid; 
        text-align: center; 
        align-items: center; 
        justify-content: center; 
        grid-template-rows: auto;
        grid-template-areas: "title" "description" "signin" "signout"; 
    }

    .invisible {
        display: none; 
    }   

    :root {
        font-size: 1vh; 
    }

    .title {
        grid-area: title;
        font-size: 7rem;
    }

    .signin {
        margin-top: 3rem; 
        margin-left: 7rem;
    }

    .description {
        grid-area: description;
        font-size: 5rem; 
        font-style: italic; 
    }

</style> 
