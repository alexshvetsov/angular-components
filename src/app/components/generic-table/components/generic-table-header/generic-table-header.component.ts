import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';
import { GenericTableService } from '../../generic-table.service';

@Component({
  selector: 'app-generic-table-header',
  standalone: false,
  templateUrl: './generic-table-header.component.html',
  styleUrl: './generic-table-header.component.scss',
})
export class GenericTableHeaderComponent {
  searchControl: FormControl = new FormControl('');
  tooltipOpen: boolean = false;

  private searchSubscription$!: Subscription;

  constructor(private genericTableService: GenericTableService) {}

  ngOnInit(): void {
    this.searchSubscription$ = this.searchControl.valueChanges
      .pipe(
        filter((value) => !!value && value.length > 2),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.genericTableService.searchValue.value$ = value || '';
      });
  }

  ngOnDestroy(): void {
    this.searchSubscription$.unsubscribe();
  }

  toggleTooltip(event: MouseEvent): void {
    event.stopPropagation();
    this.tooltipOpen = !this.tooltipOpen;
  }

  closeTooltip(): void {
    this.tooltipOpen = false;
  }
}
