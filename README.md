# ion-search-input
A simple ionic search component that renders an input to display the value as well as a search page.

### How to use
`npm install ion-search-input --save`

###### Import in module
```javascript
import { IonSearchInputModule } from 'ion-search-input';

@NgModule({
	//...
  imports: [
	//...
    IonSearchInputModule
  ],
  //...
})
export class AppModule {}
```

###### View
    <ion-search-input [label]="'Teste'" [mock]="true" (selectedEvent)="test($event)"></ion-search-input>`

### Input Properties
| Attr | Type | Details |
| ------------ | ------------ | ------------ |
| label | `string` | Label that is displayed on the input as well as the navbar title (search screen). |
| mock  | `boolean`   | If true, will populate the input data with a mocked JSON that exists in the keyValue class. Default: `false`   |
| data | `keyValue[]` | JSON which will render the component options, the properties are id: number, value: string. More information in keyValue section. |
| model | `number` | Default value selected. |
| placeholder | `string`  | Input Placeholder. Default: `'Click to search'` |

### Output Events
| Attr | Details |
| ------------ | ------------ |
| selectedEvent | Event triggered when selecting a radio and clicking the save button. The `id` of the selected option is sent. |

### Screenshots
<img src="https://i.ibb.co/FBxXrW3/localhost-8100.png" width="150" />
<img src="https://i.ibb.co/L8GVrCy/localhost-8100-1.png" width="150" />
<img src="https://i.ibb.co/sg7C9fm/localhost-8100-2.png" width="150" />
<img src="https://i.ibb.co/MghwhGj/localhost-8100-3.png" width="150" />


