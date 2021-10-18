import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [],
})
export class Pagina1Component
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnChanges,
    OnDestroy
{
  nombre: string = 'Gustavo';
  segundos: number = 0;
  timerSubsription!: Subscription;

  constructor() {
    console.log('constructor');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInitg');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    this.timerSubsription.unsubscribe();
    console.log('Timer limpado');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.timerSubsription = interval(1000).subscribe((i) => {
      this.segundos = i;
    });
  }

  guardar() {}
}
