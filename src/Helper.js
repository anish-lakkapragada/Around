// functions used in the app that you know we don't want to all write there!
import moment from "moment";

const resizeForPlaceholder = (input) => {
    input.setAttribute("size", input.getAttribute("placeholder").length + 2); 

}
const convertUnits = (timeNeeded, units) => {

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

const getFormattedDate = (date) => {
	const year = date.getFullYear();
	const month = (1 + date.getMonth()).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`;
}

export {resizeForPlaceholder, convertUnits, getFormattedDate};
