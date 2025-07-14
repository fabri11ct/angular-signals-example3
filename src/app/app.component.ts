import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  products = signal([
    { id: 1, name: 'Milk', price: 1.45},
    { id: 2, name: 'Bread', price: 3.90},
    { id: 3, name: 'Tomatoes', price: 2.20}
  ]);

  filterName = signal('');

  filteredProduct = computed(() => {

    return this.products().filter(product => 
      product.name.toLowerCase()
      .includes(this.filterName().toLowerCase()))
 });

 changeFilter(event:Event){
  let newFilterName = (event.target as HTMLInputElement).value;
  this.filterName.set(newFilterName);

 };

}
