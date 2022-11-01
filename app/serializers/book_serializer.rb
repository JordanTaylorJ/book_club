class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :reviews
  has_many :reviews 
end
