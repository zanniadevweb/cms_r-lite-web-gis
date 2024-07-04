var csvSeparatorChar = ';';

var fixtureCSVTemplate =
`Header 1;Header 2;Header 3;Latitude;Longitude
Value 1 Line 1;Value 2 Line 1;Value 3 Line 1;48.79394;2.3848870
Value 1 Line 2;Value 2 Line 2;Value 3 Line 2;51.473379;-0.129398
`;

var fixturePolygonsTemplate = `([35.274292, 23.501476],[35.708851, 23.580879],[35.316642, 26.338725],[34.994183, 26.236009],[34.899905, 24.718213],[35.066643, 24.737697]).color('#f5f542').tooltip("Crete")`;
var fixtureExportHtml = `
		<link rel='stylesheet' href='https://unpkg.com/leaflet@1.9.3/dist/leaflet.css' integrity='sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=' crossorigin=''/>
		<script src='https://unpkg.com/leaflet@1.9.3/dist/leaflet.js' integrity='sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=' crossorigin=''></script>
		<div id='map' style='width: 100%; height: 100%; font-size: 25px; margin: 0; border-radius: 0px; border: 2px solid #3c546b;'></div>
		<script>
			var map = L.map('map').setView([40.421190, 15.005673], 4);

			new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://github.com/zanniadevweb/cms_r-lite-web-gis">- Customized by Alexandre Zanni</a>'
			}).addTo(map);

			new L.marker([51.5, -0.09]).addTo(map)
			.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
			.openPopup();

			new L.polygon([[51.505, -0.09],[52.505, -0.19]])
			.setStyle({fillColor: '#A020F0', color: '#A020F0'})
			.addTo(map)
			.bindTooltip("My Polygon", {permanent: true, direction:"center"});
		</script>
`;

var fixtureExportHtmlTemplate = `
		<link rel='stylesheet' href='https://unpkg.com/leaflet@1.9.3/dist/leaflet.css' integrity='sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=' crossorigin=''/>
		<script src='https://unpkg.com/leaflet@1.9.3/dist/leaflet.js' integrity='sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=' crossorigin=''></script>
		<div id='map' style='width: 100%; height: 100%; font-size: 25px; margin: 0; border-radius: 0px; border: 2px solid #3c546b;'></div>
`;

var fixtureKML = `
	<kml xmlns='http://www.opengis.net/kml/2.2' xmlns:gx='http://www.google.com/kml/ext/2.2' xmlns:kml='http://www.opengis.net/kml/2.2' xmlns:atom='http://www.w3.org/2005/Atom'>
	<Document>
		<name>Mes lieux préférés.kml</name>
		<StyleMap id='m_ylw-pushpin'>
			<Pair>
				<key>normal</key>
				<styleUrl>#s_ylw-pushpin</styleUrl>
			</Pair>
			<Pair>
				<key>highlight</key>
				<styleUrl>#s_ylw-pushpin_hl</styleUrl>
			</Pair>
		</StyleMap>
		<Style id='s_ylw-pushpin_hl'>
			<IconStyle>
				<scale>1.3</scale>
				<Icon>
					<href>http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png</href>
				</Icon>
				<hotSpot x='20' y='2' xunits='pixels' yunits='pixels'/>
			</IconStyle>
		</Style>
		<Style id='s_ylw-pushpin'>
			<IconStyle>
				<scale>1.1</scale>
				<Icon>
					<href>http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png</href>
				</Icon>
				<hotSpot x='20' y='2' xunits='pixels' yunits='pixels'/>
			</IconStyle>
		</Style>
		<Folder>
			<name>Mes lieux préférés</name>
			<open>1</open>
			<Style>
				<ListStyle>
					<listItemType>check</listItemType>
					<ItemIcon>
						<state>open</state>
						<href>:/mysavedplaces_open.png</href>
					</ItemIcon>
					<ItemIcon>
						<state>closed</state>
						<href>:/mysavedplaces_closed.png</href>
					</ItemIcon>
					<bgColor>00ffffff</bgColor>
					<maxSnippetLines>2</maxSnippetLines>
				</ListStyle>
			</Style>
			<Placemark>
				<name>LABEL_GIS_VARIABLE</name>
				<description>DESCRIPTION_GIS_VARIABLE</description>
				<Camera>
					<longitude>LONGITUDE_GIS_VARIABLE</longitude>
					<latitude>LATITUDE_GIS_VARIABLE</latitude>
					<altitude>124138.0803432923</altitude>
					<heading>-22.51776447142607</heading>
					<tilt>3.074765506406226</tilt>
					<roll>-6.455260086377161</roll>
					<gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode>
				</Camera>
				<styleUrl>#m_ylw-pushpin</styleUrl>
				<Point>
					<gx:drawOrder>INCREMENT_ORDER_GIS_VARIABLE</gx:drawOrder>
					<coordinates>LONGITUDE_GIS_VARIABLE,LATITUDE_GIS_VARIABLE,0</coordinates>
				</Point>
			</Placemark>
		</Folder>
	</Document>
	</kml>
`;

