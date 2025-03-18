var csvSeparatorChar = ';';

var fixtureCSVTemplate =
`Header 1;Header 2;Header 3;Latitude;Longitude
Value 1 Line 1;Value 2 Line 1;Value 3 Line 1;48.79394;2.3848870
Value 1 Line 2;Value 2 Line 2;Value 3 Line 2;51.473379;-0.129398
`;

var fixtureJSONTemplate =
`{
	"rowsWithHeaders": [
		{
			"Header 1": "Value 1 Line 1",
			"Header 2": "Value 2 Line 1",
			"Header 3": "Value 3 Line 1",
			"Latitude": "48.79394",
			"Longitude": "2.3848870"
		},
		{
			"Header 1": "Value 1 Line 2",
			"Header 2": "Value 2 Line 2",
			"Header 3": "Value 3 Line 2",
			"Latitude": "51.473379",
			"Longitude": "-0.129398"
		}
	],
	"polygons": [
		{
			"coordinates": "[35.073818,32.219737],[35.387587,32.933713],[35.434810,33.929625],[35.695093,34.614330],[35.256421,33.970977],[34.953658,34.156251],[34.506089,32.944560],[34.705176,32.393046]",
			"tooltip": "Roman Republic (Cyprus)",
			"color": "#eb4034"
		},
		{
			"coordinates": "[35.073818,32.219737],[35.387587,32.933713],[35.434810,33.929625],[35.695093,34.614330],[35.256421,33.970977],[34.953658,34.156251],[34.506089,32.944560],[34.705176,32.393046]",
			"tooltip": "Roman Republic (Cyprus)",
			"color": "#eb4034"
		},
		{
			"coordinates": "[36.341483,27.548598],[36.898039,27.291802],[37.676513,27.072361],[37.866057,27.067437],[37.886023,26.499002],[38.071909,26.117186],[38.647997,26.173894],[38.628259,25.760160],[38.029572,24.617950],[37.645101,24.157276],[36.637734,24.277529],[36.270581,25.789371]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Cyclades)"
		},
		{
			"coordinates": "[35.274292,23.501476],[35.708851,23.580879],[35.316642,26.338725],[34.994183,26.236009],[34.899905,24.718213],[35.066643,24.737697]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Crete)"
		},
		{
			"coordinates": "[23.749760,35.539238],[25.238932,29.166337],[27.754709,27.775191],[30.811605,20.030983],[31.132144,20.173304],[31.702902,19.920991],[32.642686,20.819980],[32.928574,22.093533],[30.807516,29.079258],[31.581143,30.845179],[31.027278,32.569060],[ 29.346481,32.445028]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Egypt)"
		},
		{
			"coordinates": "[27.704779,34.097191],[ 29.426848,32.743379],[29.946571,32.533174],[31.027278,32.569060],[31.15624505325252,33.88081675878252],[31.51933795121743,34.42840418635473],[32.77509683178471,34.93393865694427],[34.23220669047728,35.63467771008109],[34.472897,35.761290],[34.54270903706667,35.97997266170639],[34.93456823710807,35.86870068202914],[35.19725481841101,35.95376372239423],[35.41822802780023,35.91368581224634],[35.58554215771339,35.71167803960746],[36.00616889737277,35.97669616419916],[36.31328863093101,35.76757436404751],[36.60658627147317,36.19070297141138],[36.78163474626475,36.18959246047935],[36.91992587380541,36.01617553857901],[36.56900787110299,35.5779914390431],[36.58774526560374,35.42821310031158],[36.53872506732088,35.34006373198528],[36.80205234236366,34.72193834388854],[36.41529317194928,34.08341113507876],[36.321166,34.074207],[36.22401253985193,33.95829474108213],[36.31582389164726,33.87512167478107],[36.308601,33.854420],[36.585776,33.379386],[36.719698,33.446439],[36.973092,34.166960],[38.045182,36.272710],[37.927981,38.376970]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Phenicia)"
		},
		{
			"coordinates": "[40.299351,17.576922],[40.295375,17.512479],[40.404255,17.193754],[40.473378,17.203197],[40.507818,17.068182],[40.348158,16.825923],[39.767566,16.472405],[39.398781,17.160674],[38.902353,17.128251],[38.868578,16.772782],[38.743965,16.554635],[38.434231,16.574165],[38.319601,16.453219],[38.281057,16.320387],[38.137826,16.171045],[37.927223,16.122631],[37.914466,15.697047],[38.232062,15.652899],[38.307317,15.817148],[38.547300,15.933664],[38.618189,15.827552],[38.669300,15.858003],[38.725929,15.992658],[38.718421,16.134782],[38.815236,16.215217],[38.877757,16.199836],[39.574789,15.858615],[40.056000,15.631480],[39.973021,15.409973],[40.245317,14.878150],[40.420814,14.979605],[40.647650,14.819291],[ 40.564294,14.316092],[40.766354,14.370090],[40.819550,14.246991],[40.776265,14.043587],[41.214353,13.744166],[41.192344,13.532937],[41.200054,13.047256],[42.015150,11.821428],[42.368030,11.115296],[42.932487,10.466804],[43.542982,10.288573],[43.677971,10.269797],[43.772260,11.411821],[43.599105,11.527833],[43.558462,11.727735],[43.635627,11.839319],[43.910003,11.636124],[44.173600,12.431925],[43.915267,12.907615],[43.606888,13.545297],[42.810711,13.939516],[42.358772,14.411918],[41.935211,15.150384],[41.951941,16.037935],[41.861265,16.205311],[41.766099,16.189305],[41.613528,15.905021],[41.479226,15.942461],[41.026970,17.203709],[40.699133,17.879848],[40.613277,18.054014],[40.563955,18.048037],[40.349222,18.364771],[40.106566,18.526322],[39.780612,18.378863],[39.837120,18.149234],[39.972947,17.982728],[40.234054,17.900664],[40.282063,17.821290]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Italy)"
		},
		{
			"coordinates": "[41.313268,9.271193],[40.894328,8.209032],[38.924316,8.412878],[39.100233,9.566917],[40.469349,9.835726]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Sardinia)"
		},
		{
			"coordinates": "[30.466526,18.607091],[30.719010,15.677414],[31.703976,14.570098],[32.082292,13.980815],[32.105614,12.266361],[32.761648,11.092202],[33.981274,9.300093],[34.946481,10.190373],[34.971073,9.169435],[36.018605,8.832332],[36.194572,5.850948],[36.633318,5.170961],[37.093704, 6.384246],[36.982437, 8.685172],[37.319000,10.025916],[37.128226,11.170857],[35.870969,10.573528],[35.224967,11.186025],[34.140971,10.065643],[33.646972,10.422498],[33.908466,11.016457],[33.289693,11.319881],[32.704993,12.673747],[32.930141,13.335169],[32.336696,15.300211],[31.453539,15.683792],[30.914224,17.876910]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Carthago)"
		},
		{
			"coordinates": "[40.366135,21.064949],[40.806607,20.996642],[41.086393,20.475506],[41.761241,20.582982],[42.181430,20.497916],[42.526419,20.061290],[42.602098,19.645703],[41.880327,19.220623],[41.751301,19.550490],[40.381819,19.267844]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Illyria)"
		},
		{
			"coordinates": "[39.688851,19.979853],[39.617046,20.153732],[39.559649,20.127251],[39.40341440621612,20.24345468308011],[39.26678526241516,20.34850962448664],[39.13199491054063,20.56368177115497],[39.05176074121791,20.69572732166616],[38.99898529419647,20.70164360084708],[38.944176219787,20.73590989486678],[38.96490468830012,20.82981989702858],[39.0026065015998,20.76460785757831],[39.03569495436096,20.76107784634491],[39.08755323804883,20.77786441334906],[39.11871124852223,20.79840755495071],[39.09372055944937,20.83462895604079],[39.06309390445666,20.87075014761368],[39.04092287661787,20.94323592737105],[39.01093609912483,20.98317624918068],[39.02287128195361,21.05857463567205],[39.04760598587225,21.10202967910647],[39.0184595781628,21.13807102675737],[39.03180405107793,21.201146586351],[39.33707801349001,21.39340141053679],[40.366135,21.064949],[40.381819,19.267844],[39.955234,19.885666]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Epirus)"
		},
		{
			"coordinates": "[39.504077,-0.308057],[38.746795,0.271560],[36.698728,-2.119120],[36.650725,-4.326539],[36.291349,-5.198924],[36.003271,-5.613993],[36.429507,-6.266218],[36.862947,-6.413550],[37.160214,-6.954360]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Spain)"
		},
		{
			"coordinates": "[38.103902,13.388501],[38.230047,13.318298],[38.189910,13.091497],[38.037093,12.902968],[38.183187,12.741803],[38.023320,12.505825],[37.800100,12.425489],[37.699202,12.470789],[37.659513,12.534110],[37.553457,12.670385],[37.577904,12.755627],[37.577048,12.904241],[37.557902,12.970074],[37.490223,13.028526],[37.494302,13.136377],[37.470775,13.192809],[37.086726,13.904247],[37.099812,13.947581],[37.108405,14.044367],[37.080362,14.157799],[36.770382,14.482905],[36.655746,15.082480],[37.044433,15.408344],[37.244250,15.189618],[37.421304,15.069134],[38.288934,15.574108],[38.008141,14.163895],[38.046365,14.000335],[37.981790,13.822485],[37.972307,13.738350],[38.056710,13.546938],[38.116862,13.519752]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Sicily)"
		},
		{
			"coordinates": "[38.323025,22.685496],[38.832509,22.567702],[38.628947,23.341014],[38.355245,23.713351],[38.195136,24.099107],[38.150561,23.354188],[38.010955,23.440302],[37.959048,23.348010],[37.903289,23.039657],[37.514611,23.547086],[37.240384,23.183865],[37.586863,22.745289],[36.432458,23.233992],[36.105635,23.053859],[36.432132,22.333899],[36.979428,22.042845],[36.697736,21.891649],[36.814578,21.689814],[37.167537,21.545053],[37.297602,21.693342],[37.654222,22.006143],[38.105532,21.343835],[38.227639,21.367438],[38.151826,21.597604],[38.351987,21.850150],[37.955190,22.874225],[38.144703,23.199966],[38.203663,22.851436]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Achean League)"
		},
		{
			"coordinates": "[38.323025,22.685496],[38.832509,22.567702],[38.891834,22.571981],[38.880896,22.681101],[39.023924,22.656701],[39.014583,22.285059],[38.898161,21.862638],[38.809834,21.404622],[38.375659,21.314734],[38.363131,21.412701],[38.280206,21.490849],[38.348201,21.643885],[38.328905,21.768468],[38.379408,21.839921],[38.365105,21.892006],[38.399262,21.937229],[38.321160,22.188019],[38.334280,22.382659],[38.418106,22.433802],[38.276047,22.568599]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Etolian League)"
		},
		{
			"coordinates": "[39.545512,26.938274],[38.896139,27.045215],[38.753931,26.879359],[38.404939,27.046768],[38.047719,27.044646],[37.941533,27.263740],[37.746616,27.253487],[37.414465,27.406495],[37.519276,27.512166],[37.732182,28.955797],[37.523922,29.643461],[36.601023,29.507743],[36.617683,30.560293],[36.867697,30.668131],[36.505501,32.044670],[36.236888,32.279310],[36.002173,32.751558],[36.138489,33.697179],[36.308601,33.854420],[36.585776,33.379386],[36.719698,33.446439],[36.973092,34.166960],[38.383798,33.530849],[38.680340,33.100593],[38.527445,31.445244],[38.645077,31.226392],[39.348905,31.061063],[39.894532,32.154652],[39.843732,30.962185],[40.147119,28.786727],[40.140883,27.852912],[40.137766,27.376945],[40.361240,27.333199],[40.472973,27.262505],[40.380760,26.681459],[40.634308,27.254052],[40.824937,27.448136],[40.964113,27.510761],[41.067149,27.530447],[41.133644,27.383614],[40.947506,26.818848],[40.588427,26.332473],[40.649428,26.789350],[40.583688,26.836408],[40.320013,26.211345],[40.061252,26.158388],[39.633347,26.155389],[39.585017,26.104660],[39.476408,26.063023],[39.452929,26.132897],[39.580107,26.908524],[39.545512,26.938274]", 
			"color": "#eb4034", 
			"tooltip": "Roman Republic (Attalid Kingdom)"
		}
	]
}
`;

