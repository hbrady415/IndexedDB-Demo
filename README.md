IndexedDB docs: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API

This program uses IndexedDB to create a browser dataabse which can store up to 1GB of data allowing us to utilize the browser memory space instead of 
making trips through MySQL to pull data utilizing asycn and await to populate the database before looking for it's value;

It will:
  1) create an IndexedDB called DBTest which you can see in chrome's application tab in the inspector.
  2) Add one record to it with the key 11250|sRecords
  3) Once the transactin for step 2 has finished it will hit the database and pull out what we just put into that memory space 
