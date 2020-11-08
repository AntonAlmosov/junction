class RatingsSerializer < ActiveModel::Serializer
  attributes :value, :name

  def name
    object.skill.name
  end
end
