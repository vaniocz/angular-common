import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {WithLoadingPipe} from './pipes/with-loading-pipe';

@NgModule({
    imports: [CommonModule],
    exports: [WithLoadingPipe],
    declarations: [WithLoadingPipe],
})
export class AngularCommonModule {}
