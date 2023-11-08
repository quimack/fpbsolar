import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('0.8s ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0s ease-in-out', style({ opacity: 0 })),
  ]),
]);