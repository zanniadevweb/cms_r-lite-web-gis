// ------------------- VARIABLES GLOBALES -------------------
headers = [];
lineValues = [];
globalPointsArray = [];
markers = [];
// ----------------------------------------------------------
// ------------------- SUPER VARIABLES LOCALES -------------------
var isHeadersArrayAlreadyFilled = false;
var isTrLineValuesArrayAlreadyFilled = false;
// ----------------------------------------------------------

function synchronizeMap() {
	if (document.getElementById('map_research') !== undefined) {
		if (document.getElementById('map_research').children !== undefined) {
			if (document.getElementById('map_research').children[0] !== undefined) {
				document.getElementById('map_research').children[0].children[3].innerHTML = "" // Points
				document.getElementById('map_research').children[0].children[1].innerHTML = "" // Ombre des points
			}
		}
	}
	var table = '';
	table = document.getElementById("tableResearchInventory");
	var trValues = '';
	trValues = table.getElementsByTagName("tbody")[0].rows;
	var trHeaders = '';
	trHeaders = table.getElementsByTagName("thead")[0].innerHTML.replaceAll('</th>','').split('<th>');
	var trHeadersValue = '';
	var trHeadersArray = [];

	var label = '';
	var latitude = '';
	var longitude = '';
	var localId = '';

	var trValuesArray = [];
	var mapPointsLegendArray = [];
	var trValuesNoHtmlTags = ''
	for (var k = 0; k < trValues.length; k++) {
		localId = trValues[k].firstChild.innerHTML;
		latitude = trValues[k].lastChild.previousSibling.innerHTML;
		longitude = trValues[k].lastChild.innerHTML;

		if (latitude !== '' && longitude !== '') {
			trValuesNoHtmlTags = trValues[k].innerHTML.replaceAll('</td>','').split('<td>');
			let markerId = trValuesNoHtmlTags[1]
			trValues[k].setAttribute('id',trValuesNoHtmlTags[2]) // First Column is set as ID which can then be referred with: "<a href="#ID">Value</a>"
			// trValuesNoHtmlTags.splice(-2,1); // Remove Longitude Value
			// trValuesNoHtmlTags.splice(-1,1); // Remove Latitude Value
			for (var itrValuesNoHtml = 0; itrValuesNoHtml < trValuesNoHtmlTags.length; itrValuesNoHtml++) {
				trHeadersValue = trHeaders[itrValuesNoHtml];
				if (trHeadersValue !== '') {
					trHeadersArray.push(trHeadersValue);
					if (trHeadersArray.length+1 == trValuesNoHtmlTags.length && trHeadersArray.length > 0) {
						fillHeadersArray(trHeadersArray);
					}
				}
				if (trValuesNoHtmlTags[itrValuesNoHtml] !== '') {
					if (itrValuesNoHtml === 1) {
						mapPointsLegendArray.push('[' + trValuesNoHtmlTags[itrValuesNoHtml] + ']' + ' = ' + longitude + ', ' + latitude);
						fillLineValuesArray(mapPointsLegendArray);
					}
					trValuesArray.push(trHeadersArray[itrValuesNoHtml-1].toUpperCase() + ' = ' +  trValuesNoHtmlTags[itrValuesNoHtml]);
				}
			}
			label = trValuesArray.join('</br>');
			globalPointsArray.push([latitude, longitude, label]);
			createPoint(latitude, longitude, label, markerId);
			trValuesArray = [];
			trHeadersArray = [];
		}
	}

	fillLegend();
	if (enableRasterOverlays === true) {
		for (var itRast = 0; itRast < rastersArray.length; itRast++) {
			rastersArray[itRast].addTo(map)
		} 
	}
}

