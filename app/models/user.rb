class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: {in: 3..20}
    
end
