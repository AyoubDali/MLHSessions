import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'app-root',
  template: `
  <div class="col-md-3" *ngFor="let item of item$ | async">
    <div class="grid1">
    <div class="view view-first">
            <div class="index_img"><img src="{{ item.img }}" class="img-responsive" alt=""/></div>
            <div class="mask">
                  <div class="info"><i class="search"><a href=""></a> </i>Link</div>
                  <ul class="mask_img">

                    <div class="clearfix"> </div>
                  </ul>
                 </div>
             </div>
             <i class=""></i>
     <div class="inner_wrap">
      <h3>{{ item.name }}</h3>

      <ul class="star1">
        <h4 class="green"></h4>
        <a class="yellow" href="{{ item.link }}"><h6 style="padding-bottom: -5%; color: red;">Link to the event </h6></a>
      </ul>
     </div>
     </div>
  </div>
  `
})

export class AppComponent {
  title = 'MLHSessions';
}
