angular.module('KillDeath').controller('KillDeathPostController', function(stats) {
	var self = this;

	self.newKills = 1;
	self.newDeaths = 1;

	self.addStat = function(k, d) {
		stats.add(k, d);
		self.newKills = 1;
		self.newDeaths = 1;
	}
});
