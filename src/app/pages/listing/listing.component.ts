import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../../data.json';
import { ArticleItemComponent } from '../../components/article-item/article-item.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HistoryComponent } from '../../components/history/history.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent, RouterLink, HistoryComponent, FilterComponent],
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit, OnDestroy {
  protected data = new BehaviorSubject<any | undefined>(undefined);
  protected listDelay?: number;
  private subscription?: Subscription;

  protected trackFn: TrackByFunction<any> = (i, e: {id: string}) => e.id ;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.listDelay = params['listDelay'];
      setTimeout(() => this.data.next(data), this.listDelay);
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
