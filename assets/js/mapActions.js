// ------------------- VARIABLES GLOBALES -------------------
headers = [];
lineValues = [];
globalPointsArray = [];
markers = [];
polygons = [];
currentClickedPolygon = "";
currentClickedPolygonLabel = "";
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
			if (typeof(columnNumberMapDisplay) !== 'undefined' && columnNumberMapDisplay !== undefined && trValuesNoHtmlTags[columnNumberMapDisplay] !== undefined) {
				var subsidiaryMapDisplay = ' ('+trValuesNoHtmlTags[columnNumberMapDisplay]+')'
			} else {
				var subsidiaryMapDisplay = ""
			}
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
						mapPointsLegendArray.push('[' + trValuesNoHtmlTags[itrValuesNoHtml] + ']' + ' = ' + latitude + ', ' + longitude + subsidiaryMapDisplay);
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
		div.innerHTML += '<button id="tileMapDare" onclick="tileMapDare()" style="background: #d93616; font-size:15px; background-image:url(\'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/5/11/15\')">DARE Map</button><br>'
		div.innerHTML += '<button id="tileMapBlank" onclick="tileMapBlank()" style="background: #d93616; font-size:15px; background-image:url(\'https://c.basemaps.cartocdn.com/light_nolabels/7/62/44.png\')">Blank Map</button><br><br>'
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
		// document.getElementById('filePolygonsButton').disabled = false;
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
	addIdsAndClassesToPolygonsTooltips()
}

function createPolygon(polyPointsValues, polyPointsColor, polyPointsTooltip) {
	let lower_case_snake_case_polygon_tooltip = polyPointsTooltip.toLowerCase().replaceAll(' ','_').replaceAll('(','').replaceAll(')','')
	polygons[lower_case_snake_case_polygon_tooltip] =
	new L.polygon(polyPointsValues).setStyle({fillColor: polyPointsColor, color: polyPointsColor, className: lower_case_snake_case_polygon_tooltip}).addTo(map).bindTooltip(polyPointsTooltip, {permanent: false, direction:"center"});
	polygons[lower_case_snake_case_polygon_tooltip]._path.setAttribute('id',lower_case_snake_case_polygon_tooltip) 
	polygons[lower_case_snake_case_polygon_tooltip].addEventListener("click", highlightClickedPolygon, false);
	polygons[lower_case_snake_case_polygon_tooltip].polygonId = lower_case_snake_case_polygon_tooltip;
	polygons[lower_case_snake_case_polygon_tooltip].polygonLabel = polyPointsTooltip;
}

