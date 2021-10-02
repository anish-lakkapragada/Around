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
	let ITEMS = [];
	let PFPLINK;
	let sortSelection = "dueDate";

	$: sortSelection, sortItems(); // sort Items whenever this value changes. 
	$: ITEMS, console.log("yeah you changed it to ", ITEMS);  

	/**
	 * 
	 * my problem is that svelte is recoogniing that an object is changing but is 
	 * deciding to do nothing about the fact that it is changig. and it's not rerending
	 * the compoentn that uses it with an {#each block of code}. i don;t 
	*/
	const sortItems = () => {
		// use value of sortSelection to sort the ITEMS array 

		//console.log("I was asked to sort humanity.");

		if (sortSelection === "dueDate") {
			//console.log("sorting by due date");
			
			ITEMS = ITEMS.sort((a, b) => {
				return new Date(a.dueDate) - new Date(b.dueDate);
			});

			console.log("after sorting we get, ", ITEMS);
		}

		else if (sortSelection === "points") {
			ITEMS = ITEMS.sort((a, b) => {
				return b.points - a.points;
			});
		}

		else if (sortSelection === "name") {
			ITEMS = ITEMS.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});

		}

		else if (sortSelection === "time") {
			ITEMS = ITEMS.sort((a, b) => {
				console.log('we converting');
				console.log(convertUnits(b.timeNeeded, b.timeUnits)); 
				console.log(convertUnits(a.timeNeeded, a.timeUnits));
				return convertUnits(b.time, b.timeUnits) - convertUnits(a.time, a.timeUnits);
			}); 
		}

		set(ref(database, "users/" + ID), ITEMS);

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
	
	const del = (i) => {
		console.log('in here deleting stuff');
		ITEMS = ITEMS.filter((item, index) => {return index != i});
		ITEMS = ITEMS; 

		set(ref(database, "users/" + ID), ITEMS);
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

				<br> <br>

				{#each ITEMS as item, i} 

					<h1 id = "name"> <span> {i + 1 + "."} </span> <span contenteditable = "true" class = "edit-info" bind:textContent={item.name}> {item.name} </span> </h1>
					<button  on:click={() => {del(i);}} id = "trash"  type="button">Delete</button>
					<div class = "grid-container">

						<div class = "dueDate"> 
							<h3> Due Date: <span contenteditable="true" class="edit-info" on:blur={sortItems} bind:textContent={item.dueDate}> {item.dueDate} </span></h3>
						</div>
						
						<div class = "time"> 
							<h3> Time: <span  contenteditable = "true" class = "edit-info" on:blur={sortItems} bind:textContent={item.time}> {item.time} </span> </h3>
						</div>

						<div class = "time-unit-selector"> 
							<select id = "unit-selector" name="units" bind:value={item.timeUnits} on:blur={sortItems}>
								<option value="minutes">Minutes</option>
								<option value="hours">Hours</option>
								<option value="seconds"> Seconds</option>
								<option value="days"> Days (for Calc HW) </option>
							</select>
						</div> 
						
						<div class="points">
							<h3> Points: <span contenteditable = "true"  class = "edit-info" on:blur={sortItems} bind:textContent={item.points}> {item.points} </span></h3>
						</div>  

						<div class = "description">
							<p> <em> <span contenteditable = "true" class = "edit-info" on:blur={sortItems} bind:textContent={item.description}> {item.description} </span> </em> </p>
						</div>
					</div> 
				{/each}
			{/if}
		{:else}
			<OpeningPage on:authenticated={onAuthenticated}> </OpeningPage>
		{/if}
	</div>
</main>	

<style>

	#name, #trash {display: inline-block; }
    
    #name {
        font-size: 3rem; 
    }

    #trash {
        font-size: 1.5rem;
        margin-left: 1rem; 
        cursor: pointer; 
        border-radius: 20%;  
        transition: all 0.2s ease-in-out;
    }

    #trash:hover {
        background-color: rgb(253, 117, 117); 
    }


    h1 {
        color: rgb(60, 0, 255); 
    }

    .grid-container {
        text-align: center; 
        align-items: center; 
        justify-content: center; 
        display: grid;
        grid-auto-columns: 10rem 15rem 15rem 15rem;
        grid-template-rows: 5rem 5rem;
        grid-template-areas: 
            "dueDate time tus points"
            "description description description description";
    }

    .dueDate {
        grid-area: dueDate;
        font-size: 1.5rem; 
    }

    .time {
        grid-area: time;
        font-size: 2rem; 
    }

    .time-unit-selector {
        grid-area: tus;
        font-size: 1.5rem; 
    }

    .points {
        grid-area: points;
        font-size: 1.5rem; 
    }

    .description {
        grid-area: description;
        font-size: 2rem; 
    }

    .edit-info {
        border: 1px solid rgb(202, 202, 202);
		border-radius: 4px;
    }

    .edit-info:focus{
        outline: none;
        border: 2px solid rgb(148, 148, 148);
    }


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