import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddContactsPage } from './add-contacts';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@NgModule({
  declarations: [
    AddContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddContactsPage),
  ],
})
export class AddContactsPageModule {}
