var posts=["2023/10/05/19-26-35/","2023/10/24/18-03-16/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};