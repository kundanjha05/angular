import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component'; // Import HelloComponent

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent // Add HelloComponent to declarations
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }