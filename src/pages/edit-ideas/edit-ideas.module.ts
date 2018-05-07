import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditIdeasPage } from './edit-ideas';

@NgModule({
  declarations: [
    EditIdeasPage,
  ],
  imports: [
    IonicPageModule.forChild(EditIdeasPage),
  ],
})
export class EditIdeasPageModule {}