var fixturePolygonsTemplate = `
([35.073818,32.219737],[35.387587,32.933713],[35.434810,33.929625],[35.695093,34.614330],[35.256421,33.970977],[34.953658,34.156251],[34.506089,32.944560],[34.705176,32.393046]).color('#eb4034').tooltip("Roman Republic (Cyprus)")\r
([36.341483,27.548598],[36.898039,27.291802],[37.676513,27.072361],[37.866057,27.067437],[37.886023,26.499002],[38.071909,26.117186],[38.647997,26.173894],[38.628259,25.760160],[38.029572,24.617950],[37.645101,24.157276],[36.637734,24.277529],[36.270581,25.789371]).color('#eb4034').tooltip("Roman Republic (Cyclades)")\r
([35.274292,23.501476],[35.708851,23.580879],[35.316642,26.338725],[34.994183,26.236009],[34.899905,24.718213],[35.066643,24.737697]).color('#eb4034').tooltip("Roman Republic (Crete)")\r
([23.749760,35.539238],[25.238932,29.166337],[27.754709,27.775191],[30.811605,20.030983],[31.132144,20.173304],[31.702902,19.920991],[32.642686,20.819980],[32.928574,22.093533],[30.807516,29.079258],[31.581143,30.845179],[31.027278,32.569060],[ 29.346481,32.445028]).color('#eb4034').tooltip("Roman Republic (Egypt)")\r
([27.704779,34.097191],[ 29.426848,32.743379],[29.946571,32.533174],[31.027278,32.569060],[31.15624505325252,33.88081675878252],[31.51933795121743,34.42840418635473],[32.77509683178471,34.93393865694427],[34.23220669047728,35.63467771008109],[34.472897,35.761290],[34.54270903706667,35.97997266170639],[34.93456823710807,35.86870068202914],[35.19725481841101,35.95376372239423],[35.41822802780023,35.91368581224634],[35.58554215771339,35.71167803960746],[36.00616889737277,35.97669616419916],[36.31328863093101,35.76757436404751],[36.60658627147317,36.19070297141138],[36.78163474626475,36.18959246047935],[36.91992587380541,36.01617553857901],[36.56900787110299,35.5779914390431],[36.58774526560374,35.42821310031158],[36.53872506732088,35.34006373198528],[36.80205234236366,34.72193834388854],[36.41529317194928,34.08341113507876],[36.321166,34.074207],[36.22401253985193,33.95829474108213],[36.31582389164726,33.87512167478107],[36.308601,33.854420],[36.585776,33.379386],[36.719698,33.446439],[36.973092,34.166960],[38.045182,36.272710],[37.927981,38.376970]).color('#eb4034').tooltip("Roman Republic (Phenicia)")\r
([40.299351,17.576922],[40.295375,17.512479],[40.404255,17.193754],[40.473378,17.203197],[40.507818,17.068182],[40.348158,16.825923],[39.767566,16.472405],[39.398781,17.160674],[38.902353,17.128251],[38.868578,16.772782],[38.743965,16.554635],[38.434231,16.574165],[38.319601,16.453219],[38.281057,16.320387],[38.137826,16.171045],[37.927223,16.122631],[37.914466,15.697047],[38.232062,15.652899],[38.307317,15.817148],[38.547300,15.933664],[38.618189,15.827552],[38.669300,15.858003],[38.725929,15.992658],[38.718421,16.134782],[38.815236,16.215217],[38.877757,16.199836],[39.574789,15.858615],[40.056000,15.631480],[39.973021,15.409973],[40.245317,14.878150],[40.420814,14.979605],[40.647650,14.819291],[ 40.564294,14.316092],[40.766354,14.370090],[40.819550,14.246991],[40.776265,14.043587],[41.214353,13.744166],[41.192344,13.532937],[41.200054,13.047256],[42.015150,11.821428],[42.368030,11.115296],[42.932487,10.466804],[43.542982,10.288573],[43.677971,10.269797],[43.772260,11.411821],[43.599105,11.527833],[43.558462,11.727735],[43.635627,11.839319],[43.910003,11.636124],[44.173600,12.431925],[43.915267,12.907615],[43.606888,13.545297],[42.810711,13.939516],[42.358772,14.411918],[41.935211,15.150384],[41.951941,16.037935],[41.861265,16.205311],[41.766099,16.189305],[41.613528,15.905021],[41.479226,15.942461],[41.026970,17.203709],[40.699133,17.879848],[40.613277,18.054014],[40.563955,18.048037],[40.349222,18.364771],[40.106566,18.526322],[39.780612,18.378863],[39.837120,18.149234],[39.972947,17.982728],[40.234054,17.900664],[40.282063,17.821290]).color('#eb4034').tooltip("Roman Republic (Italy)")\r
([41.313268,9.271193],[40.894328,8.209032],[38.924316,8.412878],[39.100233,9.566917],[40.469349,9.835726]).color('#eb4034').tooltip("Roman Republic (Sardinia)")\r
([30.466526,18.607091],[30.719010,15.677414],[31.703976,14.570098],[32.082292,13.980815],[32.105614,12.266361],[32.761648,11.092202],[33.981274,9.300093],[34.946481,10.190373],[34.971073,9.169435],[36.018605,8.832332],[36.194572,5.850948],[36.633318,5.170961],[37.093704, 6.384246],[36.982437, 8.685172],[37.319000,10.025916],[37.128226,11.170857],[35.870969,10.573528],[35.224967,11.186025],[34.140971,10.065643],[33.646972,10.422498],[33.908466,11.016457],[33.289693,11.319881],[32.704993,12.673747],[32.930141,13.335169],[32.336696,15.300211],[31.453539,15.683792],[30.914224,17.876910]).color('#eb4034').tooltip("Roman Republic (Carthago)")\r
([40.366135,21.064949],[40.806607,20.996642],[41.086393,20.475506],[41.761241,20.582982],[42.181430,20.497916],[42.526419,20.061290],[42.602098,19.645703],[41.880327,19.220623],[41.751301,19.550490],[40.381819,19.267844]).color('#eb4034').tooltip("Roman Republic (Illyria)")\r
([39.688851,19.979853],[39.617046,20.153732],[39.559649,20.127251],[39.40341440621612,20.24345468308011],[39.26678526241516,20.34850962448664],[39.13199491054063,20.56368177115497],[39.05176074121791,20.69572732166616],[38.99898529419647,20.70164360084708],[38.944176219787,20.73590989486678],[38.96490468830012,20.82981989702858],[39.0026065015998,20.76460785757831],[39.03569495436096,20.76107784634491],[39.08755323804883,20.77786441334906],[39.11871124852223,20.79840755495071],[39.09372055944937,20.83462895604079],[39.06309390445666,20.87075014761368],[39.04092287661787,20.94323592737105],[39.01093609912483,20.98317624918068],[39.02287128195361,21.05857463567205],[39.04760598587225,21.10202967910647],[39.0184595781628,21.13807102675737],[39.03180405107793,21.201146586351],[39.33707801349001,21.39340141053679],[40.366135,21.064949],[40.381819,19.267844],[39.955234,19.885666]).color('#eb4034').tooltip("Roman Republic (Epirus)")\r
([39.504077,-0.308057],[38.746795,0.271560],[36.698728,-2.119120],[36.650725,-4.326539],[36.291349,-5.198924],[36.003271,-5.613993],[36.429507,-6.266218],[36.862947,-6.413550],[37.160214,-6.954360]).color('#eb4034').tooltip("Roman Republic (Spain)")\r
([38.103902,13.388501],[38.230047,13.318298],[38.189910,13.091497],[38.037093,12.902968],[38.183187,12.741803],[38.023320,12.505825],[37.800100,12.425489],[37.699202,12.470789],[37.659513,12.534110],[37.553457,12.670385],[37.577904,12.755627],[37.577048,12.904241],[37.557902,12.970074],[37.490223,13.028526],[37.494302,13.136377],[37.470775,13.192809],[37.086726,13.904247],[37.099812,13.947581],[37.108405,14.044367],[37.080362,14.157799],[36.770382,14.482905],[36.655746,15.082480],[37.044433,15.408344],[37.244250,15.189618],[37.421304,15.069134],[38.288934,15.574108],[38.008141,14.163895],[38.046365,14.000335],[37.981790,13.822485],[37.972307,13.738350],[38.056710,13.546938],[38.116862,13.519752]).color('#eb4034').tooltip("Roman Republic (Sicily)")\r
([38.323025,22.685496],[38.832509,22.567702],[38.628947,23.341014],[38.355245,23.713351],[38.195136,24.099107],[38.150561,23.354188],[38.010955,23.440302],[37.959048,23.348010],[37.903289,23.039657],[37.514611,23.547086],[37.240384,23.183865],[37.586863,22.745289],[36.432458,23.233992],[36.105635,23.053859],[36.432132,22.333899],[36.979428,22.042845],[36.697736,21.891649],[36.814578,21.689814],[37.167537,21.545053],[37.297602,21.693342],[37.654222,22.006143],[38.105532,21.343835],[38.227639,21.367438],[38.151826,21.597604],[38.351987,21.850150],[37.955190,22.874225],[38.144703,23.199966],[38.203663,22.851436]).color('#eb4034').tooltip("Roman Republic (Achean League)")\r
([38.323025,22.685496],[38.832509,22.567702],[38.891834,22.571981],[38.880896,22.681101],[39.023924,22.656701],[39.014583,22.285059],[38.898161,21.862638],[38.809834,21.404622],[38.375659,21.314734],[38.363131,21.412701],[38.280206,21.490849],[38.348201,21.643885],[38.328905,21.768468],[38.379408,21.839921],[38.365105,21.892006],[38.399262,21.937229],[38.321160,22.188019],[38.334280,22.382659],[38.418106,22.433802],[38.276047,22.568599]).color('#eb4034').tooltip("Roman Republic (Etolian League)")\r
([39.545512,26.938274],[38.896139,27.045215],[38.753931,26.879359],[38.404939,27.046768],[38.047719,27.044646],[37.941533,27.263740],[37.746616,27.253487],[37.414465,27.406495],[37.519276,27.512166],[37.732182,28.955797],[37.523922,29.643461],[36.601023,29.507743],[36.617683,30.560293],[36.867697,30.668131],[36.505501,32.044670],[36.236888,32.279310],[36.002173,32.751558],[36.138489,33.697179],[36.308601,33.854420],[36.585776,33.379386],[36.719698,33.446439],[36.973092,34.166960],[38.383798,33.530849],[38.680340,33.100593],[38.527445,31.445244],[38.645077,31.226392],[39.348905,31.061063],[39.894532,32.154652],[39.843732,30.962185],[40.147119,28.786727],[40.140883,27.852912],[40.137766,27.376945],[40.361240,27.333199],[40.472973,27.262505],[40.380760,26.681459],[40.634308,27.254052],[40.824937,27.448136],[40.964113,27.510761],[41.067149,27.530447],[41.133644,27.383614],[40.947506,26.818848],[40.588427,26.332473],[40.649428,26.789350],[40.583688,26.836408],[40.320013,26.211345],[40.061252,26.158388],[39.633347,26.155389],[39.585017,26.104660],[39.476408,26.063023],[39.452929,26.132897],[39.580107,26.908524],[39.545512,26.938274]).color('#eb4034').tooltip("Roman Republic (Attalid Kingdom)")`;
var fixtureExportHtml = `
		<link rel='stylesheet' href='https://unpkg.com/leaflet@1.9.3/dist/leaflet.css' integrity='sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=' crossorigin=''/>
		<script src='https://unpkg.com/leaflet@1.9.3/dist/leaflet.js' integrity='sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=' crossorigin=''></script>
		<div id='map' style='width: 100%; height: 100%; font-size: 25px; margin: 0; border-radius: 0px; border: 2px solid #3c546b;'></div>
		<script>
			var map = L.map('map').setView([40.421190, 15.005673], 4);

			new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://github.com/zanniadevweb/cms_r-lite-web-gis">- Customized by Alexandre Zanni</a>'
			}).addTo(map);
			L.control.scale().addTo(map);

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
		document.getElementById('optionDeletePoint').style = '';
		document.getElementById('optionDeletePolygon').style = '';
		document.getElementById('inputCreatedAssociationPinPointToId').value = '0'
		document.getElementById('fileButton').disabled = false
		document.getElementById('fileJsonButton').disabled = false
		// document.getElementById('filePolygonsInput').disabled = false
		// document.getElementById('polygonsTemplateButton').disabled = false
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

function loadJsonContentIntoPage(fileContent)
{
	var jsonInput = JSON.parse(fileContent);
	jsonValues = [];
	rows = jsonInput.rowsWithHeaders;
	headers = [];
	numberRows = rows.length
	for(var i = 0; i < numberRows; i++) {
		rowsArr = [];
		for(const [key, value] of Object.entries(rows[i])) {
			if (i === numberRows - 1) {
				headers.push(key)
			}
			rowsArr.push(value);
		}
		rowsArr.unshift(String(i));
		jsonValues.push(rowsArr);
	}
	headers.unshift("ID");
	jsonValues.unshift(headers);
	importArrayIntoTable(jsonValues, 'tableResearchInventory');
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
		document.getElementById('optionCreatePolygon').style = '';
	};

	reader.onerror = function() {
		console.log(reader.error);
	};
}

function readFileJson(input) {
	var fileContent = '';
	let file = input.files[0];
	let reader = new FileReader();
	reader.readAsText(file, 'UTF-8');
	reader.onload = function() {
		fileContent = reader.result
		polygonsJson = JSON.parse(fileContent).polygons;
		readJsonPolygons(polygonsJson)
		loadJsonContentIntoPage(fileContent);
		allowsExportForWeb();
	};
	reader.onerror = function() {
		console.log(reader.error);
	};
}

function readJsonPolygons(input) {
	var filePolygonsContent = [];
	var fileContentPolygonsLinesAsString = '';
	for(const [key, value] of Object.entries(input)) {
		filePolygonsContent.push("("+value.coordinates+").color('"+value.color+"').tooltip(\""+value.tooltip+"\")")
	}

	fileContentPolygonsLinesAsString = filePolygonsContent.join('|');
	document.getElementById('tmpFilePolygonsContent').value = fileContentPolygonsLinesAsString;
	if (document.getElementById('tmpFilePolygonsContent').value !== '') {
		fillPolygons();
	}
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
	// table.setAttribute("class", "sortable");
	table.setAttribute("id", "tableData");
	// sorttableJs();

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
					if ((currValue.includes('https://') || currValue.includes('http://')) && !(currValue.includes("<a href="))
					) {
						if ((currValue.includes('.jpg') || currValue.includes('.JPG') ||
							currValue.includes('.png') || currValue.includes('.PNG') ||
							currValue.includes('.svg') || currValue.includes('.SVG') ||
							currValue.includes('.jpeg') || currValue.includes('.JPEG'))
						) {
							currValue = '<a href='+currValue+' target="_blank"><img src='+currValue+' style=\'max-width:100px;\'></a>'
						} else {
							currValue = '<a href='+currValue+' target="_blank">'+((currValue.split("https://"))[1])+'</a>'
						}
					} else if (currValue.includes('type="checkbox"')) {
						var checkedVal = ""
						if ( currValue.split('checked')[1] !== undefined && currValue.split('checked')[1].includes('true')) { checkedVal = 'checked="true"'}
						currValue = "<input class='checkbox' type='checkbox' onclick='if(this.checked === true){this.setAttribute(\"checked\",true)} else {this.setAttribute(\"checked\",false)}' "+checkedVal+"/>" // TODO
					} else if (currValue.includes('href=#')) {
						let tmpValueOld = currValue.replaceAll('=','').replaceAll('"','').split('href')
						let tmpValueNew = []
						for (var l=0; l < tmpValueOld.length; l++) {
							if (tmpValueOld[l] !== '') {
								tmpValueNew.push('<a href="'+tmpValueOld[l]+'">'+tmpValueOld[l]+'</a>') // TODO
							}
						}
						currValue = tmpValueNew.join('')
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

function isImgUrl(url) {
	// const img = new Image();
	// img.src = url;
	// return new Promise((resolve) => {
	// 	img.onerror = () => resolve(false);
	// 	img.onload = () => resolve(true);
	// });
	return fetch(url, {method: 'HEAD'}).then(res => {
		return res.headers.get('Content-Type').startsWith('image')
	})
}

// const urls = [
// 'https://avatars.githubusercontent.com/u/33640448?v=4',
// 'https://httpbin.org/image/webp',
// 'https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg'
// ];

// Promise.all(urls.map((url) => isImgUrl(url))).then(console.log);

// ---------------- SAVE FILE BUTTON ACTIONS --------------
	const download = function (unmodified_data, nameFile = 'result', blobFileFormat = 'text/csv', fileExtension = '.csv') {
			let data = unmodified_data.replaceAll('onclick="if(this.checked === true){this.setAttribute(&quot;checked&quot;,true)} else {this.setAttribute(&quot;checked&quot;,false)}"', "")
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
	var tableToJsonValues = [];
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
							if (strChildCellValue.startsWith('<a href=') && !(strChildCellValue.includes('#'))) {
								strChildCellValue = strChildCellValue.split('href=')[1].split('>')[0].replaceAll('"','');
							} else if (strChildCellValue.includes('a href="#')) {
								TMPstrChildCellValueOld = strChildCellValue.replaceAll('href=','').replaceAll(' ','').replaceAll('<a','').split('"')
								TMPstrChildCellValueNew = []
								for (var m=0; m<TMPstrChildCellValueOld.length; m++) {
									if (TMPstrChildCellValueOld[m] !== '' && !(TMPstrChildCellValueOld[m].includes('</a>'))) {
										TMPstrChildCellValueNew.push(TMPstrChildCellValueOld[m])
									}
								}
								strChildCellValue = TMPstrChildCellValueNew.join(' href=')
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

	const getJson = async function () {
		table = document.getElementById("tableResearchInventory");
		trHeadersStr = document.getElementById("tableResearchInventory").getElementsByTagName("thead")[0].outerHTML;
		trHeadersValues.push(trHeadersStr.replace('<th>','').replace('<thead>','').replace('</thead>','').split('</th>'))
		if (table !== undefined && table.getElementsByTagName("tbody")[0] !== undefined) {
			var currHeader = '';
			var cleanHeaders = []
			for (var objIt = 0; objIt < trHeadersValues.length; objIt++) {
				if (trHeadersValues[objIt] !== undefined) {
					for (var arrIt = 0; arrIt < trHeadersValues[objIt].length; arrIt++) {
						currHeader = trHeadersValues[objIt][arrIt].replace('<th>','');
						if (currHeader !== 'ID' && currHeader !== '') {
							// currHeaderJson = `"`+(arrIt-1).toString()+`"`+`: "`+currHeader+`"`
							// cleanHeaders.push(currHeaderJson)
							cleanHeaders.push(currHeader)
						}
					}
				}
			}
			// singleHeaderValues = `"headers": {`+cleanHeaders.join(', ')+`}`;

			trValues = table.getElementsByTagName("tbody")[0].rows;
			for (var k = 0; k < trValues.length; k++) {
				tableChildCellOneLine = trValues[k].children
				for (var childCell = 1; childCell < tableChildCellOneLine.length; childCell++) {
					cleanStrChildCellValue = ""
					strChildCellValue = tableChildCellOneLine[childCell].innerHTML;
					cleanStrChildCellValue = strChildCellValue.replaceAll("\"", "\'");
					// strChildCellJson = `"`+(childCell-1).toString()+`"`+`: "`+cleanStrChildCellValue+`"`
					strChildCellJson = `"`+cleanHeaders[childCell-1]+`"`+`: "`+cleanStrChildCellValue+`"`
					tableOneLine.push(strChildCellJson)
				}
				childCell = 0
				// tableOneLine.shift();
				tableToJsonValues.push(tableOneLine);
				tableOneLine = [];
			}

			var data =  '';
			var currLine = 0;
			tableToJsonValuesStrTmp = [];
			for (var jsonIt = 0; jsonIt < tableToJsonValues.length; jsonIt++) {
				tableToJsonValuesStrTmp.push(`{`+tableToJsonValues[jsonIt]+`}`)
			}
			tableToJsonValuesStr = `"rowsWithHeaders": [`+tableToJsonValuesStrTmp.toString()+`]`;
			data = `{`+singleHeaderValues.concat(tableToJsonValuesStr)+`}`
			singleHeaderValues = [];
			trHeadersValues = [];
			currLine = 0;
			tableToJsonValues = [];
			if (document.getElementById('tmpFilePolygonsContent').value !== "") {
				var polygonContentToFile = [];
				polygonContentToFile = document.getElementById('tmpFilePolygonsContent').value.split('|');
				polyArr = [];
				for(var polyIt = 0;  polyIt < polygonContentToFile.length; polyIt++) {
					if (polygonContentToFile[polyIt] !== "") {
						let polyObj = {};
						let coordinates = (polygonContentToFile[polyIt].split(".color("))[0].replace("(","").replace(")","")
						let tooltip = ((polygonContentToFile[polyIt].split(".tooltip("))[1]).replace("\")","").replace("\"", "")
						let color = ((polygonContentToFile[polyIt].split(".color(")[1]).split(".tooltip(")[0]).replace(")","").replaceAll("'", "")
						polyObj.coordinates = coordinates
						polyObj.tooltip = tooltip
						polyObj.color = color
						polyArr.push(polyObj)
					}
				}
			} else {
				polyArr = [];
			}
			jsonData = JSON.parse(data);
			jsonData.polygons = polyArr;
			formattedJSON = JSON.stringify(jsonData, null, 2);
			download(formattedJSON, 'result', 'text/json', '.json');
		}
	}

	// Getting element by id and adding
	// eventlistener to listen everytime
	// button get pressed
	const btn = document.getElementById('fileButton');
	btn.addEventListener('click', get);
	const btnJson = document.getElementById('fileJsonButton');
	btnJson.addEventListener('click', getJson);
// ---------------- SAVE FILE BUTTON ACTIONS --------------

function downloadCsvTemplate() {
	download(fixtureCSVTemplate, 'template');
}

function downloadJsonTemplate() {
	download(fixtureJSONTemplate, 'template', 'text/json', '.json');
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
	} else if (selectedMapLayer === 'DareMap') {
		chosenMapLayer = 'https://dh.gu.se/tiles/imperium/{z}/{x}/{y}.png'
	} else if (selectedMapLayer === 'Blank') {
		chosenMapLayer = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
	} else {
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
		L.control.scale().addTo(map);

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