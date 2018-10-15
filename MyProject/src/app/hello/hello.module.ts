import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { NameComponent } from './name/name.component';


@NgModule({
  declarations: [ 
    HelloComponent,
    NameComponent
   ],
  imports: [ ],
  providers: [],
  bootstrap: [],
  exports: [ HelloComponent, NameComponent ]
})
export class HelloModule { }
