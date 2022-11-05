import { NgModule } from '@angular/core';

//PtimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Fieldset, FieldsetModule} from 'primeng/fieldset';
import { Menubar, MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }