import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem} from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule,CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})

export class SideNavComponent {
  data = ['Upload File', 'Extract features', 'Detect Face', 'Compare', 'Insert DB'];
  boxData: string[] = []; 
  constructor(private snackBar: MatSnackBar) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      // Kiểm tra số lượng phần tử trong main-box không được vượt quá số lượng trong data
      if (event.container.data.length >= this.data.length) {
        this.snackBar.open('Không thể thêm quá số lượng phần tử cho phép', 'Đóng', {
          duration: 5000, // Thời gian hiển thị thông báo là 3000 milliseconds
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      } else {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    } else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  trackItem(index: number, item: string): string {
    return item;
  }
}
