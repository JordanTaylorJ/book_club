class User < ApplicationRecord
    has_many :reviews
    has_many :books, -> { distinct }, through: :reviews 

    #{scope :favorite, -> { where(favorite: true) } }
    #scope :filter_by_favorite, -> (favorite) { where favorite: true }
    
    has_secure_password 
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: {in: 3..20}
    
end
