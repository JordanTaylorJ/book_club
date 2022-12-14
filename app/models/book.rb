class Book < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews 

    validates :title, presence: true, uniqueness: true 
    validates :author, presence: true
    validates :image, presence: true 

end
