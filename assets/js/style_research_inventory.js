    var map = new L.map('map_research'
	).setView(startingViewLatLng, startingViewZoom);
    mapLink =
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    mapLayer = L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' <a href="https://github.com/zanniadevweb/cms_r-lite-web-gis">- Customized by Alexandre Zanni</a>',
				maxNativeZoom:19,
        maxZoom: 19,
        noWrap: true
    }).addTo(map)

		var labelPlanes = [];
		var label = '';
		var latitude = '';
		var longitude = '';
		var table = '';
		var trValues = '';
		var tableValues = [];
		var trVal = '';
		var tableValueEquivalent = '';
		var tmpIdTable = '';
		var realIdTable = '';
		var realIdTableForLoop = '';

		var currPopLocation = '';
		var allSavedPopLocation = [];
		var tmpMarkers = [];
		var iteratorPolygon = 0;

		function saveCurrPinPoint() {
			if (document.getElementById('pinPointSaveButton').disabled == false) {
				iteratorPolygon++;
				allSavedPopLocation.push(currPopLocation);
				document.getElementById('inputSavedPinPoints').value = ''
				document.getElementById('inputSavedPinPoints').value = allSavedPopLocation.slice(-1);
				var selectMapPinPointAction = document.getElementById('selectMapPinPointAction').value

				if (selectMapPinPointAction == 1) {
					if (document.getElementById('inputSavedPinPoints').value.slice(-1) !== '') {
						new L.marker([currPopLocation.lat,currPopLocation.lng]).addTo(map);
						var idToSearch = document.getElementById('inputCreatedAssociationPinPointToId').value;
						replaceLatAndLng(idToSearch, currPopLocation.lat, currPopLocation.lng)
						mapActionsAfterFinishLoadingFile(); // TODO
					}
				} else if (selectMapPinPointAction == 2) {
					if (document.getElementById('inputSavedPinPointsPolygons').value === "") {
						document.getElementById('pinPointDeleteButton').disabled = true;
						document.getElementById('pinPointsPolygonButton').disabled = true;
					}
					if (document.getElementById('inputSavedPinPoints').value !== '') {
						tmpMarkers[iteratorPolygon] = new L.marker([currPopLocation.lat,currPopLocation.lng]).addTo(map);
						tmpMarkers = tmpMarkers.filter(item => item)
						document.getElementById('pinPointDeleteButton').disabled = false;
						tmpSavedPinPointsPolygonsVal = document.getElementById('inputSavedPinPointsPolygons').value;
						document.getElementById('pinPointsPolygonButton').disabled = false;

						if (tmpSavedPinPointsPolygonsVal !== '') {
							document.getElementById('inputSavedPinPointsPolygons').value = tmpSavedPinPointsPolygonsVal + ',' + '['+currPopLocation.lat+','+currPopLocation.lng+']';
						} else {
							document.getElementById('inputSavedPinPointsPolygons').value = '['+currPopLocation.lat+','+currPopLocation.lng+']';
						}
					}
				}
			}
		}

		function deleteCurrPinPoint() {
			if (document.getElementById('pinPointDeleteButton').disabled === false) {
				var selectMapPinPointAction = document.getElementById('selectMapPinPointAction').value
				if (selectMapPinPointAction == 2) {
					if (document.getElementById('inputSavedPinPointsPolygons').value === "") {
						document.getElementById('pinPointDeleteButton').disabled = true;
						document.getElementById('pinPointsPolygonButton').disabled = true;
					} else {	
						hideTmpPolygonPoint(tmpMarkers.length-1)
						if (tmpMarkers.length === 1) {
							document.getElementById('inputSavedPinPointsPolygons').value = ""
							tmpMarkers = []
						} else {
							tmpMarkers.pop()
							tmpMarkers = tmpMarkers.filter(item => item)
							tmpPolygonValues = document.getElementById('inputSavedPinPointsPolygons').value.split('],[').filter(item => item)
							lastPolygonValue = tmpPolygonValues.pop()
							tmpPolygonValues[lastPolygonValue] = ''
							newPolygonValues = tmpPolygonValues.filter(item => item)
							if (newPolygonValues.length > 0) {
								document.getElementById('inputSavedPinPointsPolygons').value = newPolygonValues.join('],[')+(']')
							} else {
								document.getElementById('inputSavedPinPointsPolygons').value = ""
							}
						}
					}
					if (document.getElementById('inputSavedPinPointsPolygons').value === "") {
						document.getElementById('pinPointDeleteButton').disabled = true;
						document.getElementById('pinPointsPolygonButton').disabled = true;
					}
				} else if (selectMapPinPointAction == 3) {
					var idToSearch = document.getElementById('inputCreatedAssociationPinPointToId').value;
					if (confirm('Click OK to confirm DELETE of ID: '+idToSearch)) {
						replaceLatAndLng(idToSearch, "", "")
				    	hidePoint(idToSearch)
				    }
				}
			}
		}

		function replaceLatAndLng(idToSearch, newLat, newLng) {
			var table = '';
			table = document.getElementById("tableResearchInventory");
			var trValues = '';
			trValues = table.getElementsByTagName("tbody")[0].rows;
			currTrValue = trValues[idToSearch];
			currTrValue.lastChild.previousSibling.innerHTML = newLat // LATITUDE
			currTrValue.lastChild.innerHTML = newLng // LONGITUDE
		}

		function saveCurrPinPointsPolygon() {
			for (var itTmpMarker=0; itTmpMarker < tmpMarkers.length; itTmpMarker++) {
				hideTmpPolygonPoint(itTmpMarker)
			}
			iteratorPolygon = 0;
			tmpMarkers = [];
			var defaultPolygonColor = '#0000FF';
			if (document.getElementById('inputPolygonColor').value !== '') {
				defaultPolygonColor = '#' + document.getElementById('inputPolygonColor').value;
			}
			var defaultPolygonTooltip = 'Default Polygon Label';
			if (document.getElementById('inputPolygonTooltip').value !== '') {
				defaultPolygonTooltip = '"' + document.getElementById('inputPolygonTooltip').value + '"';
			}
			var currValueTmpFilePolygonContent = '';
			currValueTmpFilePolygonContent = document.getElementById('tmpFilePolygonsContent').value;
			if (document.getElementById('inputSavedPinPointsPolygons').value !== "") {
				document.getElementById('tmpFilePolygonsContent').value =
				currValueTmpFilePolygonContent
				+
				'|' +
				'(' + document.getElementById('inputSavedPinPointsPolygons').value + ')' +
				'.color('+defaultPolygonColor+')' +
				'.tooltip('+defaultPolygonTooltip+')'
				;
				document.getElementById('inputSavedPinPointsPolygons').value = '';
			}
			document.getElementById('pinPointDeleteButton').disabled = true;
			document.getElementById('pinPointsPolygonButton').disabled = true;
		}

		function deleteCurrPolygon() {
			if (currentClickedPolygon !== "") {
				if (confirm('Click OK to confirm DELETE of ID: '+currentClickedPolygonLabel)) {
					document.getElementById(currentClickedPolygon).remove();
					document.getElementById(currentClickedPolygon+'_tooltip').remove();
					tmpPolyValuesDelete = document.getElementById('tmpFilePolygonsContent').value.split('|')
					for (var iPolDel = 0; iPolDel < tmpPolyValuesDelete.length ; iPolDel++) {
						if (tmpPolyValuesDelete[iPolDel].includes(currentClickedPolygonLabel)){
							tmpPolyValuesDelete[iPolDel] = ""
						}
					}
					tmpPolyValuesDelete = tmpPolyValuesDelete.filter(item => item)
					tmpPolyValuesDelete = tmpPolyValuesDelete.join('|')
					document.getElementById('tmpFilePolygonsContent').value = tmpPolyValuesDelete
					currentClickedPolygon = ""
					currentClickedPolygonLabel = ""
				}
			}
		}

		document.addEventListener("DOMContentLoaded", () => {
				map.on('click', function(e) {
					var selectMapPinPointAction = document.getElementById('selectMapPinPointAction').value
					if (selectMapPinPointAction == 1 || selectMapPinPointAction == 2)
					{
						var popLocation = e.latlng;
						document.getElementById('inputCreatedPinPoint').value = popLocation
						currPopLocation = popLocation;
						document.getElementById('pinPointSaveButton').disabled = false;
						var popup = L.popup().setLatLng(popLocation).setContent('Mon nouveau point').openOn(map);
					}
				});
		});

		function zoomOnMapPoint(currentPlaneElement) {
			coordinatesZoomOn = currentPlaneElement.getAttribute('value').split(',');
			coordinateZoomOnX = coordinatesZoomOn[0];
			coordinateZoomOnY = (coordinatesZoomOn[1].split('('))[0];
			map.setView([coordinateZoomOnX, coordinateZoomOnY], 18);
		}

		function removeValueList(list, separator) {
			var separatedValues = list.split(separator);
			return separatedValues.splice(6).join(separator)
		}
