-- //Users table

insert into expenses.users(userName,Password,createdAt,updatedAt) values ('Manu','Manu',Now(),Now());
insert into expenses.users(userName,Password,createdAt,updatedAt) values ('Saryn','Saryn',Now(),Now());
insert into expenses.users(userName,Password,createdAt,updatedAt) values ('Amanda','Amanda',Now(),Now());
insert into expenses.users(userName,Password,createdAt,updatedAt) values ('David','David',Now(),Now());

-- //items table

 insert into expenses.items(Price,Typeof,Category,createdAt,updatedAt,UserUserId) values ('1000','Need','Groceries',Now(),Now(),'1');
 insert into expenses.items(Price,Typeof,Category,createdAt,updatedAt,UserUserId) values ('500','Want','Electronics',Now(),Now(),'2');
 insert into expenses.items(Price,Typeof,Category,createdAt,updatedAt,UserUserId) values ('300','Want','Accessories',Now(),Now(),'3');
 insert into expenses.items(Price,Typeof,Category,createdAt,updatedAt,UserUserId) values ('10','Want','Gardening',Now(),Now(),'2');
 insert into expenses.items(Price,Typeof,Category,createdAt,updatedAt,UserUserId) values ('90','Need','Groceries',Now(),Now(),'1');