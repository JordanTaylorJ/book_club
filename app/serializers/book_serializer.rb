class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image, :reviews, :favorite_count
  has_many :reviews 
  
end
