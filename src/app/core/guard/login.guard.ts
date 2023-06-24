import { inject } from "@angular/core";
import { CanMatchFn, Router, UrlSegment } from "@angular/router";
import { STORAGE } from "@constants/app.constant";
import { StorageService } from "@services/storage.service";

export const LoginGuard: CanMatchFn = (_, segments: UrlSegment[]) => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  const token = storageService.get(STORAGE.TOKEN);

  if (!token || checkRoute(segments, 'logout')) {
    return true;
  }
  router.navigate(['/']);
  return false;
};

const checkRoute = (segments: UrlSegment[], route: string) => {
  return segments.some((segment) => segment.path.includes(route));
};
