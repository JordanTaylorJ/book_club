class User < ApplicationRecord
    has_many :reviews
    has_many :books, through: :reviews 
    
    has_secure_password 
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: {in: 3..20}
    
end
