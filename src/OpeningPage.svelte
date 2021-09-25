
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

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }    
    
</script>

<head>
    <meta name="google-signin-client_id" content = "226901785403-n6l4602spok3ch7983t2a9muu4i96ffn.apps.googleusercontent.com"> 
    <script src= "https://apis.google.com/js/platform.js" async defer></script>
</head>


{#if inFirst2}
    <Loading></Loading>
{/if}

<div class = "container" class:invisible={inFirst2}> 
    <div class = "title"> 
        <h1> Sign into Around </h1> 
    </div>

    <div class = "description"> 
        <h3> A fun app to manage your crazy life! </h3> 
    </div>

    <div class = "signin"> 
        <div class="g-signin2" data-onsuccess="onSignIn" />
    </div> 

    <div class = "signout"> 
        <button id = "signoutButton" on:click={signOut}>Sign out</button>
    </div> 
</div>

<style> 
    .container {
        display: grid; 
        text-align: center; 
        align-items: center; 
        justify-content: center; 
        grid-template-rows: 80px 80px 80px 80px; ; 
        grid-template-areas: "title" "description" "signin" "signout"; 
    }

    .invisible {
        display: none; 
    }

    .title {
        grid-area: title;
    }

    .description {
        grid-area: description;
        font-size: 15px; 
        font-style: italic; 
    }

    .signin {
        grid-area : signin; 
    }

    .signin {
        grid-area: signin;
        margin-left: 80px; 
    }

    .signout {
        grid-area: signout;
    }

    #signoutButton {
        border-radius: 10px; 
        transition: all 0.2s ease-in-out;
        background: pink; 
    }

    #signoutButton:hover {
        cursor: pointer; 
        background: rgb(255, 77, 106);
    }

</style> 