import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ConfirmationPopupComponent } from "../shared/confirmation-popup/confirmation-popup.component";


@Injectable()
export class PopupService {
  constructor(private dialog: MatDialog){}
  
  public confirmationPopup(message: string) {
    let confirmationPopup: MatDialogRef<ConfirmationPopupComponent>;
    confirmationPopup = this.dialog.open(ConfirmationPopupComponent);
    confirmationPopup.componentInstance.message = message;

    return confirmationPopup.afterClosed();
  }
}
