<script>
	import AddItem from "./AddItem.svelte"
	import Item from "./Item.svelte"

	// authentication... 
	let AUTHENTICATED = false; 
	
	// we'll use localStorage to store the items 
	
	let hwItems = JSON.parse(localStorage.getItem("hwItems")); 

	if (hwItems == null) {
		hwItems = [];
	}

	const addItem = (event) => {
		const receivedItem = event.detail; 
		hwItems = [...hwItems, receivedItem];
		localStorage.setItem("hwItems", JSON.stringify(hwItems));
		console.log('ye we got it dawg');
	}

	const update = (event) => {
		
		console.log("update", event.detail);
		const receivedItem = event.detail;
		const number = receivedItem.number;
		const changing = receivedItem.changing; 
		hwItems[number - 1][changing] = receivedItem.newValue;
		localStorage.setItem("hwItems", JSON.stringify(hwItems));
		console.log(localStorage.getItem("hwItems"));
		console.log("we are here"); 
	}

	const onDelete = (event) => {
		const number = event.detail.number - 1; // minus one for index 
		console.log(number); 
		hwItems = hwItems.filter((item, index) => {return index != number}); 
		console.log(hwItems);
		localStorage.setItem("hwItems", JSON.stringify(hwItems));
		console.log("deleted", localStorage.getItem("hwItems")); 
	}

</script>

<main>
	<div class="container">
		<AddItem on:additem={addItem}/>
		{#if hwItems.length == 0} 
			<p id = "none-there"> No HW Yet 😅😅</p>
		{:else}
			{#each hwItems as item, i}  	 
				<Item number = {i + 1} NAME={item.name} TIME = {item.time} TIMEUNITS = {item.timeUnits} DESCRIPTION = {item.description} DUEDATE = {item.dueDate} POINTS = {item.points} on:update={update} on:delete={onDelete}/>
			{/each}
		{/if}
	</div>
</main>	


<style>

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
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>