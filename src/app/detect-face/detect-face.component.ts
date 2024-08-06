import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detect-face',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './detect-face.component.html',
  styleUrl: './detect-face.component.css'
})
export class DetectFaceComponent {

}
