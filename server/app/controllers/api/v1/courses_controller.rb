class CoursesController < ApplicationController
  def index
    render json: Course.pluck(:name)
  end
end