var fixtureKMLTemplateBegin = `
	<kml xmlns='http://www.opengis.net/kml/2.2' xmlns:gx='http://www.google.com/kml/ext/2.2' xmlns:kml='http://www.opengis.net/kml/2.2' xmlns:atom='http://www.w3.org/2005/Atom'>
	<Document>
		<name>Mes lieux préférés.kml</name>
		<StyleMap id='m_ylw-pushpin'>
			<Pair>
				<key>normal</key>
				<styleUrl>#s_ylw-pushpin</styleUrl>
			</Pair>
			<Pair>
				<key>highlight</key>
				<styleUrl>#s_ylw-pushpin_hl</styleUrl>
			</Pair>
		</StyleMap>
		<Style id='s_ylw-pushpin_hl'>
			<IconStyle>
				<scale>1.3</scale>
				<Icon>
					<href>http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png</href>
				</Icon>
				<hotSpot x='20' y='2' xunits='pixels' yunits='pixels'/>
			</IconStyle>
		</Style>
		<Style id='s_ylw-pushpin'>
			<IconStyle>
				<scale>1.1</scale>
				<Icon>
					<href>http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png</href>
				</Icon>
				<hotSpot x='20' y='2' xunits='pixels' yunits='pixels'/>
			</IconStyle>
		</Style>
		<Folder>
			<name>Mes lieux préférés</name>
			<open>1</open>
			<Style>
				<ListStyle>
					<listItemType>check</listItemType>
					<ItemIcon>
						<state>open</state>
						<href>:/mysavedplaces_open.png</href>
					</ItemIcon>
					<ItemIcon>
						<state>closed</state>
						<href>:/mysavedplaces_closed.png</href>
					</ItemIcon>
					<bgColor>00ffffff</bgColor>
					<maxSnippetLines>2</maxSnippetLines>
				</ListStyle>
			</Style>
`;

var fixtureKMLTemplatePlacemark = `
			<Placemark>
				<name>LABEL_GIS_VARIABLE</name>
				<description>DESCRIPTION_GIS_VARIABLE</description>
				<Camera>
					<longitude>LONGITUDE_GIS_VARIABLE</longitude>
					<latitude>LATITUDE_GIS_VARIABLE</latitude>
					<altitude>124138.0803432923</altitude>
					<heading>-22.51776447142607</heading>
					<tilt>3.074765506406226</tilt>
					<roll>-6.455260086377161</roll>
					<gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode>
				</Camera>
				<styleUrl>#m_ylw-pushpin</styleUrl>
				<Point>
					<gx:drawOrder>INCREMENT_ORDER_GIS_VARIABLE</gx:drawOrder>
					<coordinates>LONGITUDE_GIS_VARIABLE,LATITUDE_GIS_VARIABLE,0</coordinates>
				</Point>
			</Placemark>
`;

var fixtureKMLTemplateEnd = `
		</Folder>
	</Document>
	</kml>
`;

csvValues = [];

