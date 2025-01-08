import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { IconField } from 'primeng/iconfield';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { InputIcon } from 'primeng/inputicon';
import { InputNumber } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';

// Components
import { LayoutComponent } from "@core/pages/home/layout.component";

@Component({
  selector: 'app-test7',
  standalone: true,
  imports: [
    ButtonModule,
    FloatLabel,
    IconField,
    InputGroup,
    InputGroupAddonModule,
    InputIcon,
    InputNumber,
    LayoutComponent,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <app-layout />

    <div class="card flex justify-center">
      <p-button
        [raised]="true"
        class="p-8"
        icon="pi pi-amazon"
        iconPos="right"
        label="Submit"
        rounded="true"
        severity="primary"
        size="small"
        variant="outlined">
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      </p-button>
    </div>

    <p-floatlabel variant="on">
        <label for="username">Username</label>
    </p-floatlabel>

    <div class="flex">
      <p-floatlabel variant="on">
        <p-iconfield>
            <input id="loader" type="text" pInputText size="large" />
            <p-inputicon styleClass="pi pi-spinner pi-spin" />
        </p-iconfield>
        <label for="loader">Loader</label>
      </p-floatlabel>
    </div>

    <p-inputgroup>
      <p-inputgroup-addon>
        <i class="pi pi-calendar"></i>
      </p-inputgroup-addon>
    </p-inputgroup>

    <div class="card flex justify-center">
        <form [formGroup]="formGroup">
            <p-inputnumber inputId="integeronly" formControlName="value2" />
        </form>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test7Component implements OnInit {
  formGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      value2: new FormControl(123456)
    });
  }

  value: string | undefined;
  text1: string | undefined;
  text2: string | undefined;
}
