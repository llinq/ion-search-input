import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { SearchScreenComponent } from '../search-screen/search-screen.component';
import { KeyValue } from '../../models/keyValue';

const HTML_TEMPLATE = `
<ion-list>

  <ion-item class="item-input" (click)="openFilter()">

    <ion-label stacked>
      {{label}}
    </ion-label>

    <ion-label style="color: #999;" *ngIf="!itemSelected" text-wrap>
      Clique para pesquisar
    </ion-label>

    <ion-label *ngIf="itemSelected" text-wrap>
      {{itemSelected}}
    </ion-label>

    <button ion-button color="primary" type="button" item-right class="icon-btn">
      <ion-icon name="search" *ngIf="!itemSelected"></ion-icon>
      <ion-icon name="create" *ngIf="itemSelected"></ion-icon>
    </button>
  </ion-item>

</ion-list>
`;
 
const CSS_STYLE = `
    search-input > .icon-btn {
        margin-bottom: 0px !important;
        margin-top: 0px !important;
        position: absolute;
        right: 0;
        bottom: 13px;
        padding-bottom: 0px !important;
        padding-top: 0px !important;
}
`;

@Component({
    selector: 'ion-search-input',
    template: HTML_TEMPLATE,
    styles: [CSS_STYLE]
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
