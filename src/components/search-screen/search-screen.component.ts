import { Component, Input, ViewChild } from '@angular/core';
import { Content, ViewController, NavParams } from 'ionic-angular';
import { KeyValue } from '../../models/keyValue';

const HTML_TEMPLATE = `
<ion-header>

    <ion-navbar navbar>
        <button ion-button clear style="color: white;" (click)="closePage()">
            <ion-icon name="arrow-round-back"></ion-icon>
        </button>
        <ion-title>
            {{label}}
        </ion-title>

    </ion-navbar>

    <ion-searchbar [placeholder]="'Digite para pesquisar'" (ionInput)="filterData($event)"
        (ionClear)="initializeFilter()"></ion-searchbar>

</ion-header>

<ion-content #content>

    <ion-list radio-group [(ngModel)]="model">

        <ion-item *ngFor="let item of dataFiltered" id="item-{{item.id}}">

            <ion-radio [value]="item.id" item-left>
            </ion-radio>

            <ion-label item-right text-wrap>
                {{item.id}} - {{item.value}}
            </ion-label>

        </ion-item>

        <ion-item *ngIf="dataFiltered.length == 0">

            <ion-label text-center>
                Nenhum resultado encontrado.
            </ion-label>

        </ion-item>

    </ion-list>

    <ion-fab right bottom>
        <button color="primary" ion-fab mini (click)="pageScroller()">
            <ion-icon name="ios-arrow-up"></ion-icon>
        </button>
    </ion-fab>

</ion-content>

<ion-footer class="buttonContainer">
    <ion-toolbar color="primary">
        <div style="text-align: center;">
            <ion-buttons>
                <button ion-button icon-right (click)="selectItem()">
                    Confirmar
                    <ion-icon name="ios-checkmark"></ion-icon>
                </button>
            </ion-buttons>
        </div>
    </ion-toolbar>
</ion-footer>
`;

const CSS_STYLE = `
search-screen {

    input {
        margin-left: 0px !important;
    }

    
    ion-navbar {

        button {
            z-index: 9999999999 !important;
        }

        ion-title {
            position: absolute;
            top: 0;
            left: 0;
            padding: 0 90px 1px;
            width: 100%;
            height: 100%;
            text-align: center;
          }
    }

}
`;

@Component({
    selector: 'search-screen',
    template: HTML_TEMPLATE,
    styles: [CSS_STYLE]
})
export class SearchScreenComponent {

    @ViewChild(Content) content: Content;

    dataFiltered = [];
    model: number;
    data: KeyValue[];
    selected?: number;
    label: string;

    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams
    ) {
        this.data = this.navParams.get('data');
        this.selected = this.navParams.get('selected');
        this.label = this.navParams.get('label');

        if (this.selected) {
            this.model = this.selected;
        }

        this.data = this.data.sort((a, b) => 0 - (a.id > b.id ? -1 : 1));
    }

    ngOnInit(): void {
        this.initializeFilter();
    }

    ionViewDidLoad(): void {
        if (this.model) {
            const element = document.getElementById(`item-${this.model}`);
            const position = element.getBoundingClientRect().top - element.offsetHeight;

            setTimeout(() => {
                this.content.scrollTo(0, position);
            }, 250);
        }
    }

    pageScroller() {
        this.content.scrollToTop();
    }

    filterData(event: any) {
        let val = event.target.value;

        if (val !== undefined) {
            if (val && val.trim() !== '') {
                val = val.toLowerCase();
            }

            this.dataFiltered = this.data.filter(item => {
                const label = `${item.id} - ${item.value}`.toLowerCase();
                return label.includes(val);
            });
        }
    }

    initializeFilter() {
        this.dataFiltered = this.data;
    }

    selectItem() {
        this.viewCtrl.dismiss(this.model);
    }

    closePage() {
        this.viewCtrl.dismiss();
    }
}
