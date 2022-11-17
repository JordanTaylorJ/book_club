class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image, :reviews
  has_many :reviews 
  
end
