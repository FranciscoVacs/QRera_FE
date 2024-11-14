import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {
  constructor(private snackBar: MatSnackBar) {
    super();
  }
  override handleError(error: any): void {

       let errorMessage = 'An unknown error occurred';
      if (error instanceof HttpErrorResponse){
       if (error.status === 401) {
         errorMessage = '401: Unauthorized request. Please log in again.';
       } else if (error.status === 404) {
        errorMessage = '404: Resource not found.';
      } else if (error.status === 500) {
        errorMessage = '500: Internal server error. Please try again later.';
      } else if (error.status === 0) {
        errorMessage = 'Status code: 0';
      }
      this.snackBar.open(errorMessage, 'Dismiss', { duration: 3000 });
      console.error(errorMessage)
      }
      else {
      console.error('Non-HTTP error: ', error);
      }
  }
}
