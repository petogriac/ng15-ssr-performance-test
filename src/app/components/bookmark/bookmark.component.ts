import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarkComponent {
  @HostListener('click') onClick() {
    console.log('Bookmark clicked for id: ' + this.id);
  }
  @Input() id!: number;
}
