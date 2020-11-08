def skills_create  
  skills = FFaker::Skill.specialties(num = 400).each do |skill|
    [skill]
  end

  skills.uniq.each do |skill|
    Skill.create(name: skill)
  end
end
