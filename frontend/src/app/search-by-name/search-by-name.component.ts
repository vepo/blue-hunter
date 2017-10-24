import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.less']
})
export class SearchByNameComponent {

  private term: string;
  private lastSearchTerm: string;
  private clients: any = null;
  private loading: boolean = false;
  constructor(private clientService: ClientService) { }

  search() {
    this.lastSearchTerm = this.term;
    this.loading = true;
    this.clientService.search(this.term).subscribe(clients => {
      this.clients = clients;
      this.loading = false;
    });
  }
}
