import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MyObjectListRouting } from './object-list-routing.module';
import { MyObjectListComponent } from './component/list/object-list.component';
import { MyObjectItemComponent } from './component/item/object-item.component';

@NgModule({
    imports: [CommonModule,   MyObjectListRouting],
    exports: [ MyObjectListComponent, MyObjectItemComponent],
    declarations: [ MyObjectListComponent , MyObjectItemComponent],
    providers: [],
})
export class MyObjectListModule { }