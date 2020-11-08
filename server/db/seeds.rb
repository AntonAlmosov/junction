require 'ffaker'
require 'faker'

%w[
  courses
  skills
  users
].each do |file|
  require __dir__ + "/data/#{file}.rb"
end

1.times do
  course_create
  skills_create
end

50.times do
  users_create
end
