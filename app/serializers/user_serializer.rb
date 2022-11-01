class UserSerializer < ActiveModel::Serializer
  attributes :id, :username 
  has_many :books 
  #has_many :reviews
end
