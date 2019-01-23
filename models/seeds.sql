-- //Users table

insert into expenses.users(userName,Password,createdAt,updatedAt) values ('Manu','Manu',Now(),Now());
insert into expenses.users(userName,Password,createdAt,updatedAt) values ('Saryn','Saryn',Now(),Now());
insert into expenses.users(userName,Password,createdAt,updatedAt) values ('Amanda','Amanda',Now(),Now());
insert into expenses.users(userName,Password,createdAt,updatedAt) values ('David','David',Now(),Now());

-- //items table

 insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,UserUserId) values ('Walmart','2019-01-18','1000','Need','Groceries',Now(),Now(),'1');
 insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,UserUserId) values ('BestBuy','2019-01-18','500','Want','Electronics',Now(),Now(),'2');
 insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,UserUserId) values ('Walmart','2019-01-18','300','Want','Accessories',Now(),Now(),'3');
 insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,UserUserId) values ('Costco','2019-01-18','10','Want','Gardening',Now(),Now(),'2');
 insert into expenses.items(Store,DOP,Price,Type,Category,createdAt,updatedAt,UserUserId) values ('Walmart','2019-01-18','90','Need','Groceries',Now(),Now(),'1');