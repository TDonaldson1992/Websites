angular.module('KillDeath', ['ngCookies']);

angular.module('KillDeath').factory('stats', function() {
	var statList = {};

	statList.list = [];

	statList.add = function(k, d) {
		statList.list.push({id: statList.list.length, kills: k, deaths: d});
	}

	return statList;
});