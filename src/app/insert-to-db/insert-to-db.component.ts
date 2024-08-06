import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-to-db',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './insert-to-db.component.html',
  styleUrl: './insert-to-db.component.css'
})
export class InsertToDBComponent {

}
