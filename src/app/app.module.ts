import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainBoxComponent } from './main-box/main-box.component';
import { DetectFaceComponent } from './detect-face/detect-face.component';
import { ComparasionComponent } from './comparasion/comparasion.component';

@NgModule({
  declarations: [
    AppComponent,
    MDragDropModule,
    UploadImageComponent,
    DetectFaceComponent,
    ComparasionComponent,
    ExtractFeatureComponent,
    InsertToDBComponent,
    SideNavComponent,
    MenubarComponent,
    MainBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Required for Angular Material animations
    DragDropModule           // Import the DragDropModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