function fillLegend() {
	if (document.getElementsByClassName('legend')[0] != undefined) {
		document.getElementsByClassName('legend')[0].innerHTML = "";
		document.getElementsByClassName('legend')[0].parentNode.innerHTML = ""
	}
	var legend = L.control({ position: "bottomleft" });
	var fullIdInsideLabelPlanesLoop = '';
	var idInsideLabelPlanesLoop = '';
	var localLineValue = '';
	var coordInsideLabelPlanesLoop = '';
	legend.onAdd = function(map) { 
		var div = L.DomUtil.create("div", "legend");
		div.style = "overflow-y:scroll; overflow-x:hidden; height:500px;";
		div.innerHTML += "<h4>Map Actions</h4><br>";
		div.innerHTML += '<label id="checkboxScreenSize" class="input-check"><input onchange="change_state(this)" onclick="changeScreenSize()" type="checkbox" style="font-size:15px"/> <span id="textScreenSize">-> REDUCE MAP <-</span></label><br>'
		div.innerHTML += '<button id="tileMapLayerOpenStreetMap" onclick="tileMapLayerOpenStreetMap()" style="background: #d93616; font-size:15px; background-image:url(\'https://tile.openstreetmap.org/5/15/11.png\')">Open Street Map</button><br>'
		div.innerHTML += '<button id="tileMapLayerOpenTopoMap" onclick="tileMapLayerOpenTopoMap()" style="background: #d93616; font-size:15px; background-image:url(\'https://c.tile.opentopomap.org/5/15/11.png\')">Open Topo Map</button><br>'
		div.innerHTML += '<button id="tileMapLayerSatellite" onclick="tileMapLayerSatellite()" style="background: #d93616; font-size:15px; background-image:url(\'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/5/11/15\')">Satellite Map (ESRI)</button><br>'
		div.innerHTML += '<button id="tileMapLayerEsriRelief" onclick="tileMapLayerEsriRelief()" style="background: #d93616; font-size:15px; background-image:url(\'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/5/11/15\')">Relief Map (ESRI)</button><br>'
		div.innerHTML += '<button id="tileMapDare" onclick="tileMapDare()" style="background: #d93616; font-size:15px; background-image:url(\'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/5/11/15\')">DARE Map</button><br><br>'
		div.innerHTML += customMapLegend
		div.innerHTML += "<h3>Map Points</h3><br>";
		for (var iLinesVal = 0; iLinesVal < lineValues.length; iLinesVal++) {
			localLineValue = lineValues[iLinesVal]
			idInsideLabelPlanesLoop = localLineValue.split("[")[1].split(']')[0];
			fullIdInsideLabelPlanesLoop = 'labelPlanes'+idInsideLabelPlanesLoop;
			coordInsideLabelPlanesLoop = localLineValue.split('=')[1].replaceAll(' ', '');
			div.innerHTML += "<a class='labelPlanes' value="+coordInsideLabelPlanesLoop+" onclick='zoomOnMapPoint("+fullIdInsideLabelPlanesLoop+")' id="+'labelPlanes'+idInsideLabelPlanesLoop+"><span>"+localLineValue+"</span></a><br>";
		}
		return div;
	};

	legend.addTo(map);
}

function fillPolygons() {
	if (document.getElementById('tmpFilePolygonsContent').value !== '') {
		document.getElementById('optionCreatePolygon').style = '';
		document.getElementById('filePolygonsButton').disabled = false;
		if (document.getElementById('map_research') !== undefined) {
			if (document.getElementById('map_research').children !== undefined) {
				if (document.getElementById('map_research').children[0] !== undefined) {
					if (document.getElementById('map_research').children[0].children[2].children[0] !== undefined) {
						document.getElementById('map_research').children[0].children[2].children[0].children[0].innerHTML = "" // Polygones
					}
					document.getElementById('map_research').children[0].children[4].innerHTML = "" // Tooltips des polygones
				}
			}
		}
		var polygonLinesFromFile = document.getElementById('tmpFilePolygonsContent').value.split('|');
		fillPolygonsLoop(polygonLinesFromFile);
		if (disablePolygonsFirstLoadingMap === true) {
			noRegions(); // TODO
		}
	}
}

function fillPolygonsLoop(polygonLinesFromFile) {
	var currPolyPointValues = '';
	var currPolyPointValSeparated = [];
	var currPolyPointValue = '';
	var currPolyPointValuesAsArray = [];
	var currPolyPointsColor = '';
	var currPolyPointsTooltip = '';
	for (var ipolygonLinesFromFile = 0; ipolygonLinesFromFile < polygonLinesFromFile.length; ipolygonLinesFromFile++) {
		if (polygonLinesFromFile[ipolygonLinesFromFile] !== '') {
			currPolyPointValues = polygonLinesFromFile[ipolygonLinesFromFile].split('.color')[0].replace('(','').replace(')','')
			currPolyPointsColor = polygonLinesFromFile[ipolygonLinesFromFile].split('.color(')[1].split(')')[0].replaceAll('\'','');
			currPolyPointsTooltip = polygonLinesFromFile[ipolygonLinesFromFile].split('.tooltip(')[1].replaceAll('\"','').slice(0,-1);

			currPolyPointValSeparated = currPolyPointValues.split(']');
			for (var icurrPolyPointValues = 0; icurrPolyPointValues < currPolyPointValSeparated.length; icurrPolyPointValues++) {
				if ( currPolyPointValSeparated[icurrPolyPointValues] !== '') {
					currPolyPointValue = currPolyPointValSeparated[icurrPolyPointValues].split('[')[1];
					currPolyPointValuesAsArray.push(currPolyPointValue.replace(' ', '').split(','));
				}
			}
			createPolygon([currPolyPointValuesAsArray], currPolyPointsColor, currPolyPointsTooltip);
			currPolyPointValuesAsArray = [];
			currPolyPointsColor = '';
			currPolyPointsTooltip = '';
		}
	}
}

