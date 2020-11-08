# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: %i[show update matches better_people worse_people]

  def show
    @user = User.find(params[:user_id])

    render json: UserSerializer.new(@user).as_json[:user]
  end

  def matches
    User.all.sample(5)
  end

  def create
    unless params[:email].in? User.pluck(:email)
      User.create(params)
      render status: :created
    else
      { error: 'Oops' }
    end
  end

  def update
    if @user.update(params)
      render status: :ok
    else
      render status: :unprocessable_entity
    end
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def user_params
    params.require(:user).permit(
      :user_id,
      :avatar,
      :course_id,
      :email,
      :name,
      :surname,
      :character,
      :conservatism,
      :password
    )
  end
end
