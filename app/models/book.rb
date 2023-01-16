class Book < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews 

    validates :title, presence: true, uniqueness: true 
    validates :author, presence: true
    validates :image, presence: true 

    def favorite_book_count
        favorite_count = 0
        self.reviews.each do |review| 
            if review.favorite == true
                favorite_count += 1
            end
        end 
        favorite_count
    end 

end
