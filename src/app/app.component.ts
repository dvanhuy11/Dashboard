import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UploadImageComponent } from './upload-image/upload-image.component';
import { DetectFaceComponent } from './detect-face/detect-face.component';
import { ComparasionComponent } from './comparasion/comparasion.component';
import { ExtractFeatureComponent } from './extract-feature/extract-feature.component';
import { InsertToDBComponent } from './insert-to-db/insert-to-db.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DragDropModule,
    UploadImageComponent,
    DetectFaceComponent,
    ComparasionComponent,
    ExtractFeatureComponent,
    InsertToDBComponent,
    SideNavComponent,
    MenubarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ['Upload File', 'Extract features', 'Detect Face', 'Compare', 'Insert DB', 'Contact'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  trackItem(index: number, item: string): string {
    return item;
  }
}