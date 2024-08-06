import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-extract-feature',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './extract-feature.component.html',
  styleUrl: './extract-feature.component.css'
})
export class ExtractFeatureComponent {

}
