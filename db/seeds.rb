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

b1 = Book.create(
    title: 'Milk and Honey',
    author: 'Rupi Kaur',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
)
rand(3..5).times do 
    review = Review.create(
        book_id: b1.id,
        user_id: "#{rand(38..42)}",
        comment: Faker::Lorem.sentence,
        favorite: Faker::Boolean.boolean,
    )
end

b2 = Book.create(
    title: 'the Two Towers',
    author: 'J.R.R. Tolkien',
    image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
)
rand(3..5).times do 
    review = Review.create(
        book_id: b2.id,
        user_id: "#{rand(38..42)}",
        comment: Faker::Lorem.sentence,
        favorite: Faker::Boolean.boolean,
    )
end

b3 = Book.create(
    title: 'Pride and Preudice',
    author: 'Jane Austen',
    image: 'https://images.unsplash.com/photo-1603162525937-96b43acdac7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
)
rand(3..5).times do 
    review = Review.create(
        book_id: b3.id,
        user_id: "#{rand(38..42)}",
        comment: Faker::Lorem.sentence,
        favorite: Faker::Boolean.boolean,
    )
end

b4 = Book.create(
    title: 'the Sun and Her Flowers',
    author: 'Rupi Kaur',
    image: 'https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
)
rand(3..5).times do 
    review = Review.create(
        book_id: b4.id,
        user_id: "#{rand(38..42)}",
        comment: Faker::Lorem.sentence,
        favorite: Faker::Boolean.boolean,
    )
end

b5 = Book.create(
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    image: 'https://images.unsplash.com/photo-1618032574006-ef3b2237e181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=639&q=80'
)
rand(3..5).times do 
    review = Review.create(
        book_id: b5.id,
        user_id: "#{rand(38..42)}",
        comment: Faker::Lorem.sentence,
        favorite: Faker::Boolean.boolean,
    )
end

b6 = Book.create(
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    image: 'https://images.unsplash.com/photo-1593340010859-83edd3d6d13f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
)
rand(3..5).times do 
    review = Review.create(
        book_id: b6.id,
        user_id: "#{rand(38..42)}",
        comment: Faker::Lorem.sentence,
        favorite: Faker::Boolean.boolean,
    )
end


puts "✅ Done seeding!"

#15.times do 
#    book = Book.create(
#        title: Faker::Book.title,
#        author: Faker::Book.author
#    )
#    rand(3..5).times do 
#        review = Review.create(
#            book_id: book.id,
#            user_id: "#{rand(17..21)}",
#            comment: Faker::Lorem.sentence,
#            favorite: Faker::Boolean.boolean,
#        )
#    end
#end 