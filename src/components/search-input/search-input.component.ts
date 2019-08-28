import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { SearchScreenComponent } from '../search-screen/search-screen.component';
import { KeyValue } from '../../models/keyValue';

@Component({
    selector: 'search-input',
    templateUrl: 'search-input.component.html'
})
export class SearchInputComponent implements OnInit {

    @Input('label') label: string;
    @Input('mock') mock: boolean;
    @Input('data') data: KeyValue[];
    @Input('model') model: number;

    @Output('selectedEvent') selectedEvent = new EventEmitter();

    itemSelected: any;

    constructor(
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
        if (this.mock) {
            this.data = KeyValue.mock();
        }

        if (this.model) {
            this.selectItem(this.model);
        }
    }

    openFilter() {
        const modal = this.modalCtrl.create(SearchScreenComponent,
            {
                data: this.data,
                selected: this.model,
                label: this.label
            },
            {
                showBackdrop: false
            }
        );

        modal.present();

        modal.onWillDismiss(data => {
            if (data) {
                this.selectItem(data);
                this.selectedEvent.emit(data);
            }
        });
    }

    selectItem(id: number) {
        if (this.data && this.data.length > 0) {
            this.model = id;
            const selectedData = this.data.filter(item => item.id === id)[0];
            this.itemSelected = `${selectedData.id} - ${selectedData.value}`;
        }
        else {
            setTimeout(() => {
                this.selectItem(id);   
            });
        }
    }
}
