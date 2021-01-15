import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactioncomp',
  templateUrl: './transactioncomp.component.html',
  styleUrls: ['./transactioncomp.component.css']
})
export class TransactioncompComponent implements OnInit {
  userId:number=parseInt(sessionStorage.getItem("userId"));
  constructor(private transactionService:TransactionService, private router:Router) { }
  transactions:Transaction[];
  result:Transaction;

  ngOnInit() {
    this.viewTransactions();
  }
  public viewTransactions(){
    this.transactionService.viewTransactionsForUserId(this.userId).subscribe(
      data =>{
        if(data==null){
          console.log("No transactions yet");
        }else{
          this.transactions=data;
          //console.log(JSON.stringify(data));
          
        }
      }
    );
    
  }

  public viewIndividualTransactions(transactionId:number){
    this.transactionService.viewTransactionUsingTransactionId(transactionId).subscribe(
      data =>{
        if(data==null){
          console.log("No transactions yet");
        }else{
          this.result=data;
          this.router.navigate(["invoice"], {
            queryParams: { transaction: JSON.stringify(this.result) },
          });
          console.log(JSON.stringify(data));
          
        }
      }
    );
  }
}