function mapActionsAfterFinishLoadingFile() {
		synchronizeMap();
		document.getElementById('optionCreatePoint').style = '';
		document.getElementById('inputCreatedAssociationPinPointToId').value = '0'
		document.getElementById('fileButton').disabled = false
		document.getElementById('filePolygonsInput').disabled = false
		document.getElementById('polygonsTemplateButton').disabled = false
}

function loadCsvContentIntoPage()
{
	var fileInput = document.getElementById('tmpFileContent').value;
	var inputToRead = fileInput;
	var csvContent = [];

	csvContent = inputToRead.split('|');
	var numberColumns = csvContent[0].split(csvSeparatorChar).length;
	var subArrayLine = [];
	var id = 0;
	var separatedValuesOneLine = [];


	csvValues = [];
	for (var it=0; it <= csvContent.length; it++) {
		if (csvContent[it] !== csvSeparatorChar && csvContent[it] !== undefined) {
			separatedValuesOneLine = csvContent[it].split(csvSeparatorChar);
			if (it == 0) {
				separatedValuesOneLine.unshift('ID');
			} else if (it > 0) {
				separatedValuesOneLine[0] = String(id);
				id++;
			}
			subArrayLine.push(separatedValuesOneLine);
			csvValues.push(subArrayLine[0]);
			subArrayLine = [];
		} else {
			break;
		}
	}

	importArrayIntoTable(csvValues, 'tableResearchInventory');
	mapActionsAfterFinishLoadingFile();
}

function readFile(input) {
	var fileContent = '';
	var fileContentSeparatedLines = [];
	var newFileContentSeparatedLines = [];
	var fileContentLinesAsString = '';
	let file = input.files[0];

	let reader = new FileReader();

	reader.readAsText(file, 'UTF-8'); // Ne pas utiliser : 'ISO-8859-1' => Mauvais encodage diacritiques

	reader.onload = function() {
		fileContent = reader.result

		fileContentSeparatedLines = fileContent.split('\n');
		if (!(fileContentSeparatedLines[0].includes('\r'))) {
			for (var fileReadIt = 0; fileReadIt < fileContentSeparatedLines.length; fileReadIt++) {
					newFileContentSeparatedLines.push(fileContentSeparatedLines[fileReadIt] + '\r');
			}
		} else {
			newFileContentSeparatedLines = fileContentSeparatedLines;
		}
		fileContentLinesAsString = newFileContentSeparatedLines.join(csvSeparatorChar).replaceAll('\r','|');
		document.getElementById('tmpFileContent').value = fileContentLinesAsString;
		loadCsvContentIntoPage();
		allowsExportForWeb();
	};

	reader.onerror = function() {
		console.log(reader.error);
	};
}

function readFilePolygons(input) {
	var filePolygonsContent = '';
	var fileContentPolygonsLinesAsString = '';
	let file = input.files[0];

	let reader = new FileReader();

	reader.readAsText(file, 'UTF-8'); // Ne pas utiliser : 'ISO-8859-1' => Mauvais encodage diacritiques

	reader.onload = function() {
		filePolygonsContent = reader.result

		fileContentPolygonsLinesAsString = filePolygonsContent.replaceAll('\r','|');
		document.getElementById('tmpFilePolygonsContent').value = fileContentPolygonsLinesAsString;
		if (document.getElementById('tmpFilePolygonsContent').value !== '') {
			fillPolygons();
		}
	};

	reader.onerror = function() {
		console.log(reader.error);
	};
}

