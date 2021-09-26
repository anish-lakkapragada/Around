<script> 
    import {createEventDispatcher} from "svelte";

    export let number; 
    export let NAME; 
    export let TIME; 
    export let TIMEUNITS;
    export let DUEDATE; 
    export let DESCRIPTION;
    export let POINTS;

    // bind to THESE values!
    let name = NAME; 
    let time = TIME;
    let timeUnits = TIMEUNITS;
    let dueDate = DUEDATE;
    let description = DESCRIPTION;
    let points = POINTS;


    console.log(number, name, time, timeUnits, description, dueDate, points);

    let changeName = false, changeTime = false, changeTimeUnits = false, changeDueDate = false, changeDescription = false, changePoints = false;

    $: name, changeName = true; 
    $: time, changeTime = true; 
    $: timeUnits, changeTimeUnits = true;
    $: description, changeDescription = true;
    $: dueDate, changeDueDate = true;
    $: points, changePoints = true;

    
    $: changingAttributes = {"name" : [changeName, name], "time" : [changeTime, time], "timeUnits" : [changeTimeUnits, timeUnits], "description" : [changeDescription, description], "dueDate" : [changeDueDate, dueDate], "points" : [changePoints, points]}; 

    const eventDispatcher = createEventDispatcher(); 

    function createMessage(changing, newValue) {
        return {number:number, changing: changing, newValue: newValue};
    }

    function updateAll() {
        // function to update when a single thing is changed on blur
        for (const [changing, [changed, newValue]] of Object.entries(changingAttributes)) {
            if (changed) {
                console.log("sent message ", createMessage(changing, newValue));
                eventDispatcher("update", createMessage(changing, newValue));
                console.log('sent this message'); 
            }
        }

        console.log("at the end", name); 
        changeName = false; changeTime = false; changeTimeUnits = false; changeDescription = false; changeDueDate = false; changePoints = false;
    
    }

    const del = () => {
        eventDispatcher("delete", {"number": number}); 
    }

</script>

<main>
    <head> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- CSS only -->
    </head> 

    <h1 id = "name"> <span> {number + "."} </span> <span on:blur={updateAll} contenteditable = "true" class = "edit-info" bind:textContent={name}> {name} </span> </h1>
    <button id = "trash" on:click={del} type="button" class="uses-boot-strap btn btn-danger">Delete</button>
    <div class = "grid-container">

        <div class = "dueDate"> 
            <h3> Due Date: <span contenteditable = "true" on:blur={updateAll} class = "edit-info" bind:textContent={dueDate}> {dueDate} </span> </h3>
        </div>
        
        <div class = "time"> 
            <h3> Time: <span on:blur={updateAll} contenteditable = "true" class = "edit-info" bind:textContent={time}> {time} </span> </h3>
        </div>

        <div class = "time-unit-selector"> 
            <select id = "unit-selector" name="units" on:blur={updateAll} bind:value={timeUnits}>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
                <option value="seconds"> Seconds</option>
                <option value="days"> Days (for Calc HW) </option>
            </select>
        </div> 
        
        <div class="points">
            <h3> Points: <span contenteditable = "true"  on:blur={updateAll} class = "edit-info" bind:textContent={points}> {points} </span></h3>
        </div>  

        <div class = "description">
            <p> <em> <span contenteditable = "true" on:blur={updateAll} class = "edit-info" bind:textContent={description}> {description} </span> </em> </p>
        </div>
    </div> 
</main>


<style> 
    #name, #trash {display: inline-block; }
    
    #name {
        font-size: 2vw; 
    }

    #trash {
        font-size: 1.5vw;
        margin-left: 1vw; 
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
        grid-auto-columns: 20vw 15vw 15vw 15vw;
        grid-template-rows: 10vh 10vh;
        grid-template-areas: 
            "dueDate time tus points"
            "description description description description";
    }

    .dueDate {
        grid-area: dueDate;
        font-size: 1.5vw; 
    }

    .time {
        grid-area: time;
        font-size: 2vw; 
    }

    .time-unit-selector {
        grid-area: tus;
        font-size: 1.5vw; 
    }

    .points {
        grid-area: points;
        font-size: 1.5vw; 
    }

    .description {
        grid-area: description;
        font-size: 2vw; 
    }

    .edit-info {
        border: 1px solid rgb(202, 202, 202);
		border-radius: 4px;
    }

    .edit-info:focus{
        outline: none;
        border: 2px solid rgb(148, 148, 148);
    }

</style>