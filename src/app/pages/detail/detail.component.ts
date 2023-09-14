import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  protected historyService = inject(HistoryService);
  protected route = inject(ActivatedRoute);
  protected articleId!: number;

  ngOnInit() {
    this.articleId = this.route.snapshot.params['articleId'];
    this.historyService.history.push(this.articleId);
  }
}