function importArrayIntoTable(list, tableId) {
	var cols = [];

	for (var i = 0; i < list.length; i++) {
		for (var k in list[i]) {
			if (cols.indexOf(k) === -1) {
				cols.push(k);
			}
		}
	}

	// Create a table element
	var table = document.createElement("table");
	table.setAttribute("class", "sortable");
	table.setAttribute("id", "tableData");

	// Create theader
	var thead = document.createElement("thead");
	var tr = table.appendChild(thead);
	var selectFilterAction = document.getElementById("selectFilterActionTable");
	var options = [];
	var hasLat = false;
	var hasLng = false;
	var hasLatAndLngCols = false;

	for (var i = 0; i < cols.length; i++) {
		var theader = document.createElement("th");
		theader.innerHTML = list[0][i];
		var optionSelectFilterAction = new Option(theader.innerHTML, i);
		selectFilterAction.appendChild(optionSelectFilterAction);
		if (list[0][i] === 'Latitude') {
			hasLat = true;
		}
		if (list[0][i] === 'Longitude') {
			hasLng = true;
		}

		tr.appendChild(theader);
	}
	if (hasLat && hasLng) {
		hasLatAndLngCols = true;
	}
	if (!hasLatAndLngCols) {
		var theaderLat = document.createElement("th");
		theaderLat.innerHTML = 'Latitude';
		tr.appendChild(theaderLat);
		var theaderLng = document.createElement("th");
		theaderLng.innerHTML = 'Longitude';
		tr.appendChild(theaderLng);
		cols.length = cols.length+2
	}

	for (var i = 1; i < list.length; i++) {
		trow = table.insertRow(-1);
		for (var j = 0; j < cols.length; j++) {
			var cell = trow.insertCell(-1);
			var currValue = list[i][cols[j]]
			if (currValue === undefined) {
				cell.innerHTML = '';
			} else {
				if (currValue.startsWith('https') &&
					(currValue.includes('.jpg') || currValue.includes('.JPG') ||
					currValue.includes('.png') || currValue.includes('.PNG') ||
					currValue.includes('.svg') || currValue.includes('.SVG') ||
					currValue.includes('.jpeg') || currValue.includes('.JPEG'))
				) {
					var imgLink = currValue;
					currValue = '<a href='+currValue+' target="_blank"><img src='+currValue+' style=\'max-width:100px;\'></a>' // TODO
				}
				cell.innerHTML = currValue;
			}
		}
	}

	var el = document.getElementById(tableId);
	el.innerHTML = "";
	el.appendChild(table);
	// document.getElementById('tableData').innerHTML = ''; // TODO
}

// ---------------- SAVE FILE BUTTON ACTIONS --------------
	const download = function (data, nameFile = 'result', blobFileFormat = 'text/csv', fileExtension = '.csv') {
			// Creating a Blob for having a csv file format
			// and passing the data with type
			const blob = new Blob([data], { type: blobFileFormat });
			// Creating an object for downloading url
			const url = window.URL.createObjectURL(blob)
			// Creating an anchor(a) tag of HTML
			const a = document.createElement('a')
			// Passing the blob downloading url
			a.setAttribute('href', url)
			// Setting the anchor tag attribute for downloading
			// and passing the download file name
			a.setAttribute('download', nameFile + fileExtension);
			// Performing a download with click
			a.click()
	}

	const csvmaker = function (data) {
			csvRows = [];
			csvRows.push(data)
			return csvRows.join('\n')
	}

	var table = '';
	var trValues = '';
	var tableValues = [];
	var trVal = '';
	var tmpIdTable = '';
	var realIdTable = '';
	var tableToCsvValues = [];
	var tableChildCellOneLine = [];
	var tableOneLine = [];
	var trHeadersStr = '';
	var trHeadersValues = [];
	var singleHeaderValues = [];
	const get = async function () {
			table = document.getElementById("tableResearchInventory");
			trHeadersStr = document.getElementById("tableResearchInventory").getElementsByTagName("thead")[0].outerHTML;
			trHeadersValues.push(trHeadersStr.replace('<th>','').replace('<thead>','').replace('</thead>','').split('</th>'))
			if (table !== undefined && table.getElementsByTagName("tbody")[0] !== undefined) {
					trValues = table.getElementsByTagName("tbody")[0].rows;
					for (var k = 0; k < trValues.length; k++) {
						tableChildCellOneLine = trValues[k].children
						for (var childCell = 0; childCell < tableChildCellOneLine.length; childCell++) {
							strChildCellValue = tableChildCellOneLine[childCell].innerHTML;
							if (strChildCellValue.startsWith('<a href=')) {
								strChildCellValue = strChildCellValue.split('href=')[1].split('>')[0].replaceAll('"','');
							}
							tableOneLine.push(strChildCellValue)
						}
						childCell = 0
						tableOneLine.shift();
						tableToCsvValues.push(tableOneLine.join(csvSeparatorChar) + '\\r');
						tableOneLine = [];
					}
				var data =  '';
				var currHeader = '';
				var currLine = 0;
				var cleanHeaders = []
				for (var objIt = 0; objIt < trHeadersValues.length; objIt++) {
					if (trHeadersValues[objIt] !== undefined) {
						for (var arrIt = 0; arrIt < trHeadersValues[objIt].length; arrIt++) {
							currHeader = trHeadersValues[objIt][arrIt].replace('<th>','');
							if (currHeader !== 'ID' && currHeader !== '') {
								cleanHeaders.push(currHeader)
							}
						}
					}
				}
				singleHeaderValues = (cleanHeaders.join(csvSeparatorChar) + '\\r').split();
				data = singleHeaderValues.concat(tableToCsvValues).join('').replaceAll('\\r', '\n').replaceAll('&nbsp;','').replaceAll('&amp;','')
				singleHeaderValues = [];
				trHeadersValues = [];
				currLine = 0;
				tableToCsvValues = [];
				download(data);
			}
	}

	// Getting element by id and adding
	// eventlistener to listen everytime
	// button get pressed
	const btn = document.getElementById('fileButton');
	btn.addEventListener('click', get);
