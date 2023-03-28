import { take } from "rxjs";
import { AuthService } from "../modules/auth/services/auth.service";
import { UserService } from "../services/user.service";

export function appInitializer(authService: AuthService, userService: UserService) {
  return () => {
    return new Promise<void>((resolve) => {
      if (!authService.isAuthenticated) {
        resolve();
        return;
      }
      userService.getMe().pipe(
        take(1)
      ).subscribe({
        next: () => { resolve(); },
        error: () => {
          authService.logout();
          resolve();
        },
      })

    })
  }
}