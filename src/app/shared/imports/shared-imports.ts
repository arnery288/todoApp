// Angular
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { IconField } from 'primeng/iconfield';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIcon } from 'primeng/inputicon';
import { InputMask } from 'primeng/inputmask';
import { InputNumber } from 'primeng/inputnumber';

// Components
import { LayoutComponent } from "@core/pages/home/layout.component";

// Export all imports as an array
export const SHARED_IMPORTS = [
  ButtonModule,
  FloatLabel,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  IconField,
  InputGroup,
  InputGroupAddonModule,
  InputIcon,
  InputMask,
  InputNumber,
  LayoutComponent,
];
