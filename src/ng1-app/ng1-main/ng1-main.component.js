angular.module('ng1App').component('ng1Main', {
  controller: Ng1MainCtrl,
  templateUrl: './ng1-app/ng1-main/ng1-main.tpl.html'
});

function Ng1MainCtrl () {
  var vm = this;
  vm.name = 'Bob';

  vm.onClick = function (e) {
    alert(e);
  }
}