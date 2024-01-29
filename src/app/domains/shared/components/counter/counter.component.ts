import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor() {
    //no async
    //before render
    //corre una vez
    console.log('constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChange) {
    //before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes)
  }

  ngOnInit() {
    //async, then, subs
    //after render
    //corre una vez, tiene los valores iniciales
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit() {
    //after render
    //pregunta si los hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