function createPolygon(polyPointsValues, polyPointsColor, polyPointsTooltip) {
	let lower_case_snake_case_polygon_tooltip = polyPointsTooltip.toLowerCase().replaceAll(' ','_').replaceAll('(','').replaceAll(')','')
	// console.log(lower_case_snake_case_polygon_tooltip)
	new L.polygon(polyPointsValues).setStyle({fillColor: polyPointsColor, color: polyPointsColor, className: lower_case_snake_case_polygon_tooltip}).addTo(map).bindTooltip(polyPointsTooltip, {permanent: true, direction:"center"});
}

function createPoint(latitude, longitude, label, markerId) {
	markers[markerId] = new L.marker([latitude,longitude]).bindPopup(label + '</br>').addTo(map);
}

function hidePoint(markerId) {
	markers[markerId]._icon.style.display = "none"
	markers[markerId]._shadow.style.display = "none"
}

function showPoint(markerId) {
	markers[markerId]._icon.style.display = ""
	markers[markerId]._shadow.style.display = ""
}

function allowsExportForWeb() {
	document.getElementById('selectExportForWebAction').disabled = false;
	document.getElementById('exportForWebButton').disabled = false;
}

function fillHeadersArray(trHeadersArray) {
	if (!isHeadersArrayAlreadyFilled) {
		headers = trHeadersArray;
		isHeadersArrayAlreadyFilled = true;
	}
}

function fillLineValuesArray(trLineValuesArray) {
	if (!isTrLineValuesArrayAlreadyFilled) {
		lineValues = trLineValuesArray;
		isTrLineValuesArrayAlreadyFilled = true;
	}
}

function fullScreen() {
	document.getElementById('map_research').style.height = '100%'
}

function smallScreen() {
	document.getElementById('map_research').style.height = '500px'
}

function change_state(obj){
		if (obj.checked){
				obj.parentNode.classList.add("checked");
		} else{
				obj.parentNode.classList.remove("checked");
		}
}

function changeScreenSize() {
	var checkboxScreenSize = document.getElementById('checkboxScreenSize');
	var textScreenSize = document.getElementById('textScreenSize');
	if (checkboxScreenSize.classList.contains('checked')) {
		document.getElementById('map_research').style.height = '100%'
		changeTextInput(textScreenSize, '-> REDUCE MAP <- ')
	} else {
		document.getElementById('map_research').style.height = '500px'
		changeTextInput(textScreenSize, '<- ENLARGE MAP ->')
	}
}

var firstChangeRegionLabelState = true;
function changeRegionLabelState() {
	var checkboxRegionLabelState = document.getElementById('checkboxRegionLabelState');
	var textRegionLabelState = document.getElementById('textRegionLabelState');
	if (checkboxRegionLabelState.classList.contains('checked') || firstChangeRegionLabelState === true) {
		withLabels();
		changeTextInput(textRegionLabelState, '+ WITH REGION LABELS +')
		firstChangeRegionLabelState = false;
	} else {
		noLabels();
		changeTextInput(textRegionLabelState, '- NO REGION LABELS -')
	}
}

function changeTextInput(input, text)
{
	var currentInput = input;
	currentInput.textContent = text;
}

function noLabels() {
	var tooltips = document.getElementsByClassName('leaflet-tooltip-pane')[0].children;
	for (var iToolTips = 0; iToolTips < tooltips.length ; iToolTips++) {
		tooltips[iToolTips].style.display= 'none';
	}
}

function withLabels() {
	var tooltips = document.getElementsByClassName('leaflet-tooltip-pane')[0].children;
	for (var iToolTips = 0; iToolTips < tooltips.length ; iToolTips++) {
		tooltips[iToolTips].style.display= '';
	}
}

function noRegions() {
	var tooltips = document.getElementsByClassName('leaflet-tooltip-pane')[0].children;
	for (var iToolTips = 0; iToolTips < tooltips.length ; iToolTips++) {
		tooltips[iToolTips].style.display= 'none';
	}
	var polygons = document.querySelectorAll("path:not(.leaflet-marker)");
	for (var iPolygons = 0; iPolygons < polygons.length ; iPolygons++) {
		polygons[iPolygons].style.display= 'none';
	}
}

