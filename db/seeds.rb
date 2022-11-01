# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding spices..."

u1 = User.create(username: "Admin", password: "123")
u2 = User.create(username: "John", password: "beatles")
u3 = User.create(username: "Paul", password: "beatles")
u4 = User.create(username: "Ringo", password: "beatles")
u5 = User.create(username: "George", password: "beatles")

15.times do 
    book = Book.create(
        title: Faker::Book.title,
        author: Faker::Book.author
    )
    rand(3..10).times do 
        review = Review.create(
            book_id: book.id,
            user_id: "#{rand(1..5)}",
            comment: Faker::Lorem.sentence,
            favorite: Faker::Boolean.boolean,
        )
    end
end 

puts "✅ Done seeding!"