using library from '../db/schema';

service LibraryService {
  entity Books      as projection on library.Books;
  entity Borrowers  as projection on library.Borrowers;
  entity Loans      as projection on library.Loans;
}
