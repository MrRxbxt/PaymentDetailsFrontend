import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  public cardOwnerName: string = '';
  public cardNumber: string = '';
  public expirationDate: string = ''
  public cvv: string = ''

  constructor(private service: PaymentDetailService) { }

  ngOnInit(): void {
    this.cardOwnerName = this.service.formData.CardOwnerName;
    this.cardNumber = this.service.formData.CardNumber;
    this.expirationDate = this.service.formData.ExpirationDate;
    this.cvv = this.service.formData.CVV;
  }

}
