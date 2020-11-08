RANGE = (-10..10).to_a
POSITIVE_RANGE = (1..10).to_a
SEX = %w[Female Male Other]

def users_create
  user = User.create(user_data)

  skill_range = (1..8).to_a

  created_rating(skill_range, user)

  print "User #{user.id} was succesfully created"
end

def user_data
  {
    email: Faker::Internet.email,
    password: '123456',
    name: FFaker::Name.first_name,
    surname: FFaker::Name.last_name,
    character: RANGE.sample,
    conservatism: RANGE.sample,
    course_id: POSITIVE_RANGE.sample,
    sex: SEX.sample,
    avatar: user_photos.sample
  }
end

def user_photos
  %w[
    https://drive.google.com/file/d/1LGwHTWX2bDtR57bXCmBTZSe82M5LVBdW/view?usp=sharing
    https://drive.google.com/file/d/1wb5Ulzwlni2FdQy-KIn-3R_TZAIpmlJA/view?usp=sharing
    https://drive.google.com/file/d/1f090R-slWutll4_bVzDKpnQjCs7s4H8S/view?usp=sharing
    https://drive.google.com/file/d/1kdEojJ8yXFb69g0cz5jgOGptJI727v3M/view?usp=sharing
    https://drive.google.com/file/d/1bDVA6yJgtUaaskBF65euKvH3oOBScdu7/view?usp=sharing
    https://drive.google.com/file/d/1-LLxA3i5LrilB1A95Rzlb-Igyba7DKad/view?usp=sharing
    https://drive.google.com/file/d/1k0N3zXWEp9zvFMZ0g30uGkW2YjET2zHz/view?usp=sharing
    https://drive.google.com/file/d/1Jf0hGjOb_f0a57rRTfGRyNUjJRWtWzc6/view?usp=sharing
    https://drive.google.com/file/d/1_iiE98fMpIeC2GMOFQJtP4kS3Ay6wMOs/view?usp=sharing
    https://drive.google.com/file/d/12G-VoZORbz2NJTEtHm4_QW1PQ736K9kO/view?usp=sharing
    https://drive.google.com/file/d/1IaZNJ7Qz1jbWNekiSUoe4letjFRNjc8w/view?usp=sharing
    https://drive.google.com/file/d/18ErzeX6mvC9LNbqLuNKws7jPIMaJL8Xh/view?usp=sharing
    https://drive.google.com/file/d/1iZolmlvLcdbA9fagQFwIAmS9jpI4Yng7/view?usp=sharing
    https://drive.google.com/file/d/1YwVYDcRUGy1gQoX_7ven_tm-wd68y88x/view?usp=sharing
    https://drive.google.com/file/d/1VvJpo2ULNkS1JQvxU3t_eoHWghdX4xId/view?usp=sharing
    https://drive.google.com/file/d/1_iiE98fMpIeC2GMOFQJtP4kS3Ay6wMOs/view?usp=sharing
  ]
end

def created_rating(skill_range, user)
  skill_range.sample.times do
    skill_ids = user.ratings.pluck(:skill_id)
    skills = Skill.where.not(id: skill_ids)
    Rating.create(
      value: POSITIVE_RANGE.sample,
      skill_id: skills.sample.id,
      user_id: user.id,
    )
  end
end
