import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { CoreComponentsModule } from './core/core.module';


platformBrowserDynamic().bootstrapModule(CoreComponentsModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['ng1App']);
});