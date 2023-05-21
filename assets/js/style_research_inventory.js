    var map = new L.map('map_research'
	).setView([40.421190, 15.005673], 4);
    mapLink =
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' <a href="https://zanniadevweb.github.io/portfolio_zanni/">- Customized by Alexandre Zanni</a>',
				maxNativeZoom:19,
        maxZoom: 25,
        }).addTo(map);

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

		function saveCurrPinPoint() {
			if (document.getElementById('pinPointButton').disabled == false) {
				allSavedPopLocation.push(currPopLocation);
				document.getElementById('inputSavedPinPoints').value = ''
				document.getElementById('inputSavedPinPoints').value = allSavedPopLocation.slice(-1);
				var marker = new L.marker([currPopLocation.lat,currPopLocation.lng]).addTo(map);
				var selectMapPinPointAction = document.getElementById('selectMapPinPointAction').value

				if (selectMapPinPointAction == 1) {
					if (document.getElementById('inputSavedPinPoints').value.slice(-1) !== '') {
						var idToSearch = document.getElementById('inputCreatedAssociationPinPointToId').value;
						var table = '';
						table = document.getElementById("tableResearchInventory");
						var trValues = '';
						trValues = table.getElementsByTagName("tbody")[0].rows;
						currTrValue = trValues[idToSearch];
						currTrValue.lastChild.previousSibling.innerHTML = currPopLocation.lat // LATITUDE
						currTrValue.lastChild.innerHTML = currPopLocation.lng // LONGITUDE
					}
				} else if (selectMapPinPointAction == 2) {
					var tmpSavedPinPointValue = '';

					if (document.getElementById('inputSavedPinPoints').value !== '') {
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

		function saveCurrPinPointsPolygon() {
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

		document.addEventListener("DOMContentLoaded", () => {
				map.on('click', function(e) {
					var selectMapPinPointAction = document.getElementById('selectMapPinPointAction').value
					if (selectMapPinPointAction == 1 || selectMapPinPointAction == 2)
					{
						var popLocation = e.latlng;
						document.getElementById('inputCreatedPinPoint').value = popLocation
						currPopLocation = popLocation;
						document.getElementById('pinPointButton').disabled = false;
						var popup = L.popup().setLatLng(popLocation).setContent('Mon nouveau point').openOn(map);
					}
				});
		});

		function zoomOnMapPoint(currentPlaneElement) {
			coordinatesZoomOn = currentPlaneElement.getAttribute('value').split(',');
			coordinateZoomOnX = coordinatesZoomOn[1];
			coordinateZoomOnY = coordinatesZoomOn[0];
			map.setView([coordinateZoomOnX, coordinateZoomOnY], 18);
		}

		function removeValueList(list, separator) {
			var separatedValues = list.split(separator);
			return separatedValues.splice(6).join(separator)
		}
