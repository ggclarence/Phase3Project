puts "🌱 Seeding users..."


User.create(name: "Thomas Ander")
User.create(name: "Eric Gonzalez")
User.create(name: "Eric Van")
User.create(name: "Stefan Inman")
User.create(name: "User")

puts "🌱 Seeding post..."
Post.create(post: "Had a very productive day!", user_id: 1)
Post.create(post: "Challenge today was staying focus but a win would be that I have some chicken nuggets", user_id: 2)
Post.create(post: "No real challenge today. Its a lovely day.", user_id: 3)

puts "🌱 Seeding goals..."
Goal.create(goal:"Finish 2 labs", user_id:4, status:true)

puts "🌱 Seeding Journal..."
Journal.create(title: "Test", journal_entry: "This is also a test", user_id: 1)

puts "✅ Done seeding!"
