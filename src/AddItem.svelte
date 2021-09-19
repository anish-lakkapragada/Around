<script> 

    import {createEventDispatcher} from 'svelte';
    import {resizeForPlaceholder} from "./Helper.js"; 
    import {validateDate} from "./Helper.js"

    let adjustDDWidth = true; // disable this when there is an error 
    let errorTime = false; // used to turn on classes to adjust, only add this when there is an error 
    let normalWidthName = true; 
    
    const eventDispatcher = createEventDispatcher();
    let item = {
        name: "", 
        time: "", 
        timeUnits: "minutes", 
        description: "", 
        dueDate: "", 
        points: null // optional 
    }

    let inputName; 
    let inputTime; 
    let inputDueDate; 
    let inputDesc; 
    let inputPoints;
    
    const defaultPlaceholders = ["Name", "Time Needed", "Description", "Due Date (e.x. 2/3/2021)"];

    const check = item => {

        // first reset everything to normal (as if it were correct)
        adjustDDWidth = true; errorTime = false; normalWidthName = true; 

        const elements = [inputName, inputTime, inputDesc, inputDueDate]; 
        for (let i =0; i < elements.length; i++) {
            elements[i].style.setProperty("--color", null); 
            elements[i].style.setProperty("--opacity", null);
            elements[i].placeholder = defaultPlaceholders[i];
            resizeForPlaceholder(elements[i]);
        }

        const name = item.name;
        const time = item.time;
        const timeUnits = item.timeUnits;
        const description = item.description;
        const dueDate = item.dueDate;
        const points = item.points;
        let WORKS = true; 

        if (name === "") {
            WORKS = false; 
            normalWidthName = false; 
            inputName.placeholder = "Please give a name.";
            resizeForPlaceholder(inputName);
            inputName.style.setProperty("--color", "red");
            inputName.style.setProperty("--opacity", 1.0);
        }

        if (time === "") { 
            WORKS = false;
            errorTime = true;
            inputTime.placeholder = "Please give the amount of time needed."; 
            inputTime.style.setProperty("--color", "red");
            inputTime.style.setProperty("--opacity", 1.0);
        }

        if (description === "") {
            WORKS = false;
            inputDesc.placeholder = "Please give a description.";
            resizeForPlaceholder(inputDesc);
            inputDesc.style.setProperty("--color", "red");
            inputDesc.style.setProperty("--opacity", 1.0);
        }

        if (dueDate === "" || !validateDate(dueDate)) {
            WORKS = false;
            adjustDDWidth = false; 
            inputDueDate.value = "";
            inputDueDate.placeholder = "Please give a valid due date.";
            resizeForPlaceholder(inputDueDate);
            inputDueDate.style.setProperty("--color", "red");
            inputDueDate.style.setProperty("--opacity", 1.0);
        }

        return WORKS; 
    }
    
    const onSubmit = (event) => {
        // on submit, run this function 
        event.preventDefault(); 
        if (!check(item)) {return; }
        eventDispatcher("additem", item); // send the item to the event dispatcher
        item = {
            name: "", 
            time: "", 
            timeUnits: "minutes", 
            description: "", 
            dueDate: "", 
            points: null // optional 
        };
        console.log('yep we submitted!');
    }

</script> 
<main>
    <form on:submit={onSubmit} class = "grid-3">
        <input bind:this={inputName} id = "inputName" class:normal-width-name={normalWidthName} type="text" placeholder="Name" bind:value={item.name}/>
        <input bind:this={inputTime} id = "inputTime" class:adjust-width={errorTime} type="number" placeholder="Time Needed" bind:value={item.time}/>
        <select name="units" bind:value={item.timeUnits}>
            <option selected = "selected" value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="seconds"> Seconds</option>
            <option value="days"> Days (for Calc HW) </option>
        </select>
        <div class = "dels"> 
            <textarea bind:this={inputDesc} id="descTextArea" name="description" placeholder="Description" bind:value={item.description}/>
            <input bind:this={inputDueDate} class:width-adjuster={adjustDDWidth} type="text" id ="inputDueDate" placeholder="Due Date (e.x. 2/3/2021)" bind:value={item.dueDate}/>
            <input bind:this={inputPoints} type="number" id = "inputPoints" placeholder="Points (optional)" bind:value={item.points}/>
        </div> 
        <input id = "submit-button" type="submit" placeholder = "Enter" >
    </form>

    <script> 
        // make the textarea responsive, put all scripts inside of here!
        function autoResize() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        }
    
        textarea = document.querySelector("#descTextArea");
        textarea.addEventListener('input', autoResize, false);
    </script>
</main>

<style>

    .normal-width-name {
        width: 200px; 
    }

    #inputName::placeholder, #inputTime::placeholder, #inputDueDate::placeholder, #descTextArea::placeholder, #inputPoints::placeholder {
        color: var(--color, "lightgray");
        opacity: var(--opacity, 0.6);
    }

    .adjust-width {
        width: 300px; 
    }

    .width-adjuster {
        width: 220px; 
    }

    .dels {
        display: flex; 
        justify-content: center;
        gap: 20px; 
    }

    #submit-button {
        border-radius: 10px; 
        transition: all 0.2s ease-in-out;
        background: pink; 
    }

    #submit-button:hover {
        cursor: pointer; 
        background: rgb(255, 77, 106);
    }
</style>