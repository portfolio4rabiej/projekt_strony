import { Component } from '@angular/core';
import { VintedService } from './vinted.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent {
  constructor(private vintedService: VintedService) {}

  updateItems() {
    const items = [
      {
        accepted: true,
        item_id: "4d8cd62e-a579-4dae-af8c-3172f96f8f7c"
      }
    ];

    this.vintedService.updateItems(items).subscribe(response => {
      console.log('Items updated:', response);
    }, error => {
      console.error('Error updating items:', error);
    });
  }
}
