"use strict";	

function validate() {
	
	//Variables
	var errorMessage = '';
	var successMessage = '';
	var email = document.returnForm.emailAddress.value;
	var valEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}/;
	var password = document.returnForm.password.value;
	var valPassword = /[a-zA-Z0-9!@#$%^&*]{8,20}/;
	var firstName = document.returnForm.firstName.value;
	var valFirstName = /[a-zA-Z][a-zA-Z_ .-]{2,35}/;
	var middleInitial = document.returnForm.middleInitial.value;
	var valMiddleInitial = /[A-Z]/;
	var lastName = document.returnForm.lastName.value;
	var valLastName = /[a-zA-Z][a-zA-Z_ .-]{2,35}/;
	var address = document.returnForm.address.value;
	var valAddress = /[a-zA-Z0-9_ ]{2,35}/;
	var city = document.returnForm.city.value;
	var valCity = /[A-Z][a-z]{2,22}/;
	var state = document.getElementById("state");
	var strState = state.options[state.selectedIndex].value;
	var zipCode = document.returnForm.zipcode.value;
	var valZip = /[0-9]{5}/;
	var phoneNumber = document.returnForm.phoneNumber.value;
	var valPhone = /[\(]\d{3}[\)]\d{3}[\-]\d{4}/;
	var orderNumber = document.returnForm.orderNumber.value;
	var valOrderNum = /[a-zA-Z0-9\-]{2}-[a-zA-Z0-9]{5}/;	
	var product = document.getElementsByName("returnItem");
	var check = 0;
	var i;		
	var reasonReturn = document.getElementById("reasonReturn");
	var strReasonReturn = reasonReturn.options[reasonReturn.selectedIndex].value;
	var descriptionReturn = document.getElementById("descriptionReturn").value;
	

	//Validation Process
	if(!valEmail.test(email)){
		errorMessage += "Please provide a valid Email Address \n";
	}	

	if(!valPassword.test(password)){
		errorMessage += "Please enter a valid Password \n";
	}
	
	if(!valFirstName.test(firstName)){
		errorMessage += "Please enter a valid First Name \n";
	}
	
	if(!valMiddleInitial.test(middleInitial)){
		errorMessage += "Please enter a valid Middle Initial \n";
	}
	
	if(!valLastName.test(lastName)){
		errorMessage += "Please enter a valid Last Name \n";
	}

	if(!valAddress.test(address)){
		errorMessage += "Please enter a valid Address \n";
	}	
		
	if(!valCity.test(city)){
		errorMessage += "Please enter a valid City \n";
	}	 	  
			
	if(state.selectedIndex === 0){
		errorMessage += "Please select a State\n";
	}

	if(!valZip.test(zipCode)){
		errorMessage += "Please enter a valid Zip Code \n";
	}	

	if(!valPhone.test(phoneNumber)){
		errorMessage += "Please enter a valid Phone Number \n";
	}	
		
	if(!valOrderNum.test(orderNumber)){
		errorMessage += "Please enter a valid Order Number \n";
	}	
	
	//Check if a radio button is clicked or not
	//Found an example at: http://stackoverflow.com/questions/14342452/javascript-validate-multiple-radio-selections
	
	for(i = 0; i < product.length; i++){
		if(product[i].checked){
			check++;
			break;
		}
	}
	
	if(!check){
		errorMessage += "Please select a Product Type \n";
	}
		
	if(reasonReturn.selectedIndex === 0){
		errorMessage += "Please select a Reason for Return \n";
	}	
	
	if(!document.returnForm.terms.checked){
		errorMessage += "You must agree to the Terms first. \n";
	}

	//Show alert box	
	if(errorMessage === ''){
		successMessage += "You successfully completed the form! \n\n";
		successMessage += "Email: " + email + "\n";
		successMessage += "First Name: " + firstName + "\n";
		successMessage += "Middle Initial: " + middleInitial + "\n";
		successMessage += "Last Name: " + lastName + "\n";
		successMessage += "Address: " + address + "\n";
		successMessage += "City: " + city + "\n";
		successMessage += "State: " + strState + "\n";
		successMessage += "zipCode: " + zipCode + "\n";
		successMessage += "Phone Number: " + phoneNumber + "\n";
		successMessage += "Order Number: " + orderNumber + "\n";
		successMessage += "Product Type: " + product[i].value + "\n";		
		successMessage += "Reason for Return: " + strReasonReturn + "\n";
		successMessage += "Description of Return: " + descriptionReturn + "\n";

		alert(successMessage);
		return true;
	}
	else{
		alert(errorMessage);
		return false;
	}
}