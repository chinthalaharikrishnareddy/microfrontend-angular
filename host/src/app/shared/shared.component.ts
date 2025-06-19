import { Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  template: `<div class="shared-component">Shared Component</div>`,
  styles: [`.shared-component { padding: 10px; border: 1px solid #ccc; }`],
  standalone: false
})
export class SharedComponent {}
