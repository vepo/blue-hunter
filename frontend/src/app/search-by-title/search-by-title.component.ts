import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search-by-title',
  templateUrl: './search-by-title.component.html',
  styleUrls: ['./search-by-title.component.less']
})
export class SearchByTitleComponent {
  private term: string;
  private lastSearchTerm: string;
  private books: any = null;
  private loading: boolean = false;
  constructor(private bookService: BookService) { }

  search() {
    this.lastSearchTerm = this.term;
    this.loading = true;
    this.bookService.search(this.term).subscribe(books => {
      this.books = books;
      this.loading = false;
    });
  }

}
