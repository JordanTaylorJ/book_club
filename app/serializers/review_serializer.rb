class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :comment, :favorite
end
