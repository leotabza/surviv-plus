	(function webpack_inject(){


	window.isset = function(v) {
		return typeof v !== "undefined" && v !== null && v !== "" ? true : false;
	}
	
	window.obfuscate = {
		"mainModule": "Aa",
		"init": "o",
		"free": "n",
		"update": "m",
		"render": "_a",
		"sendMessage": "Pa",
		"processGameUpdate": "xa",
		"EmoteManager": "ra",
		"camera": "Ee",
		"targetZoom": "O",
		"activePlayer": "ha",
		"input": "bt",
		"mousePosition": "Ue",
		"keyPressed": "We",
		"mousePressed": "Ge",
		"mouseDown": "Ke",
		"map": "Dt",
		"obstaclePool": "Ve",
		"buildingPool": "sa",
		"pool": "mt",
		"weapons": "tt",
		"curWeapIdx": "at",
		"playerBarn": "Lt",
		"playerPool": "$e",
		"playerInfo": "Ba",
		"layer": "pe",
		"dead": "he",
		"downed": "ue",
		"activeId": "ma",
		"objectCreator": "ca",
		"netData": "Re",
		"pieTimer": "aa",
		"lootBarn": "Yt",
		"closestLoot": "Oa",
		"lootPool": "oa",
		"localData": "Le",
									"cheatVersion": "0.30.0"
	};

	var checkVersion = function () {
		var link = "https://raw.githubusercontent.com/Kalaborative/survivio-plus/master/manifest.json";
		fetch(link)
			.then( response => response.json())
			.then( (jsonData) => {
				if( isset(jsonData.version) && jsonData.version !== obfuscate.cheatVersion) {
					alert("Please update your extension for the best results!");
				}
			});
	}
	checkVersion();
	// window.freestar.newAdSlots = function(slots) {
	// 	return slots;
	// }

	// window.freestar.deleteAdSlots = function(slots) {
	// 	return slots;
	// }
	
	
	window.webpackJsonp([0], {
        "webpack_inject": function (wrapper, exports, getModule) {

            var mainModule = getModule("9b5f96fd")[obfuscate.mainModule];
            // console.log(mainModule);
						
			// init
			var gameInitBase = mainModule.prototype[obfuscate.init];
			mainModule.prototype[obfuscate.init] = function(){
				gameInitBase.apply(this, arguments);
				window.gameFunctions.gameInit.call(this);
			};
			
			// free
			var gameFreeBase = mainModule.prototype[obfuscate.free];
			// console.log(gameFreeBase);
			mainModule.prototype[obfuscate.free] = function(){
				gameFreeBase.apply(this, arguments);
				window.gameFunctions.gameFree.call(this);
			};
			
			// update and override
			var gameUpdateBase = mainModule.prototype[obfuscate.update];
			mainModule.prototype[obfuscate.update] = function(){
				if(!this.override)
					window.gameFunctions.gameOverride.call(this);
				gameUpdateBase.apply(this, arguments);
				window.gameFunctions.gameUpdate.call(this);
			};
			
			// render
			var gameRenderBase = mainModule.prototype[obfuscate.render];
			mainModule.prototype[obfuscate.render] = function(){
				gameRenderBase.apply(this, arguments);
				window.gameFunctions.gameRender.call(this);
			};
			
			// sendMessage
			var gameSendMessageBase = mainModule.prototype[obfuscate.sendMessage];
			mainModule.prototype[obfuscate.sendMessage] = function(){
				gameSendMessageBase.apply(this, arguments);
				window.gameFunctions.gameSendMessage.apply(this, arguments);
			};
			
			// processGameUpdate
			var gameSrocessGameUpdateBase = mainModule.prototype[obfuscate.processGameUpdate];
			mainModule.prototype[obfuscate.processGameUpdate] = function(){
				gameSrocessGameUpdateBase.apply(this, arguments);
				window.gameFunctions.gameSrocessGameUpdate.apply(this, arguments);
			};
			
			// PING
			var emoteModule = getModule("e5d16b4d");
			// console.log(emoteModule)
			// console.log(emoteModule);

			// var someModule = getModule("c99e6613");
			// console.log(someModule);

			// var anotherModule = getModule('61fc98e9');
			// console.log(anotherModule.prototype.connect);

			
			// override
			var emoteManagerUpdateBase = emoteModule[obfuscate.EmoteManager].prototype[obfuscate.update]; //emoteModule.EmoteManager.prototype.update
			// console.log(emoteManagerUpdateBase);
			emoteModule[obfuscate.EmoteManager].prototype[obfuscate.update] = function () {
				if (!this.override)
					window.gameFunctions.pingOverride.call(this);

				emoteManagerUpdateBase.apply(this, arguments);
			};
			
			// DATA
			window.gameVars.Game.GameData = getModule("989ad62a");
			window.gameVars.Game.model = getModule("10899aea");

			window.gameVars.Game.BulletBarn = getModule("beeed8a4");
			window.gameVars.Game.GunBarn = getModule("ad1c4e70");
			window.gameVars.Game.GunTypes = getModule("ccb6ad93");


		
			// window.setInterval(function() { window.gameVars.Game.updateTeamTab = true; }, 1000);
        }
    }, ["webpack_inject"]);

})();