function withRegions() {
	var tooltips = document.getElementsByClassName('leaflet-tooltip-pane')[0].children;
	for (var iToolTips = 0; iToolTips < tooltips.length ; iToolTips++) {
		tooltips[iToolTips].style.display= '';
	}
	var polygons = document.querySelectorAll("path:not(.leaflet-marker)");
	for (var iPolygons = 0; iPolygons < polygons.length ; iPolygons++) {
		polygons[iPolygons].style.display= '';
	}
}


function tileMapLayerOpenStreetMap() {
	tileMapLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
	document.getElementById('selectedLayerMap').setAttribute('value', 'OpenStreetMap');
}

function tileMapLayerOpenTopoMap() {
	tileMapLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')
	document.getElementById('selectedLayerMap').setAttribute('value', 'OpenTopoMap');
}

function tileMapLayerSatellite() {
	tileMapLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
	document.getElementById('selectedLayerMap').setAttribute('value', 'Satellite');
}

function tileMapLayerEsriRelief() {
	tileMapLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}')
	document.getElementById('selectedLayerMap').setAttribute('value', 'ReliefEsri');
}

function tileMapDare() {
	tileMapLayer('https://dh.gu.se/tiles/imperium/{z}/{x}/{y}.png')
	document.getElementById('selectedLayerMap').setAttribute('value', 'DareMap');
}

function tileMapLayer(src) {
	var allExistingLayers = document.getElementsByClassName('leaflet-layer') // Need to delete previous created objects from HTML Collection containing Leaflet Layers
	for (var iElements = 0; iElements < allExistingLayers.length ; iElements++) {
		allExistingLayers[iElements].remove()
	}
	var newTileLayer = new L.tileLayer(
        src, {
        attribution: '&copy; ' + mapLink + ' <a href="https://github.com/zanniadevweb/cms_r-lite-web-gis">- Customized by Alexandre Zanni</a>',
				maxNativeZoom:19,
        maxZoom: 19,
        noWrap: true
    }).addTo(map)
	map.addLayer(newTileLayer)
}

function changeMapCursorPointer() {
	var selectMapPinPointAction = document.getElementById('selectMapPinPointAction').value;

	if (selectMapPinPointAction == 1 || selectMapPinPointAction == 2)
	{
		document.getElementById('map_research').style.cursor = "pointer";
	} else {
		document.getElementById('map_research').style.cursor = "";
	}
	if (selectMapPinPointAction == 1 || selectMapPinPointAction == 3) {
		document.getElementById('inputCreatedAssociationPinPointToIdLabel').style.display = '';
		document.getElementById('inputCreatedAssociationPinPointToId').style.display = '';
	} else {
		document.getElementById('inputCreatedAssociationPinPointToId').style.display = 'none';
		document.getElementById('inputCreatedAssociationPinPointToIdLabel').style.display = 'none';
	}
	if (selectMapPinPointAction == 3) {
		document.getElementById('pinPointDeleteButton').disabled = false
		document.getElementById('pinPointSaveButton').disabled = true
	} else {
		document.getElementById('pinPointSaveButton').disabled = false
		document.getElementById('pinPointDeleteButton').disabled = true
	}
	if (selectMapPinPointAction == 2) {
		document.getElementById('inputPolygonColor').style.display = '';
		document.getElementById('inputPolygonColorLabel').style.display = '';
		document.getElementById('inputPolygonTooltip').style.display = '';
		document.getElementById('inputPolygonTooltipLabel').style.display = '';
		document.getElementById('inputSavedPinPointsPolygons').style.display = '';
		document.getElementById('inputSavedPinPointsPolygonsLabel').style.display = '';
	} else {
		document.getElementById('inputPolygonColor').style.display = 'none';
		document.getElementById('inputPolygonColorLabel').style.display = 'none';
		document.getElementById('inputPolygonTooltip').style.display = 'none';
		document.getElementById('inputPolygonTooltipLabel').style.display = 'none';
		document.getElementById('inputSavedPinPointsPolygons').style.display = 'none';
		document.getElementById('inputSavedPinPointsPolygonsLabel').style.display = 'none';
	}

	if (selectMapPinPointAction == 1 || selectMapPinPointAction == 2) {
		document.getElementById('inputCreatedPinPoint').style.display = '';
		document.getElementById('inputCreatedPinPointLabel').style.display = '';
		document.getElementById('inputSavedPinPoints').style.display = '';
		document.getElementById('inputSavedPinPointsLabel').style.display = '';
	} else {
		document.getElementById('inputCreatedPinPoint').style.display = 'none';
		document.getElementById('inputCreatedPinPointLabel').style.display = 'none';
		document.getElementById('inputSavedPinPoints').style.display = 'none';
		document.getElementById('inputSavedPinPointsLabel').style.display = 'none';
	}
}