// ---------------- SAVE FILE BUTTON ACTIONS --------------

function downloadCsvTemplate() {
	download(fixtureCSVTemplate, 'template');
}

function downloadPolygonsTemplate() {
	download(fixturePolygonsTemplate, 'template', 'text/plain', '.txt');
}

function downloadPolygonFile() {
	var polygonContentToFile = document.getElementById('tmpFilePolygonsContent').value.replaceAll('|','\r\n');
	download(polygonContentToFile, 'result', 'text/plain', '.txt');
}

function downloadExportForWeb() {
	var selectExportForWebAction = document.getElementById('selectExportForWebAction').value;

	if (selectExportForWebAction == 0 && htmlForExport !== '') {
		var htmlForExport = htmlContentForExport();
		download(htmlForExport, 'export', 'text/html', '.html');
	} else if (selectExportForWebAction == 1) {
		var kmlForExport = kmlContentForExport();
	  download(kmlForExport, 'export', 'text/plain', '.kml');
	}
}

function htmlContentForExport() {
	var polygonLinesForHtmlExport;
	if (document.getElementById('tmpFilePolygonsContent').value !== '') {
		polygonLinesForHtmlExport = document.getElementById('tmpFilePolygonsContent').value.split('|');
		fillPolygonsLoop(polygonLinesForHtmlExport);
	} else {
		polygonLinesForHtmlExport = '';
	}
	var tmpStringifiedGlobalPointsArray = [];
	var stringifiedGlobalPointsArray = '';
	var tmpGlobalPointValEntry = [];
	var tmpGlobalPointValResult = [];
	for (var iStringGlobalPoints = 0; iStringGlobalPoints < globalPointsArray.length; iStringGlobalPoints++) {
		tmpGlobalPointValEntry = globalPointsArray[iStringGlobalPoints];
		for (var iTmpGlobalPointVal = 0; iTmpGlobalPointVal < tmpGlobalPointValEntry.length ; iTmpGlobalPointVal++ )
		{
			tmpGlobalPointValResult.push(JSON.stringify(tmpGlobalPointValEntry[iTmpGlobalPointVal]));
		}
		tmpStringifiedGlobalPointsArray.push('[' + tmpGlobalPointValResult + ']');
		tmpGlobalPointValResult = [];
		tmpGlobalPointValEntry = [];
	}

	stringifiedGlobalPointsArray	= tmpStringifiedGlobalPointsArray.join(',');

	var selectedMapLayer = document.getElementById('selectedLayerMap').getAttribute('value');
	var chosenMapLayerSrc = ''

	if (selectedMapLayer === 'OpenTopoMap') {
		chosenMapLayer = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
	} else if (selectedMapLayer === 'Satellite') {
		chosenMapLayer = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
	} else if (selectedMapLayer === 'ReliefEsri') {
		chosenMapLayer = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
	}else {
		chosenMapLayer = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	}

	var currentZoom = map.getZoom();
	var currentLat = (map.getBounds()._northEast.lat+map.getBounds()._southWest.lat)/2
	var currentLng = (map.getBounds()._northEast.lng+map.getBounds()._southWest.lng)/2

	var tmpHtmlForExport = fixtureExportHtmlTemplate +
	'<script>' +
	`
		var map = L.map('map').setView([`+currentLat+`,`+currentLng+`], `+currentZoom+`);

		var iPointsArray = [`+stringifiedGlobalPointsArray+`];

		new L.tileLayer('${chosenMapLayer}', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://github.com/zanniadevweb/cms_r-lite-web-gis">- Customized by Alexandre Zanni</a>',
		maxNativeZoom:19,
		maxZoom: 19,
		noWrap: true
		}).addTo(map);

		for (var iPoints = 0; iPoints < iPointsArray.length; iPoints++) {
			createPoint(iPointsArray[iPoints][0],iPointsArray[iPoints][1],iPointsArray[iPoints][2]);
		}

		fillPolygons(`+JSON.stringify(polygonLinesForHtmlExport)+`);

		function fillPolygons(polygonLinesForHtmlExport) {
			if (polygonLinesForHtmlExport !== '') {
				if (polygonLinesForHtmlExport.includes('|')) {
					fillPolygonsLoop(polygonLinesForHtmlExport.split('|'));
				} else {
					fillPolygonsLoop(polygonLinesForHtmlExport);
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
					currPolyPointValues = polygonLinesFromFile[ipolygonLinesFromFile].split('.color')[0].replace('(','').replace(')','');
					currPolyPointsColor = polygonLinesFromFile[ipolygonLinesFromFile].split('.color(')[1].split(')')[0].replaceAll('\\'','');
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
			new L.polygon(polyPointsValues).setStyle({fillColor: polyPointsColor, color: polyPointsColor}).addTo(map).bindTooltip(polyPointsTooltip, {permanent: true, direction:"center"});
		}

		function createPoint(latitude, longitude, label) {
			new L.marker([latitude,longitude]).bindPopup(label + '</br>').addTo(map);
		}
	` +
	'</script>';

	return tmpHtmlForExport;
}

