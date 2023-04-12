import { IndividualConfig } from 'ngx-toastr';
import { NotificationTypes } from './notification-types.model';

export interface INotificationConfig {
  type: NotificationTypes;
  message: string | string[];
  title?: string;
  overrideConfig?: Partial<IndividualConfig>;
}
