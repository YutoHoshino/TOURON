class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :user
  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :username, :profile, :image])
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :username, :profile, :image])
  end

  def user
    @user = current_user
  end


end