function kmlContentForExport() {
	var tmpKmlForExport = '';
	var tmpArrayResultPoints = [];

	for (var iPoints = 0; iPoints < globalPointsArray.length; iPoints++) {
		tmpArrayResultPoints.push(
			fixtureKMLTemplatePlacemark
			.replace('INCREMENT_ORDER_GIS_VARIABLE', iPoints)
			.replaceAll('LATITUDE_GIS_VARIABLE', globalPointsArray[iPoints][0])
			.replaceAll('LONGITUDE_GIS_VARIABLE', globalPointsArray[iPoints][1])
			.replace('LABEL_GIS_VARIABLE', globalPointsArray[iPoints][2].split('</br>')[0])

			.replace('DESCRIPTION_GIS_VARIABLE', globalPointsArray[iPoints][2]
				.replaceAll('</br>','CARRIAGE_VARIABLE')
				.replaceAll('\"','')
				.replaceAll('&nbsp;',' ')
				.replaceAll('&amp;','and')
				.replaceAll('%C3%A9',' ')
				.replaceAll(':',' ')
				.replaceAll('=',' ')
				.replaceAll('<','')
				.replaceAll('>','')
				.replaceAll(';','')
				.replaceAll('CARRIAGE_VARIABLE','<br/>')
			)
		);
	}

	tmpKmlForExport =
		fixtureKMLTemplateBegin +
		tmpArrayResultPoints.join(',') +
		fixtureKMLTemplateEnd
	;

	return tmpKmlForExport;
}
