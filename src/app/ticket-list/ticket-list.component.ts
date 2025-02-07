import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';


interface Ticket {
  id: string;
  subject: string;
  assigned: string;
  createdDate: string;
  status: string;
}

@Component({
  selector: 'app-ticket-list',
  imports: [NgFor,CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  searchText: string = '';
  tickets: Ticket[] = [
    { id: '#Tc-00011', subject: 'Punching time not proper', assigned: 'Victor Rampling', createdDate: '25/02/2021', status: 'Completed' },
    { id: '#Tc-0002', subject: 'Internet Not Working', assigned: 'Joan Dyer', createdDate: '12/03/2021', status: 'In Progress' },
    { id: '#Tc-00021', subject: 'Leave Balance Wrong', assigned: 'Sally Graham', createdDate: '16/02/2021', status: 'Completed' },
    { id: '#Tc-0004', subject: 'Mouse Not Working', assigned: 'Phil Glover', createdDate: '16/03/2021', status: 'In Progress' },
    { id: '#Tc-00041', subject: 'Display Blur', assigned: 'Robert Anderson', createdDate: '18/01/2021', status: 'Completed' },
    { id: '#Tc-0006', subject: 'Salary Amount Wrong', assigned: 'Ryan Randall', createdDate: '12/03/2021', status: 'In Progress' }
  ];

  get filteredTickets() {
    return this.tickets.filter(ticket =>
      ticket.subject.toLowerCase().includes(this.searchText.toLowerCase()) ||
      ticket.id.toLowerCase().includes(this.searchText.toLowerCase()) ||
      ticket.assigned.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  editTicket(ticket: Ticket) {
    alert(`Editing Ticket: ${ticket.id}`);
  }

  deleteTicket(ticket: Ticket) {
    if (confirm(`Are you sure you want to delete ${ticket.id}?`)) {
      this.tickets = this.tickets.filter(t => t !== ticket);
    }
  }


}
