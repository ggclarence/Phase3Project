puts "🌱 Seeding spices..."

User.create(name: "Eric Gonzalez")

Post.create(post: "This is a test", user_id: 1)

Journal.create(title: "Test", journal_entry: "This is also a test", user_id: 1)

puts "✅ Done seeding!"
