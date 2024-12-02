// ------------------- VARIABLES GLOBALES -------------------
startingViewLatLng = [40.421190, 15.005673];
startingViewZoom = 4;

customMapLegend = 
'<label id="checkboxRegionLabelState" class="input-check"><input onchange="change_state(this)" onclick="changeRegionLabelState()" type="checkbox" style="font-size:15px"/> <span id="textRegionLabelState">- OFF LABELS REGION -</span></label><br>'
+'<button id="noRegions" onclick="noRegions()" style="background: #FFA500; font-size:15px">NO REGIONS AREAS</button><br>'
+'<button id="withRegions" onclick="withRegions()" style="background: #50C878; font-size:15px">WITH REGIONS AREAS</button><br>'
+'<button id="fifthCentRegions" onclick="fifthCentRegions()" style="background: #d93616; font-size:15px">Vth c. B.C. REGIONS</button>'
+'<button id="fourthCentRegions" onclick="fourthCentRegions()" style="background: #d93616; font-size:15px">IVth c. B.C. REGIONS</button><br>'
+'<button id="thirdCentRegions" onclick="thirdCentRegions()" style="background: #d93616; font-size:15px">IIIrd c. B.C. REGIONS</button>'
+'<button id="secondCentRegions" onclick="secondCentRegions()" style="background: #d93616; font-size:15px">IInd c. B.C. REGIONS</button><br>'
+'<button id="firstCentRegions" onclick="firstCentRegions()" style="background: #d93616; font-size:15px">Ist c. B.C. REGIONS</button><br><br>'
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
    L.imageOverlay('./assets/css/images/monte_iato_agora.png', [[[37.967525, 13.19783],[37.966689, 13.198824]]], {opacity: 0.7}),
    L.imageOverlay('./assets/css/images/paestum_sele_third_century.png', [[[40.489619, 14.968864],[40.487029, 14.971221]]], {opacity: 0.7}),
    L.imageOverlay('./assets/css/images/segeste_agora_stoa.png', [[[37.9393, 12.842035],[37.940137, 12.843218]]], {opacity: 0.8}),
    L.imageOverlay('./assets/css/images/segeste_bouleuterion.png', [[[37.940027, 12.841657],[37.939298, 12.842286]]], {opacity: 0.7}),
]

function fifthCentRegions() {
    noRegions();
    var elements = document.querySelectorAll('.persian_empire, .italiot_states, .syracuse_kingdom, .carthago_empire_carthago, .carthago_empire_sardinia, .carthago_empire_spain, .punic_epicratia, .etruscan_etruria, .roman_republic_latium, .epirot_kingdom_illyria, .epirot_kingdom_epirus');
    for (var iElements = 0; iElements < elements.length ; iElements++) {
        elements[iElements].style.display= '';
    }
    if (document.getElementById('checkboxRegionLabelState').classList.contains('checked')) {
        noLabels();
    } else {
        withLabels();
    }
}

function fourthCentRegions() {
    noRegions();
    var elements = document.querySelectorAll('.persian_empire, .italiot_states, .syracuse_kingdom, .carthago_empire_carthago, .carthago_empire_sardinia, .carthago_empire_spain, .punic_epicratia, .etruscan_etruria, .roman_republic_latium, .epirot_kingdom_illyria, .epirot_kingdom_epirus');
    for (var iElements = 0; iElements < elements.length ; iElements++) {
        elements[iElements].style.display= '';
    }
    if (document.getElementById('checkboxRegionLabelState').classList.contains('checked')) {
        noLabels();
    } else {
        withLabels();
    }
}

function thirdCentRegions() {
    noRegions();
    var elements = document.querySelectorAll('.lagid_kingdom_cyprus, .lagid_kingdom_cyclades, .lagid_kingdom_crete, .lagid_kingdom_egypt, .syracuse_kingdom, .carthago_empire_carthago, .carthago_empire_sardinia, .carthago_empire_spain, .punic_epicratia, .roman_republic_italy, .epirot_kingdom_illyria, .epirot_kingdom_epirus, .achean_league, .etolian_league, .pergame_kingdom, .seleucid_kingdom_asia_minor, .seleucid_kingdom_persia');
    for (var iElements = 0; iElements < elements.length ; iElements++) {
        elements[iElements].style.display= '';
    }
    if (document.getElementById('checkboxRegionLabelState').classList.contains('checked')) {
        noLabels();
    } else {
        withLabels();
    }
}

function secondCentRegions() {
    noRegions();
    var elements = document.querySelectorAll('.lagid_kingdom_cyprus, .lagid_kingdom_cyclades, .lagid_kingdom_crete, .roman_republic_egypt, .roman_republic_sicily, .carthago_empire_carthago, .roman_republic_sardinia, .carthago_empire_spain, .roman_republic_italy, .roman_republic_illyria, .roman_republic_epirus, .roman_republic_achean_league, .roman_republic_etolian_league, .seleucid_kingdom_phenicia, .attalid_kingdom');
    for (var iElements = 0; iElements < elements.length ; iElements++) {
        elements[iElements].style.display= '';
    }
    if (document.getElementById('checkboxRegionLabelState').classList.contains('checked')) {
        noLabels();
    } else {
        withLabels();
    }
}

function firstCentRegions() {
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

selectedMapLayerReady = 'DareMap'

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

