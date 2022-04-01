puts "🌱 Seeding users..."


User.create(name: "Thomas Ander", profile_picture: "https://d.newsweek.com/en/full/1609356/tom-anderson-myspace.jpg?w=1600&h=1600&l=38&t=18&q=88&f=6eb12635eef28644ad947cd6c58302f8")
User.create(name: "Eric Gonzalez", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02P859NKNZ-c2c3eef5925f-512")
User.create(name: "Eric Van", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02SHANJJ8Z-789afcf3a0c2-512")
User.create(name: "Stefan Inman", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02S3HVNCG0-8c5ceda42ef7-512")
User.create(name: "Rihanna", profile_picture: "https://pbs.twimg.com/profile_images/1133109643734130688/BwioAwkz_400x400.jpg")
User.create(name: "Chris Rock", profile_picture: "https://pbs.twimg.com/profile_images/1496285595580174343/_HSDdR-a_400x400.jpg")
User.create(name: "Will Smith", profile_picture: "https://www.aceshowbiz.com/images/photo/will_smith.jpg")
User.create(name: "Joe Biden", profile_picture: "https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_400x400.jpg")
User.create(name: "Mikasa ackerman", profile_picture: "https://i.pinimg.com/564x/95/bb/15/95bb15ec7b2dfa6f2ff9c6d2c9ea8ae7.jpg")
User.create(name: "Pokimane", profile_picture: "https://cdn1.dotesports.com/wp-content/uploads/2021/10/07171317/pokimanetwitch.jpg")
User.create(name: "KingKong", profile_picture: "https://cdn.vox-cdn.com/thumbor/bUF06bdfVVDUbFBWtVAxDSMEz8M=/0x0:2864x1200/920x613/filters:focal(799x609:1257x1067):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/53591117/kongyell.0.jpg")
User.create(name: "GodZilla", profile_picture: "https://cdn.kpbs.org/dims4/default/d282ac2/2147483647/strip/true/crop/1932x1190+768+0/resize/1760x1084!/format/webp/quality/90/?url=http%3A%2F%2Fkpbs-brightspot.s3.amazonaws.com%2F3f%2F3b%2Fe656ae274249b8f927aff50f421c%2Fgodzilla-vs-kong.jpeg")


puts "🌱 Seeding post..."
Post.create(post: "Had a very productive day!", user_id: 9,img_url:"https://i.pinimg.com/originals/b1/e5/67/b1e567519ca1e7914b917a87c8a013fd.gif")
Post.create(post: "King Kong got nothing on me", user_id: 12, img_url:"https://townsquare.media/site/812/files/2020/07/Eminem-Rihanna.jpg?w=980&q=75")
Post.create(post: "No real challenge today. Its a lovely day.", user_id: 4,img_url:"https://m.media-amazon.com/images/M/MV5BZWVjMmY4ODUtMmYzMC00NDdjLWE4MjMtOWUzMDBlNzczOGMwXkEyXkFqcGdeQWpnYW1i._V1_.jpg")
Post.create(post: "Damn, my jaw hurts this morning...", user_id:6, img_url:"https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/6/2022/03/28/GettyImages-1239561450.jpg&w=1280&h=720&q=90&c=cc")
Post.create(post: "Im president, yo. Get rekt", user_id: 8, img_url:"https://s.abcnews.com/images/Politics/ap_joe_biden_ice_cream_02_floated_jc_141009_16x9_992.jpg")
Post.create(post: "Keep my wifes name out your mouth", user_id:7, img_url:"https://images.indianexpress.com/2022/03/will-smith-slap-memes.jpg")


puts "🌱 Seeding goals..."
Goal.create(goal:"Finish 2 labs", user_id:4, status:true)
Goal.create(goal:"Idk, like, lead the free world or summ.", user_id:8, status: true)
Goal.create(goal:"Try not to get slapped", user_id: 6, status: false)
Goal.create(goal:"Drop another banger", user_id: 5, status: false)
Goal.create(goal:"Put love into the world", user_id: 7, status: false)
Goal.create(goal:"Sell another million dollar idea", user_id: 1, status: true)
Goal.create(goal:"Make the best app youve ever seen", user_id: 2, status: true)
Goal.create(goal:"Kill the whole game", user_id:3, status: true)


puts "🌱 Seeding Journal..."
Journal.create(title: "MySpace: A retrospective", journal_entry: "Im rich AF boy.", user_id: 1)
Journal.create(title: "Am I really your friend?", journal_entry: "Sometimes I think, like, maybe I dont have 115 million friends, ya know? But then I remember how rich I am and forget all my troubles.", user_id: 1)

puts "✅ Done seeding!"
