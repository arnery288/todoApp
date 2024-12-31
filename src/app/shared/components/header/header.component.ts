import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Menubar],
  template: `
    <div class="card">
        <p-menubar [model]="items" />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Login',
            icon: 'pi pi-home',
            routerLink: '/login',
            RouterLinkActive: 'active',
        },
        {
            label: 'Register',
            icon: 'pi pi-star',
            routerLink: '/register',
            RouterLinkActive: 'active',
        },
        {
            label: 'Tests',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Test 1',
                    icon: 'pi pi-bolt',
                    routerLink: '/test',
                    RouterLinkActive: 'active',
                },
                {
                    label: 'Test 2',
                    icon: 'pi pi-server',
                    routerLink: '/test2',
                    RouterLinkActive: 'active',
                },
                {
                    label: 'Test 3',
                    icon: 'pi pi-pencil',
                    routerLink: '/test3',
                    RouterLinkActive: 'active',
                },
                {
                    label: 'Test 4',
                    icon: 'pi pi-pencil',
                    routerLink: '/test4',
                    RouterLinkActive: 'active',
                },
                {
                    label: 'Test 5',
                    icon: 'pi pi-pencil',
                    routerLink: '/test5',
                    RouterLinkActive: 'active',
                },
                {
                    label: 'Test 6',
                    icon: 'pi pi-pencil',
                    routerLink: '/test6',
                    RouterLinkActive: 'active',
                },
                {
                    label: 'Test 7',
                    icon: 'pi pi-pencil',
                    routerLink: '/test7',
                    RouterLinkActive: 'active',
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'control-flow',
            icon: 'pi pi-check',
            routerLink: '/control-flow',
            RouterLinkActive: 'active'
        },
        {
            label: 'alert',
            icon: 'pi pi-times',
            routerLink: '/alert',
            RouterLinkActive: 'active'
        },
        {
            label: 'table',
            icon: 'pi pi-user',
            routerLink: '/table',
            RouterLinkActive: 'active'
        },
        {
            label: '404',
            icon: 'pi pi-envelope',
            routerLink: '/404',
            RouterLinkActive: 'active'
        }
    ]
  }
}
