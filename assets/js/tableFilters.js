function selectFilterAction(isDifferentAction = null) {
	var action = selectTable("selectFilterAction");
	if (isDifferentAction == true) {
	  action = 0
	}
	var columnId = selectTable("selectFilterActionTable");
	if (action == 0) { // TRI PAR NOM
		searchTable('inputFilterAction','tableResearchInventory',columnId);
	} else if (action == 1) { // TRI PAR VALEUR
		searchBinaryOperatorTable('inputFilterAction','tableResearchInventory',columnId);
	} else if (action == 2) { // TRI PAR ORDRE
		sortTable('inputFilterAction','tableResearchInventory',columnId);
	}
}

function hideInputOnAction() {
	var action = selectTable("selectFilterAction");
	var selectedBinaryOperator = document.getElementById("selectedBinaryOperator");
	var inputFilterAction = document.getElementById("inputFilterAction");
	var sortButton = document.getElementById("sortButton");
	var selectedOrder = document.getElementById("selectedOrder");

	if (action == 0) { // TRI PAR NOM
		disableAndHideInput(sortButton, true);
		disableAndHideInput(inputFilterAction, false);
		disableAndHideInput(selectedBinaryOperator);
		disableAndHideInput(selectedOrder, true);
		resetSearchStateTable();
	} else if (action == 1) { // TRI PAR VALEUR
		disableAndHideInput(sortButton);
		disableAndHideInput(inputFilterAction, false);
		disableAndHideInput(selectedBinaryOperator, false);
		disableAndHideInput(selectedOrder);
		resetSearchStateTable();
	} else if (action == 2) { // TRI PAR ORDRE
		disableAndHideInput(sortButton, false);
		disableAndHideInput(inputFilterAction, true);
		disableAndHideInput(selectedBinaryOperator);
		disableAndHideInput(selectedOrder, false);
		resetSearchStateTable();
	}
}

function disableAndHideInput(input, isToDisableAndHide = true) {
	if (isToDisableAndHide) {
			input.disabled = true;
			if (input.tagName.toLowerCase() === 'input') {
				input.setAttribute('type','hidden');
			} else if (input.tagName.toLowerCase() === 'span') {
				input.style.display= 'none';
			} else if (input.tagName.toLowerCase() === 'button') {
				input.hidden = true
			}
		} else {
			input.disabled = false;
			if (input.tagName.toLowerCase() === 'input') {
				input.setAttribute('type','text');
			} else if (input.tagName.toLowerCase() === 'span') {
				input.style.display= '';
			} else if (input.tagName.toLowerCase() === 'button') {
				input.hidden = false
			}
	}
}

function resetSearchStateTable() {
	document.getElementById('inputFilterAction').value = '';
	selectFilterAction(true);
}

function selectTable(columnId) {
	var columnSearchId = document.getElementById(columnId).value;
	return columnSearchId;
}

function searchTable(input,table,columnId) {
	var columnSearchId = columnId;
	var trValues = document.getElementById("tableData").getElementsByTagName("tbody")[0].rows;
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById(input);
	filter = input.value.toUpperCase();
	table = document.getElementById(table);
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[columnSearchId];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
			} else {
			tr[i].style.display = "none";
			}
		}
	}
}

function searchBinaryOperatorTable(input,table,columnId) {
	var columnSearchId = columnId;
	var binaryOperatorId = selectTable("selectedBinaryOperator");
	var input, table, tr, td, i, txtValue;

	if (binaryOperatorId == 0) {
	binaryOperator = '<';
	} else if (binaryOperatorId == 1) {
		binaryOperator = '<=';
	}  else if (binaryOperatorId == 2) {
		binaryOperator = '=';
	} else if (binaryOperatorId == 3) {
		binaryOperator = '>';
	} else if (binaryOperatorId == 4) {
		binaryOperator = '>=';
	}

	input = document.getElementById(input);
	table = document.getElementById(table);
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[columnSearchId];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (binaryOperator == '<') {
				if ((txtValue*1 < input.value*1) || ( input.value == "" ) ) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			} else if (binaryOperator == '<=') {
				if ((txtValue*1 <= input.value*1) || ( input.value == "" ) ) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			} else if (binaryOperator == '=') {
				if ((txtValue*1 == input.value*1) || ( input.value == "" ) ) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			} else if (binaryOperator == '>') {
				if ((txtValue*1 > input.value*1) || ( input.value == "" ) ) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			} else if (binaryOperator == '>=') {
				if ((txtValue*1 >= input.value*1) || ( input.value == "" ) ) {
					tr[i].style.display = "";
				} else {
					tr[i].style.display = "none";
				}
			}
		}
	}
}

function sortTable(input,table,columnId) {
	var selectedOrder = document.getElementById("selectedOrder").value;
	var columnSearchId = columnId;
	var switching, i, x, y, shouldSwitch;
	var input, table, tr, i, txtValue;
	input = document.getElementById(input);
	filter = input.value.toUpperCase();
	table = document.getElementById(table);

	tr = table.getElementsByTagName("tr");
	switching = true;

	while (switching) {
		switching = false;
		if (selectedOrder == 0) { // ORDRE CROISSANT
			for (i = 0; i < tr.length - 1; i++) {
				shouldSwitch = false;
				x = tr[i].getElementsByTagName("td")[columnSearchId];
				y = tr[i + 1].getElementsByTagName("td")[columnSearchId];
				if (convertAccentToStandardLetter(x.innerHTML.toLowerCase()) > convertAccentToStandardLetter(y.innerHTML.toLowerCase())) {
					shouldSwitch = true;
					break;
				}
			}
		} else if (selectedOrder == 1) { // ORDRE DECROISSANT
			for (i = 0; i < tr.length - 1; i++) {
				shouldSwitch = false;
				x = tr[i].getElementsByTagName("td")[columnSearchId];
				y = tr[i + 1].getElementsByTagName("td")[columnSearchId];
				if (convertAccentToStandardLetter(x.innerHTML.toLowerCase()) < convertAccentToStandardLetter(y.innerHTML.toLowerCase())) {
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			tr[i].parentNode.insertBefore(tr[i + 1], tr[i]);
			switching = true;
		}
	}
}

function convertAccentToStandardLetter(value) {
	if (!isNaN(value)) { // NOMBRE
		return parseInt(value);
	} else { // TEXTE
		return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	}
}
