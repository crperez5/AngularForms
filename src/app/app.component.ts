import { Component, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'app';
  @ViewChild('formRef') form;
  locations = ['Home', 'Away'];
  
  ngAfterViewInit() {
    Observable.combineLatest(
      this.form.valueChanges,
      this.form.statusChanges,
    (value, status) => ({ value, status })
  )
  .filter(c => c.status === 'VALID')
  .subscribe(c => console.table(c.value));
   }

  onSubmit(postedValues) {
    alert(JSON.stringify(postedValues));
  }
}
