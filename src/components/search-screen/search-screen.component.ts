import { Component, Input, ViewChild } from '@angular/core';
import { Content, ViewController, NavParams } from 'ionic-angular';
import { KeyValue } from '../../models/keyValue';

@Component({
    selector: 'search-screen',
    templateUrl: 'search-screen.component.html'
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
