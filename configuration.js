// ------------------- VARIABLES GLOBALES -------------------
startingViewLatLng = [40.421190, 15.005673];
startingViewZoom = 4;
isUsingCustomIcon = true;

customMapLegend = 
'<label id="checkboxRegionLabelState" class="input-check"><input onchange="change_state(this)" onclick="changeRegionLabelState()" type="checkbox" style="font-size:15px"/> <span id="textRegionLabelState">- OFF LABELS REGION -</span></label><br>'
+'<button id="noRegions" onclick="noRegions()" style="background: #FFA500; font-size:15px">NO REGIONS AREAS</button><br>'
+'<button id="withRegions" onclick="withRegions()" style="background: #50C878; font-size:15px">WITH REGIONS AREAS</button><br>'
+'<button id="romanFrontiersFirstCentury" onclick="romanFrontiersFirstCentury()" style="background: #d93616; font-size:15px">ROMAN FRONTIERS Ist c. B.C.</button><br><br>'
+'<h4>Map Legend</h4><br>';
+'<i style="background: #808080"></i><span>Mixed or Unkown Datation</span><br>';
+'<i style="background: #00FF00"></i><span>V<sup>th</sup> c. B.C.</span><br>';
+'<i style="background: #088F8F"></i><span>IV<sup>th</sup> c. B.C.</span><br>';
+'<i style="background: #0000FF"></i><span>III<sup>rd</sup> c. B.C.</span><br>';
+'<i style="background: #FF0000"></i><span>II<sup>nd</sup> c. B.C.</span><br>';
+'<i style="background: #FAA0A0"></i><span>I<sup>st</sup> c. B.C. (or later)</span><br>';

disablePolygonsFirstLoadingMap = false;

enableRasterOverlays = false;

rastersArray = [
    L.imageOverlay('./assets/css/images/syracuse_akradina_neapolis.png', [[[37.079072, 15.297206],[37.062655, 15.26436]]], {opacity: 0.7}),
    L.imageOverlay('./assets/css/images/syracuse_ortygia.png', [[[37.067097, 15.289713],[37.057552, 15.300441]]], {opacity: 0.7}),
]

function romanFrontiersFirstCentury() {
    noRegions();
    var elements = document.querySelectorAll('.roman_republic_cyprus, .roman_republic_cyclades, .roman_republic_crete, .roman_republic_egypt, .roman_republic_sicily, .roman_republic_carthago, .roman_republic_sardinia, .roman_republic_spain, .roman_republic_italy, .roman_republic_illyria, .roman_republic_epirus, .roman_republic_achean_league, .roman_republic_etolian_league, .roman_republic_phenicia, .roman_republic_attalid_kingdom');
    for (var iElements = 0; iElements < elements.length ; iElements++) {
        elements[iElements].style.display = '';
    }
    if (document.getElementById('checkboxRegionLabelState').classList.contains('checked')) {
        noLabels();
    } else {
        withLabels();
    }
}

selectedMapLayerReady = 'OpenStreetMap'

document.addEventListener("DOMContentLoaded", () => {
    if (selectedMapLayerReady === 'OpenStreetMap') {
        tileMapLayerOpenStreetMap()
    } else if (selectedMapLayerReady === 'OpenTopoMap') {
        tileMapLayerOpenTopoMap()
    } else if (selectedMapLayerReady === 'Satellite') {
        tileMapLayerSatellite()
    } else if (selectedMapLayerReady === 'ReliefEsri') {
        tileMapLayerEsriRelief()
    } else if (selectedMapLayerReady === 'DareMap') {
        tileMapDare()
    } else if (selectedMapLayerReady === 'Blank') {
        tileMapBlank()
    } else {
        tileMapLayerOpenStreetMap()
    }
});

columnNumberMapDisplay = 2;

