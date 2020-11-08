class SkillsController < ApplicationController
  def index
    render json: Skill.pluck(:name)
  end
end
