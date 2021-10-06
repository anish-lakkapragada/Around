
<script> 
    import {database} from "./firebaseLoad"
    import {ref, set, child, get} from "firebase/database"; 
    import {createEventDispatcher} from "svelte";   
    import Loading from "./Loading.svelte";

    let inFirst2 = true; 

    setTimeout(() => {
        // if we're still in here, make everything visible 
        inFirst2 = false;
    }, 800); 

    const eventDispatcher = createEventDispatcher(); 

    window.onSignIn = (googleUser) => {
        const userKey = googleUser.getBasicProfile().fT;
        const name = googleUser.getBasicProfile().uU; 
        const pfp = googleUser.getBasicProfile().PJ; 
;
        get(child(ref(database), "users/" + userKey)).then(function(snapshot) {
            if (snapshot.val() === null) {
                set(ref(database, "users/" + userKey), [0]);
                eventDispatcher("authenticated", {name : name, id: userKey, items: [0], pfplink: pfp});  
            }

            else {
                eventDispatcher("authenticated", {name : name, id: userKey, items: snapshot.val(), pfplink: pfp});
            }

        });
    }

    window.addEventListener("resize", () => {console.log(document.documentElement.clientHeight)});
    
</script>


<html lang="en"> 
    <head>
        <meta name="google-signin-client_id" content = "226901785403-n6l4602spok3ch7983t2a9muu4i96ffn.apps.googleusercontent.com"> 
        <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
    </head>
        {#if inFirst2}
            <Loading></Loading>
        {/if}

        <div class = "title" class:invisible={inFirst2}>
            <h1> Sign into <span id="around"> Around </span> </h1> 
        </div>

        <div class = "description" class:invisible={inFirst2}> 
            <h3> A fun app to manage your crazy life! </h3> 
        </div>
    
    <body>
        <div class = "signin" id="my-signin2" class:invisible={inFirst2}></div>

        <script>
            
          function onSuccess(googleUser) {
          }

          function onFailure(error) {
            console.log(error);
          }           

          function renderButton() {

            const PERC_WIDTH = 0.3; 
            const PERC_HEIGHT = 0.1;

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

          /*setInterval(() => {
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
          }, 499); */

        </script>
    
    </body>
</html>


<style> 

    #around {
		background: linear-gradient(45deg, rgb(132, 0, 255), rgb(255, 0, 98));
		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
	}


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
    .title {
        grid-area: title;
        font-size: 3rem;
    }

    .signin {
        margin-top: 3rem; 
        margin-left: 7rem;
    }

    #my-signin2 {
        margin-left: 35vw; 
    }

    .description {
        grid-area: description;
        font-size: 2rem; 
        font-style: italic; 
    }

</style> 
