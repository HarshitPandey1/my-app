import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../../../services/contact-form/contact-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];

  constructor(private contactService: ContactFormService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    });
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
