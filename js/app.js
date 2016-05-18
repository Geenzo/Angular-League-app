var myapp = angular.module('leagueapp', []);


myapp.controller('leaguecontroller', function ($scope) {

$scope.showData = function() {

	$scope.itemsPerPage = 3;
	$scope.currentPage = 0;
		$scope.datalists = [
		{ "name": "Aatrox","img":"img/Aatrox.png","role":"Top"},
		{ "name": "Ahri","img":"img/Ahri.png","role":"Mid"},
		{ "name": "Akali","img":"img/Akali.png","role":"Top, Mid, Assassin"},
		{ "name": "Alistar","img":"img/Alistar.png","role":"Support"},
		{ "name": "Amumu","img":"img/Amumu.png","role":"Jungle"},
		{ "name": "Anivia","img":"img/Anivia.png","role":"Mid"},
		{ "name": "Annie","img":"img/Annie.png","role":"Mid, Support"},
		{ "name": "Ashe","img":"img/Ashe.png","role":"ADC, Marksman"},
		{ "name": "AurelionSol","img":"img/AurelionSol.png","role":"Mid"},
		{ "name": "Azir","img":"img/Azir.png","role":"Mid"},
		{ "name": "Bard","img":"img/Bard.png","role":"Support"},
		{ "name": "Blitzcrank","img":"img/Blitzcrank.png","role":"Support"},
		{ "name": "Brand","img":"img/Brand.png","role":"Mid, Support"},
		{ "name": "Braum","img":"img/Braum.png","role":"Support"},
		{ "name": "Caitlyn","img":"img/Caitlyn.png","role":"ADC, Marksman"},
		{ "name": "Cassiopeia","img":"img/Cassiopeia.png","role":"Mid"},
		{ "name": "Chogath","img":"img/Chogath.png","role":"Top, Mid"},
		{ "name": "Corki","img":"img/Corki.png","role":"ADC, Marksman"},
		{ "name": "Darius","img":"img/Darius.png","role":"Top"},
		{ "name": "Diana","img":"img/Diana.png","role":"Mid"},
		{ "name": "Draven","img":"img/Draven.png","role":"ADC, Marksman"},
		{ "name": "DrMundo","img":"img/DrMundo.png","role":"Top"},
		{ "name": "Ekko","img":"img/Ekko.png","role":"Top, Mid, Jungle"},
		{ "name": "Elise","img":"img/Elise.png","role":"Jungle"},
		{ "name": "Evelynn","img":"img/Evelynn.png","role":"Jungle"},
		{ "name": "Ezreal","img":"img/Ezreal.png","role":"ADC, Marksman"},
		{ "name": "FiddleSticks","img":"img/FiddleSticks.png","role":"Jungle"},
		{ "name": "Fiora","img":"img/Fiora.png","role":"Top"},
		{ "name": "Fizz","img":"img/Fizz.png","role":"Mid"},
		{ "name": "Galio","img":"img/Galio.png","role":"Mid"},
		{ "name": "Gangplank","img":"img/Gangplank.png","role":"Top"},
		{ "name": "Garen","img":"img/Garen.png","role":"Top"},
		{ "name": "Gnar","img":"img/Gnar.png","role":"Top"},
		{ "name": "Gragas","img":"img/Gragas.png","role":"Jungle"},
		{ "name": "Graves","img":"img/Graves.png","role":"Jungle, Top, ADC, Marksman"},
		{ "name": "Hecarim","img":"img/Hecarim.png","role":"Jungle"},
		{ "name": "Heimerdinger","img":"img/Heimerdinger.png","role":"Mid"},
		{ "name": "Illaoi","img":"img/Illoai.png","role":"Top"},
		{ "name": "Irelia","img":"img/Irelia.png","role":"Top"},
		{ "name": "Janna","img":"img/Janna.png","role":"Support"},
		{ "name": "JarvanIV","img":"img/JarvanIV.png","role":"Jungle, Top"},
		{ "name": "Jax","img":"img/Jax.png","role":"Top"},
		{ "name": "Jayce","img":"img/Jayce.png","role":"Top"},
		{ "name": "Jhin","img":"img/Jhin.png","role":"ADC, Marksman"},
		{ "name": "Jinx","img":"img/Jinx.png","role":"ADC, Marksman"},
		{ "name": "Kalista","img":"img/Kalista.png","role":"ADC, Marksman"},
		{ "name": "Karma","img":"img/Karma.png","role":"Mid, Support"},
		{ "name": "Karthus","img":"img/Karthus.png","role":"Mid"},
		{ "name": "Kassadin","img":"img/Kassadin.png","role":"Mid"},
		{ "name": "Katarina","img":"img/Katarina.png","role":"Mid, Assasin"},
		{ "name": "Kayle","img":"img/Kayle.png","role":"Top, Mid"},
		{ "name": "Kennen","img":"img/Kennen.png","role":"Top"},
		{ "name": "Khazix","img":"img/Khazix.png","role":"Jungle"},
		{ "name": "Kindred","img":"img/Kindred.png","role":"Jungle"},
		{ "name": "KogMaw","img":"img/KogMaw.png","role":"ADC, Marksman"},
		{ "name": "Leblanc","img":"img/Leblanc.png","role":"Mid, Assasin"},
		{ "name": "LeeSin","img":"img/LeeSin.png","role":"Jungle, Top"},
		{ "name": "Leona","img":"img/Leona.png","role":"Support"},
		{ "name": "Lissandra","img":"img/Lissandra.png","role":"Mid, Top"},
		{ "name": "Lucian","img":"img/Lucian.png","role":"ADC, Marksman"},
		{ "name": "Lulu","img":"img/Lulu.png","role":"Mid, Support"},
		{ "name": "Lux","img":"img/Lux.png","role":"Mid"},
		{ "name": "Malphite","img":"img/Malphite.png","role":"Top"},
		{ "name": "Malzahar","img":"img/Malzahar.png","role":"Mid, Jungle"},
		{ "name": "Maokai","img":"img/Maokai.png","role":"Top"},
		{ "name": "MasterYi","img":"img/MasterYi.png","role":"Jungle"},
		{ "name": "MissFortune","img":"img/MissFortune.png","role":"ADC, Marksman"},
		{ "name": "Mordekaiser","img":"img/Mordekaiser.png","role":"Top, Jungle, Mid"},
		{ "name": "Morgana","img":"img/Morgana.png","role":"Mid, Support"},
		{ "name": "Nami","img":"img/Nami.png","role":"Support"},
		{ "name": "Nasus","img":"img/Nasus.png","role":"Top"},
		{ "name": "Nautilus","img":"img/Nautilus.png","role":"Support"},
		{ "name": "Nidalee","img":"img/Nidalee.png","role":"Top, Jungle"},
		{ "name": "Nocturne","img":"img/Nocturne.png","role":"Jungle"},
		{ "name": "Nunu","img":"img/Nunu.png","role":"Jungle, Support"},
		{ "name": "Olaf","img":"img/Olaf.png","role":"Top"},
		{ "name": "Orianna","img":"img/Orianna.png","role":"Mid"},
		{ "name": "Pantheon","img":"img/Pantheon.png","role":"Top, Jungle"},
		{ "name": "Poppy","img":"img/Poppy.png","role":"Top, Jungle"},
		{ "name": "Quinn","img":"img/Quinn.png","role":"Top, Jungle, ADC, Marksman"},
		{ "name": "Rammus","img":"img/Rammus.png","role":"Top, Jungle"},
		{ "name": "RekSai","img":"img/RekSai.png","role":"Jungle"},
		{ "name": "Renekton","img":"img/Renekton.png","role":"Top"},
		{ "name": "Rengar","img":"img/Rengar.png","role":"Jungle"},
		{ "name": "Riven","img":"img/Riven.png","role":"Top"},
		{ "name": "Rumble","img":"img/Rumble.png","role":"Top"},
		{ "name": "Ryze","img":"img/Ryze.png","role":"Top, Mid"},
		{ "name": "Sejuani","img":"img/Sejuani.png","role":"Jungle"},
		{ "name": "Shaco","img":"img/Shaco.png","role":"Jungle"},
		{ "name": "Shen","img":"img/Shen.png","role":"Top, Support"},
		{ "name": "Shyvana","img":"img/Shyvana.png","role":"Jungle"},
		{ "name": "Singed","img":"img/Singed.png","role":"Top"},
		{ "name": "Sion","img":"img/Sion.png","role":"Top"},
		{ "name": "Sivir","img":"img/Sivir.png","role":"ADC, Marksman"},
		{ "name": "Skarner","img":"img/Skarner.png","role":"Jungle"},
		{ "name": "Sona","img":"img/Sona.png","role":"Support"},
		{ "name": "Soraka","img":"img/Soraka.png","role":"Support"},
		{ "name": "Swain","img":"img/Swain.png","role":"Mid"},
		{ "name": "Syndra","img":"img/Syndra.png","role":"Mid"},
		{ "name": "TahmKench","img":"img/TahmKench.png","role":"Support"},
		{ "name": "Talon","img":"img/Talon.png","role":"Mid, Assasin"},
		{ "name": "Taric","img":"img/Taric.png","role":"Support"},
		{ "name": "Teemo","img":"img/Teemo.png","role":"Top"},
		{ "name": "Tresh","img":"img/Tresh.png","role":"Support"},
		{ "name": "Tristana","img":"img/Tristana.png","role":"ADC, Marksman"},
		{ "name": "Trundle","img":"img/Trundle.png","role":"Top, Jungle"},
		{ "name": "Tryndamere","img":"img/Tryndamere.png","role":"Top"},
		{ "name": "TwistedFate","img":"img/TwistedFate.png","role":"Mid"},
		{ "name": "Twitch","img":"img/Twitch.png","role":"ADC, Marksman"},
		{ "name": "Udyr","img":"img/Udyr.png","role":"Jungle"},
		{ "name": "Urgot","img":"img/Urgot.png","role":"ADC, Marksman"},
		{ "name": "Varus","img":"img/Varus.png","role":"ADC, Marksman"},
		{ "name": "Vayne","img":"img/Vayne.png","role":"ADC, Marksman"},
		{ "name": "Veigar","img":"img/Veigar.png","role":"Mid"},
		{ "name": "Velkoz","img":"img/Velkoz.png","role":"Mid, Support"},
		{ "name": "Vi","img":"img/Vi.png","role":"Jungle"},
		{ "name": "Viktor","img":"img/Viktor.png","role":"Mid"},
		{ "name": "Vladimir","img":"img/Vladimir.png","role":"Top, Mid"},
		{ "name": "Volibear","img":"img/Volibear.png","role":"Jungle"},
		{ "name": "Warwick","img":"img/Warwick.png","role":"Jungle"},
		{ "name": "Xerath","img":"img/Xerath.png","role":"Mid"},
		{ "name": "XinZhao","img":"img/XinZhao.png","role":"Top, Jungle"},
		{ "name": "Yasuo","img":"img/Yasuo.png","role":"Top, Mid"},
		{ "name": "Yorick","img":"img/Yorick.png","role":"Top"},
		{ "name": "Zac","img":"img/Zac.png","role":"Top, Jungle"},
		{ "name": "Zed","img":"img/Zed.png","role":"Mid"},
		{ "name": "Ziggs","img":"img/Ziggs.png","role":"Mid"},
		{ "name": "Zilean","img":"img/Zilean.png","role":"Mid, Support"},
		{ "name": "Zyra","img":"img/Zyra.png","role":"Mid, Support"},
    ];
};
});