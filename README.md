# 100pages 
A bookstore and e-reader application where authors can publish and sell books. Users purchase the books and can read the books they purchased on the platform. 

## Pages 
[x] Homepaage  
[x] Sign up / Sign in  
[x] Book Details  
[x] Shop  
[x] Author Dashboard  
[x] User Dashboard  
[x] Submit Book  
[x] contact us  
[x] authors list  
[x] cart


## Database 
```
- Users 
'--------id 
'--------username 
'--------password
'--------email
'--------profile
'--------full name
'--------phone
'--------wishlist(ids)
'--------likedauthors(ids)
'--------user_status (reader/author)

- Books 
'--------id
'--------title
'--------subtitle
'--------description
'--------language 
'--------price
'--------authorid(users:id)
'--------contributors
'--------keywords
'--------status(pre-order/published)
'--------path
'--------cover
'--------backcover
'--------isbn
'--------likes
'--------categories
'--------sales
'--------redeemed
'--------releasedate

- Sales
'--------id
'--------book(books:id)
'--------status(pending/done)
'--------userid(user:id)
```

# Controllers 

[] Authentication 
[] Sliders
[] Categories 
[] Bestselling, featured, New releases, Biography, Recommended
[] filters
[] submit book 
[] My Account 
[] mobile responsiveness
