def users_create
  range = (-10..10).to_a
  positive_range = (1..10).to_a

  user = User.create(
    email: Faker::Internet.email,
    password: '123456',
    name: FFaker::Name.first_name,
    surname: FFaker::Name.last_name,
    character: range.sample,
    conservatism: range.sample,
    course_id: positive_range.sample,
  )

  skill_range = (1..8).to_a

  skill_range.sample.times do
    skill_ids = user.ratings.pluck(:skill_id)
    skills = Skill.where.not(id: skill_ids)
    Rating.create(
      value: positive_range.sample,
      skill_id: skills.sample.id,
      user_id: user.id,
    )
  end

  print "User #{user.id} was succesfully created"
end
