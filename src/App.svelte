<script>

import AddItem from "./AddItem.svelte"; 
	import Item from "./Item.svelte"; 
	import OpeningPage from "./OpeningPage.svelte"; 

	import {convertUnits} from "./Helper.js";
	import {database} from "./firebaseLoad";
	import {getDatabase, ref, set, child} from "firebase/database";

	
	// authentication... 
	let AUTHENTICATED = false; 
	let NAME; let ID; 
	let ITEMS = null;
	let PFPLINK;
	let sortSelection; 

	$: sortSelection, sortItems(ITEMS);
	$: ITEMS, console.log('dank we changed to ', ITEMS);

	const sortItems = () => {
		// use value of sortSelection to sort the ITEMS array 

		console.log("sort again");
		if (sortSelection === "dueDate") {
			if (ITEMS != null) {
				console.log(ITEMS);
				
				// sort based on due date
				ITEMS.sort((a, b) => {
					return (new Date(a.dueDate) - new Date(b.dueDate));
				});

				ITEMS = [...ITEMS]; // should force reactivity 

				set(ref(database, "users/" + ID), ITEMS); 
				console.log("these are the new ITEMS ", ITEMS); 
			}
		}

		else if (sortSelection === "points") {
			if (ITEMS != null) {
				ITEMS.sort(function (points1, points2) {
					return points2.points - points1.points;
				});

				ITEMS = ITEMS;
				console.log("Changed puntos, ", ITEMS);
			}
		}

		else if (sortSelection === "name") {
			if (ITEMS != null) {
				ITEMS.sort(function (name1, name2) {
					return name1.name.localeCompare(name2.name);
				});

				ITEMS = ITEMS;
			}
		}

		else if (sortSelection === "time") {
			if (ITEMS != null) {
				ITEMS.sort(function (hw1, hw2) {
					time1 = convertUnits(hw1.time, hw1.timeUnits); 
					time2 = convertUnits(hw2.time, hw2.timeUnits);
					return time2 - time1;
				});

				ITEMS = ITEMS; 
			}
		}
	}

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

<main> 
	<head>
		<meta name="google-signin-client_id" content = "226901785403-n6l4602spok3ch7983t2a9muu4i96ffn.apps.googleusercontent.com"> 
		<script src= "https://apis.google.com/js/platform.js" async defer></script>
	</head>
	
	<div class="container">
		{#if AUTHENTICATED}
			<div class="sign-out-section"> 
				<button id= "sign-out-button" style="background-image: url({PFPLINK})" on:click={signOut}> </button>	
				<p id = "sign-out-text"> Sign Out </p>
			</div>

			<h1 id = "title"> {NAME}'s <span id = "around"> Around </span> </h1>	
			<AddItem on:additem={addItem}/> 
			{#if ITEMS.length == 0} 
				<p id = "none-there"> <strong> No HW (Yet) 😅😅 </strong> </p>
			{:else}

				<h2 id = "sort-text"> Sort HW By: </h2>	
				<select id="sort-selector" name="sortBy" bind:value={sortSelection}> 
					<option selected="true" value="dueDate">Due Date</option>
					<option value="points"> Points</option>
					<option value="time"> Time Needed </option>	
					<option value="name"> Name </option>
				</select>

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

	#sort-text, #sort-selector {
		display: inline-block;
	}

	#sort-text {
		font-size: 3rem; 
	}

	#sort-selector {
		font-size: 2rem; 
	}

	#title {
		font-size: 5rem;
		
	}

	.sign-out-section {
		display: border-box; 
		position: absolute;
		top: 5%; 
		right: 5%;
	}

	#sign-out-button {
		width: 7vw; 
		height: 7vw;
		cursor: pointer; 
		border-radius: 50%;
		transition: all 0.2s ease;
		opacity: 0.75; 
	}

	#sign-out-button:hover {
		opacity: 1; 
		border-radius: 50%; 
		border-color: black;
	}

	#sign-out-text {
		font-style: bold; 
		font-size: 1.5rem;
	}

	#none-there {
		font-size: 2rem; 
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 50rem;
		margin: 0 auto;
	}

	h1 {
		font-size: 1rem; 
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