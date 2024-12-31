import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from "@shared/components/header/header.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent { }
