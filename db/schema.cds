namespace library;

using { cuid, managed } from '@sap/cds/common';

entity Books : cuid, managed {
  title    : String(111);
  author   : String(111);
  stock    : Integer default 0;
  loans    : Association to many Loans on loans.book = $self;
}

entity Borrowers : cuid, managed {
  name     : String(111);
  email    : String(111);
  loans    : Association to many Loans on loans.borrower = $self;
}

entity Loans : cuid, managed {
  book     : Association to Books;
  borrower : Association to Borrowers;
  loanDate : Date;
  returned : Boolean default false;
}
