import { Component, OnInit } from '@angular/core';
import 'web-component-sdk/dist/index'

@Component({
  selector: 'app-support-bot',
  templateUrl: './support-bot.component.html',
  styleUrls: ['./support-bot.component.css']
})
export class SupportBotComponent implements OnInit {
  theme = '{"palette":{"primary":{"main":"#0d6efd"},"secondary":{"main":"#e5ecff"}}}'

  constructor() { }


  ngOnInit(): void {
    console.log(customElements.get('support-bot'));
  }

}
