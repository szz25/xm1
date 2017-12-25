require('./js/dis/accordion');
require('./js/dis/main')
require('./js/dis/button');
require('./js/dis/uiRouter');
require('./js/dis/app');
angular.bootstrap(document.documentElement, ['bootstrapApp', 'mainC', 'appButton', 'uiRouter', 'app']);