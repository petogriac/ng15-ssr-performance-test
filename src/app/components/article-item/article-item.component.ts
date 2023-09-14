import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from '../bookmark/bookmark.component';

@Component({
  selector: '[app-article-item]',
  standalone: true,
  imports: [CommonModule, BookmarkComponent],
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() isFirst!: boolean;
}
