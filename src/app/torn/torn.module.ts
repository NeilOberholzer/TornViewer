import { ReactiveFormsModule } from '@angular/forms';
import { TornService } from './torn.service';
import { TornUserComponent } from './torn-user.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        TornUserComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [TornService]
})
export class TornModule { }
