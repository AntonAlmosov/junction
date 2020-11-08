class UserSerializer < ActiveModel::Serializer
  attributes :id, :course_id, :email, :name, :surname, :character,
    :conservatism, :password

  has_many :ratings, serializer: RatingsSerializer
end
