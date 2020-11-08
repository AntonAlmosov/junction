def course_create
  courses = []
  400.times do
    courses += [Faker::Educator.course]
  end
  courses.uniq.each do |course|
    Course.create(name: course)
  end
end
