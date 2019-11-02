import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TornService } from './torn.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'torn-user',
    templateUrl: './torn-user.component.html'
})
export class TornUserComponent implements OnInit {
    math = Math;
    public userSearchForm: FormGroup;
    public userData: any;

    ngOnInit() {
        this.userSearchForm = this.formBuilder.group({
            userId: ['', Validators.required]
        });
    }

    constructor(private formBuilder: FormBuilder, private tornService: TornService) {
    }

    sendToTorn(formValues) {
        this.tornService
            .getUserSearchInfo(formValues.userId)
            .subscribe(data => {
                this.userData = data;
                console.log(this.userData);
            });
    }

    getLife() {
        return this.userData.life.current / this.userData.life.maximum * 100;
    }
}
