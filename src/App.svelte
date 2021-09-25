<script>
	import AddItem from "./AddItem.svelte"; 
	import Item from "./Item.svelte"; 
	import OpeningPage from "./OpeningPage.svelte"; 

	import {database} from "./firebaseLoad";
	import {getDatabase, ref, set, child} from "firebase/database";

	
	// authentication... 
	let AUTHENTICATED = false; 
	let NAME = null; let ID = null; 
	let ITEMS = null;
	let PFPLINK;
	
	const onAuthenticated = (event) => {
		const {name, items, id, pfplink} = event.detail;
		console.log(event.detail, "del");
		NAME = name; 
		ID = id; 
		PFPLINK = pfplink;
		console.log(`this is link, ${PFPLINK}, ${typeof(PFPLINK)}`);

		AUTHENTICATED = true;

		console.log("damn", PFPLINK);
		console.log("items are: ", items);
		if (JSON.stringify(items) === JSON.stringify([0])) {ITEMS = [];}
		else {ITEMS = items;}

		console.log("ITEMS ARE :", ITEMS);
	}
	

	const addItem = (event) => {
		const receivedItem = event.detail; 
		ITEMS = [...ITEMS, receivedItem];
		
		console.log(ITEMS);
		set(ref(database, "users/" + ID), ITEMS); 
	}

	const update = (event) => {
		
		console.log("update", event.detail);
		const receivedItem = event.detail;
		const number = receivedItem.number;
		const changing = receivedItem.changing; 
		ITEMS[number - 1][changing] = receivedItem.newValue;

		// overhere now store into firebase 
		set(ref(database, "users/" + ID), ITEMS); 
	}

	const onDelete = (event) => {
		// TODO work on delete function with firebase
		const number = event.detail.number - 1; // minus one for index 
		console.log(number); 
		ITEMS = ITEMS.filter((item, index) => {return index != number}); 

		let firebaseItems = null; 
		if (ITEMS.length == 0) {firebaseItems = [0];}
		set(ref(database, "users/" + ID), firebaseItems);
	}

	function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
			AUTHENTICATED =false;
		});
    } 

</script>



<head>
    <meta name="google-signin-client_id" content = "226901785403-n6l4602spok3ch7983t2a9muu4i96ffn.apps.googleusercontent.com"> 
    <script src= "https://apis.google.com/js/platform.js" async defer></script>
</head>

<main> 
	<div class="container">
		{#if AUTHENTICATED}
			<div class="sign-out-section"> 
				<button id= "sign-out-button" style="background-image: url({PFPLINK})" on:click={signOut}> </button>	
				<p id = "sign-out-text"> Sign Out </p>
			</div>

			<h1> {NAME}'s <span id = "around"> Around </span> </h1>	
			<AddItem on:additem={addItem}/>
			{#if ITEMS.length == 0} 
				<p id = "none-there"> No HW Yet 😅😅</p>
			{:else}
				{#each ITEMS as item, i}  	 
					<Item number = {i + 1} NAME={item.name} TIME = {item.time} TIMEUNITS = {item.timeUnits} DESCRIPTION = {item.description} DUEDATE = {item.dueDate} POINTS = {item.points} on:update={update} on:delete={onDelete}/>
				{/each}
			{/if}
		{:else}
			<OpeningPage on:authenticated={onAuthenticated}> </OpeningPage>
		{/if}
	</div>
</main>	


<style>

	.sign-out-section {
		display: border-box; 
		position: absolute; 
		top: 5%; 
		right: 7%;
	}

	#sign-out-button {
		width: 100px; 
		height: 100px;
		cursor: pointer; 
		border-radius: 50%;
		transition: all 0.5s ease;
		opacity: 0.9; 
	}

	#sign-out-button:hover {
		opacity: 1; 
		width: 110px; 
		height: 110px; 
		border-radius: 50%; 
		border-color: black;
	}

	#sign-out-text {
		font-style: bold; 
		font-size: 1.5em;
	}

	#none-there {
		font-weight: bold;
		font-size: 1.5em;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		font-size: 50px; 
	}

	#around {
		background: linear-gradient(45deg, rgb(132, 0, 255), rgb(255, 0, 98));
		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>