function createPoint(latitude, longitude, label, markerId) {
	if (isUsingCustomIcon === true && markersJsonGlobal !== null && markersJsonGlobal[markerId] !== undefined && markersJsonGlobal[markerId].customMarkerIcon) {
		var customMarkerIcon = L.icon({
			iconUrl: markersJsonGlobal[markerId].customMarkerIcon,
			// shadowUrl: 'leaf-shadow.png',
		
			iconSize:     [20, 30], // size of the icon
			// shadowSize:   [50, 64], // size of the shadow
			// iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
			// shadowAnchor: [4, 62],  // the same for the shadow
			// popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});
	    var paramCustomMarkerIcon = {icon: customMarkerIcon};
		markers[markerId] = new L.marker([latitude,longitude], paramCustomMarkerIcon).bindPopup(label + '</br>').addTo(map);
	} else if (markersJsonGlobal !== null && markersJsonGlobal[markerId] !== undefined && markersJsonGlobal[markerId].fillColor) {
		var paramCustomMarkerIcon = {  
			fillColor: markersJsonGlobal[markerId].fillColor, // '#3CC1F1'
			fillOpacity: markersJsonGlobal[markerId].fillOpacity, // 1.0
			color: markersJsonGlobal[markerId].borderColor, // black
			weight: markersJsonGlobal[markerId].borderWeight,  // 0.2
			radius: markersJsonGlobal[markerId].circleRadius, // 2000
			stroke: markersJsonGlobal[markerId].hasBorder     // true,
		}
		markers[markerId] = new L.circle([latitude,longitude], paramCustomMarkerIcon).bindPopup(label + '</br>').addTo(map);
	} else {
		var customMarkerIcon = ""
		markers[markerId] = new L.marker([latitude,longitude], paramCustomMarkerIcon).bindPopup(label + '</br>').addTo(map);
	}
	if (isUsingLabelsForMarkers[0] && isUsingLabelsForMarkers[1]) {
		var labelText = '';
        try {
            var row = window.jsonValues && window.jsonValues[Number(markerId) + 1];
            var parts = [];
            for (var i = 1; i < isUsingLabelsForMarkers.length; i++) {
                var col = isUsingLabelsForMarkers[i];
                if (col === null || col === undefined || col === '') continue;
                var colIndex = Number(col);
                if (isNaN(colIndex)) continue;
                if (row && row[colIndex] !== undefined && String(row[colIndex]).trim() !== '') {
                    parts.push(String(row[colIndex]).trim());
                }
            }
            // fallback if nothing collected
            if (parts.length === 0 && row) parts.push(String(row[2] || row[1] || row[0] || '').trim());
            labelText = parts.join(' - ');
        } catch (e) { labelText = ''; }
		if (labelText) {
			markers[markerId].bindTooltip(labelText, {
				permanent: true,
				direction: 'right',
				offset: [8, 0],
				className: 'marker-label'
			});
		}
		(function insertMarkerLabelStyle(){
    	if (document.getElementById('marker-label-style')) return;
			var css = `
			.leaflet-tooltip.marker-label, .marker-label {
			border: none !important;
			box-shadow: none !important;
			color: #000 !important;
			padding: 0 6px !important;
			white-space: nowrap;
			pointer-events: none;
			font-size: 13px;
			line-height: 1;
			text-shadow: none !important;
			}
			.leaflet-tooltip.marker-label::before, .marker-label::before {
			display: none !important;
			}
			`;
			var style = document.createElement('style');
			style.id = 'marker-label-style';
			style.type = 'text/css';
			style.appendChild(document.createTextNode(css));
			document.head.appendChild(style);
		})();
	}
}

function hidePoint(markerId) {
	markers[markerId]._icon.style.display = "none"
	markers[markerId]._shadow.style.display = "none"
}

function hideTmpPolygonPoint(markerId) {
	tmpMarkers[markerId]._icon.style.display = "none"
	tmpMarkers[markerId]._shadow.style.display = "none"
}

function showPoint(markerId) {
	markers[markerId]._icon.style.display = ""
	markers[markerId]._shadow.style.display = ""
}

function highlightClickedPolygon(evt) {
	 if (document.getElementById('selectMapPinPointAction').value == 4) {
		let evtPolygonId = evt.target.polygonId
		currentClickedPolygon = evtPolygonId
		currentClickedPolygonLabel = evt.target.polygonLabel
		let fillOpacity = 'fill-opacity'
		let allPolygons = document.getElementById(evtPolygonId).parentNode.children 
		for (var i = 0; i < allPolygons.length; i++) {
			allPolygons[i].setAttribute(fillOpacity,0.2)
		}
		document.getElementById(evtPolygonId).setAttribute(fillOpacity,0.8)
	}
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

function addIdsAndClassesToPolygonsTooltips() {
	var tooltips = document.getElementsByClassName('leaflet-tooltip-pane')[0].children;
    for (var iToolTips = 0; iToolTips < tooltips.length ; iToolTips++) {
        let lower_case_snake_case_polygon_tooltip = tooltips[iToolTips].innerText.toLowerCase().replaceAll(' ','_').replaceAll('(','').replaceAll(')','')+'_tooltip'
		tooltips[iToolTips].setAttribute('id',lower_case_snake_case_polygon_tooltip) 
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
	var polygonsSelect = document.querySelectorAll("path:not(.leaflet-marker)");
	for (var iPolygons = 0; iPolygons < polygonsSelect.length ; iPolygons++) {
		polygonsSelect[iPolygons].style.display= 'none';
	}
}

function withRegions() {
	var tooltips = document.getElementsByClassName('leaflet-tooltip-pane')[0].children;
	for (var iToolTips = 0; iToolTips < tooltips.length ; iToolTips++) {
		tooltips[iToolTips].style.display= '';
	}
	var polygonsSelect = document.querySelectorAll("path:not(.leaflet-marker)");
	for (var iPolygons = 0; iPolygons < polygonsSelect.length ; iPolygons++) {
		polygonsSelect[iPolygons].style.display= '';
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

function tileMapBlank() {
	tileMapLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png')
	document.getElementById('selectedLayerMap').setAttribute('value', 'Blank');
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
	document.getElementById('pinPointsPolygonButton').disabled = true
	document.getElementById('pinPointsDeletePolygon').disabled = true

	if (selectMapPinPointAction == 1 || selectMapPinPointAction == 2 || selectMapPinPointAction == 4)
	{
		document.getElementById('map_research').style.cursor = "pointer";
	} else {
		document.getElementById('map_research').style.cursor = "";
	}
	if (selectMapPinPointAction == 1 || selectMapPinPointAction == 3 || selectMapPinPointAction == 5) {
		document.getElementById('inputCreatedAssociationPinPointToIdLabel').style.display = '';
		document.getElementById('inputCreatedAssociationPinPointToId').style.display = '';
	} else {
		document.getElementById('inputCreatedAssociationPinPointToId').style.display = 'none';
		document.getElementById('inputCreatedAssociationPinPointToIdLabel').style.display = 'none';
	}
	if (selectMapPinPointAction == 3) {
		document.getElementById('pinPointDeleteButton').disabled = false
		document.getElementById('pinPointSaveButton').disabled = true
		document.getElementById('pinPointsDeletePolygon').disabled = true
		document.getElementById('pinSaveStyle').disabled = true
	} else if (selectMapPinPointAction == 4) {
		document.getElementById('pinPointDeleteButton').disabled = true
		document.getElementById('pinPointSaveButton').disabled = true
		document.getElementById('pinPointsDeletePolygon').disabled = false
		document.getElementById('pinSaveStyle').disabled = true
	} else if (selectMapPinPointAction == 5) {
		document.getElementById('pinPointDeleteButton').disabled = true
		document.getElementById('pinPointSaveButton').disabled = true
		document.getElementById('pinPointsDeletePolygon').disabled = true
		document.getElementById('pinSaveStyle').disabled = false
	} else {
		document.getElementById('pinPointDeleteButton').disabled = true
		document.getElementById('pinPointSaveButton').disabled = false
		document.getElementById('pinPointsDeletePolygon').disabled = true
		document.getElementById('pinSaveStyle').disabled = true
	}
	if (selectMapPinPointAction == 2) {
		document.getElementById('inputPolygonColor').style.display = '';
		document.getElementById('inputPolygonColorLabel').style.display = '';
		document.getElementById('inputPolygonTooltip').style.display = '';
		document.getElementById('inputPolygonTooltipLabel').style.display = '';
		document.getElementById('inputSavedPinPointsPolygons').style.display = '';
		document.getElementById('inputSavedPinPointsPolygonsLabel').style.display = '';
        if (document.getElementById('inputSavedPinPoints').value !== "") {
			document.getElementById('pinPointDeleteButton').disabled = false;
		}
	} else if (selectMapPinPointAction == 5) {
		if (isUsingCustomIcon === true && markersJsonGlobal[0].customMarkerIcon) {
			document.getElementById('inputPointStyleCustomMarkerIconLabel').style = '';
			document.getElementById('inputPointStyleCustomMarkerIcon').style = '';
			var pointId = document.getElementById('inputCreatedAssociationPinPointToId').value;
			if (markersJsonGlobal !== null && markersJsonGlobal[pointId] !== undefined) {
				document.getElementById('inputPointStyleCustomMarkerIcon').value = markersJsonGlobal[pointId].customMarkerIcon ? markersJsonGlobal[pointId].customMarkerIcon : '';
			} else {
				document.getElementById('inputPointStyleCustomMarkerIcon').value = ''
			}
		} else {
			document.getElementById('inputPointStyleRadiusLabel').style.display = '';
			document.getElementById('inputPointStyleRadius').style.display = '';
			document.getElementById('inputPointStyleFillColorLabel').style.display = '';
			document.getElementById('inputPointStyleFillColor').style.display = '';
			document.getElementById('inputPointStyleOpacityLabel').style.display = '';
			document.getElementById('inputPointStyleOpacity').style.display = '';
			document.getElementById('inputPointStyleBorderColorLabel').style.display = '';
			document.getElementById('inputPointStyleBorderColor').style.display = '';
			document.getElementById('inputPointStyleBorderWeightLabel').style.display = '';
			document.getElementById('inputPointStyleBorderWeight').style.display = '';
			document.getElementById('inputPointStyleHasBorderLabel').style.display = '';
			document.getElementById('inputPointStyleHasBorder').style.display = '';
			var pointId = document.getElementById('inputCreatedAssociationPinPointToId').value;
			if (markersJsonGlobal !== null && markersJsonGlobal[pointId] !== undefined) {
				document.getElementById('inputPointStyleRadius').value = markersJsonGlobal[pointId].circleRadius ? markersJsonGlobal[pointId].circleRadius : '';
				document.getElementById('inputPointStyleFillColor').value = markersJsonGlobal[pointId].fillColor ? markersJsonGlobal[pointId].fillColor : '';
				document.getElementById('inputPointStyleOpacity').value = markersJsonGlobal[pointId].fillOpacity ? markersJsonGlobal[pointId].fillOpacity : '';
				document.getElementById('inputPointStyleBorderColor').value = markersJsonGlobal[pointId].borderColor ? markersJsonGlobal[pointId].borderColor : '';
				document.getElementById('inputPointStyleBorderWeight').value = markersJsonGlobal[pointId].borderWeight ? markersJsonGlobal[pointId].borderWeight : '';
				document.getElementById('inputPointStyleHasBorder').value = markersJsonGlobal[pointId].hasBorder ? markersJsonGlobal[pointId].hasBorder : '';
			} else {
				document.getElementById('inputPointStyleRadius').value = ''
				document.getElementById('inputPointStyleFillColor').value = ''
				document.getElementById('inputPointStyleOpacity').value = ''
				document.getElementById('inputPointStyleBorderColor').value = ''
				document.getElementById('inputPointStyleBorderWeight').value = ''
				document.getElementById('inputPointStyleHasBorder').value = ''
			}
			if (document.getElementById('inputSavedPinPoints').value !== "") {
				document.getElementById('pinPointDeleteButton').disabled = false;
			}
		}
	} else {
		document.getElementById('inputPolygonColor').style.display = 'none';
		document.getElementById('inputPolygonColorLabel').style.display = 'none';
		document.getElementById('inputPolygonTooltip').style.display = 'none';
		document.getElementById('inputPolygonTooltipLabel').style.display = 'none';
		document.getElementById('inputSavedPinPointsPolygons').style.display = 'none';
		document.getElementById('inputSavedPinPointsPolygonsLabel').style.display = 'none';
		document.getElementById('inputPointStyleRadiusLabel').style.display = 'none';
		document.getElementById('inputPointStyleRadius').style.display = 'none';
		document.getElementById('inputPointStyleFillColorLabel').style.display = 'none';
		document.getElementById('inputPointStyleFillColor').style.display = 'none';
		document.getElementById('inputPointStyleOpacityLabel').style.display = 'none';
		document.getElementById('inputPointStyleOpacity').style.display = 'none';
		document.getElementById('inputPointStyleBorderColorLabel').style.display = 'none';
		document.getElementById('inputPointStyleBorderColor').style.display = 'none';
		document.getElementById('inputPointStyleBorderWeightLabel').style.display = 'none';
		document.getElementById('inputPointStyleBorderWeight').style.display = 'none';
		document.getElementById('inputPointStyleHasBorderLabel').style.display = 'none';
		document.getElementById('inputPointStyleHasBorder').style.display = 'none';
		document.getElementById('inputPointStyleCustomMarkerIconLabel').style.display = 'none';
		document.getElementById('inputPointStyleCustomMarkerIcon').style.display = 'none';
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
