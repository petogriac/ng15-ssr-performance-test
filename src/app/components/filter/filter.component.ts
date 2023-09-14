import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Input() subcategory?: string;

  protected onSubmit(event: any) {
    console.log('submit')
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    console.log(formData.get('subcategory'), formData.get('address'), formData.get('type'))
  }
}
