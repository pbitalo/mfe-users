import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { ApplicationType } from '@entities/application-type';
import { ThemeService } from '../services/theme.service';

export const canActivateGuard: CanActivateFn = (_route, _state) => {
  let applicationService: ApplicationService = inject(ApplicationService);
  let themeService: ThemeService = inject(ThemeService);

  applicationService.setActiveApplication(
    _route.data['applicationType'] as ApplicationType
  );
  themeService.switchTheme(applicationService.getActiveApplication());
  console.log('_route = ', _route);
  console.log('_state = ', _state);
  console.log('applicationService = ', applicationService);
  console.log('applicationService = ', applicationService);
  return true;
};
