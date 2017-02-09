import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';

import { CompatibilityModule } from './ng2-app/compatibility/compatibility.module';

platformBrowserDynamic().bootstrapModule(CompatibilityModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['ng1App']);
});