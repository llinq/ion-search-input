import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        SearchInputComponent,
        SearchScreenComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        SearchInputComponent,
        SearchScreenComponent
    ],
    entryComponents: [
        SearchScreenComponent
    ]
})
export class IonSearchInputModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonSearchInputModule
        };
    }
}