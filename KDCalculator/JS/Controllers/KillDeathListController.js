angular.module('KillDeath').controller('KillDeathListController', function(stats) {
	var self = this;

	self.stats = stats.list;
});