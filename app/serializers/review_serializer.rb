class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :comment, :favorite, :user
  belongs_to :user, serializer: UserSerializer
end
