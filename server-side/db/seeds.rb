puts "🌱 Seeding users..."


User.create(name: "Thomas Ander", profile_picture: "https://d.newsweek.com/en/full/1609356/tom-anderson-myspace.jpg?w=1600&h=1600&l=38&t=18&q=88&f=6eb12635eef28644ad947cd6c58302f8")
User.create(name: "Eric Gonzalez", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02P859NKNZ-c2c3eef5925f-512")
User.create(name: "Eric Van", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02SHANJJ8Z-789afcf3a0c2-512")
User.create(name: "Stefan Inman", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02S3HVNCG0-8c5ceda42ef7-512")
User.create(name: "Rihanna", profile_picture: "https://pbs.twimg.com/profile_images/1133109643734130688/BwioAwkz_400x400.jpg")
User.create(name: "Chris Rock", profile_picture: "https://pbs.twimg.com/profile_images/1496285595580174343/_HSDdR-a_400x400.jpg")
User.create(name: "Will Smith", profile_picture: "https://www.aceshowbiz.com/images/photo/will_smith.jpg")
User.create(name: "Joe Biden", profile_picture: "https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_400x400.jpg")


puts "🌱 Seeding post..."
Post.create(post: "Had a very productive day!", user_id: 2,)
Post.create(post: "Challenge today was staying focus but a win would be that I have some chicken nuggets", user_id: 3, img_url:"")
Post.create(post: "No real challenge today. Its a lovely day.", user_id: 4,)
Post.create(post: "Damn, my jaw hurts this morning...", user_id:6, img_url:"")
Post.create(post: "Im president, yo. Get rekt", user_id: 8, img_url:"")
Post.create(post: "Keep my wifes name out your mouth", user_id:7, img_url:"")


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
