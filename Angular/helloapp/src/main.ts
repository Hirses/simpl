import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModules } from './app/app.modules'
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModules);