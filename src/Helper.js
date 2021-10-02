// functions used in the app that you know we don't want to all write there!
import moment from "moment";

const resizeForPlaceholder = (input) => {
    input.setAttribute("size", input.getAttribute("placeholder").length + 2); 

}

const validateDate = (date) => {
    if (typeof(date) !== "string") {return false;}

    if (date.charAt(0) !== "0" && date.charAt(1) === "/") {
        date = "0" + date; 
    }

    console.log(`this is date ${date}`);

    if (!moment(date, "MM/DD/YY", true).isValid() && !moment(date, "MM/DD/YYYY", true).isValid() && !moment(date, "MM/D/YY", true).isValid() && !moment(date, "MM/D/YYYY", true).isValid()) {
        console.log(`invalid date:`); console.log(date);
        return false;  
    }

    return true; 
    
}

const convertUnits = (timeNeeded, units) => {
    console.log("inside, we got: ", timeNeeded, units);

    if (units === "minutes") {
        return timeNeeded; 
    }

    if (units === "hours") {
        return timeNeeded * 60; 
    }

    if (units === "seconds") {
        return timeNeeded / 60; 
    }

    if (units === "days") {
        return timeNeeded * 60 * 24; 
    }

}

export {validateDate, resizeForPlaceholder, convertUnits};
